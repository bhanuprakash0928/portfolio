// Scans public/images at build/dev time and exposes the file list as the
// virtual module `virtual:image-manifest`.
//
// Result shape:  { "projects/kshopping": ["kshopping-01.png"], "certificates/aws": [...], ... }
//
// This is what lets the site show ONLY the images that actually exist:
// drop a file into a folder -> it appears. Delete it -> it disappears.
// No code change is needed.
import fs from 'node:fs'
import path from 'node:path'

const VIRTUAL_ID = 'virtual:image-manifest'
const RESOLVED_ID = '\0' + VIRTUAL_ID

export function buildManifest(imagesDir) {
  const manifest = {}

  const walk = (dir, rel = '') => {
    if (!fs.existsSync(dir)) return
    const files = []
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      if (entry.name.startsWith('.')) continue // ignore .gitkeep, .DS_Store ...
      if (entry.isDirectory()) {
        walk(path.join(dir, entry.name), rel ? `${rel}/${entry.name}` : entry.name)
      } else {
        files.push(entry.name)
      }
    }
    if (files.length) {
      manifest[rel] = files.sort((a, b) =>
        a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' })
      )
    }
  }

  walk(imagesDir)
  return manifest
}

export default function imageManifest({ dir = 'public/images' } = {}) {
  let root = '.' // replaced by the real project root in configResolved

  return {
    name: 'image-manifest',

    configResolved(config) {
      root = config.root
    },

    resolveId(id) {
      if (id === VIRTUAL_ID) return RESOLVED_ID
    },

    load(id) {
      if (id === RESOLVED_ID) {
        const manifest = buildManifest(path.resolve(root, dir))
        return `export default ${JSON.stringify(manifest)}`
      }
    },

    // Dev server: reload the page when images are added or removed.
    configureServer(server) {
      const abs = path.resolve(root, dir)
      server.watcher.add(abs)

      const refresh = (file) => {
        if (!path.resolve(file).startsWith(abs)) return
        const mod = server.moduleGraph.getModuleById(RESOLVED_ID)
        if (mod) server.moduleGraph.invalidateModule(mod)
        server.ws.send({ type: 'full-reload' })
      }

      server.watcher.on('add', refresh)
      server.watcher.on('unlink', refresh)
    },
  }
}
