/** Decorative floating aurora orbs (pure CSS animation, see App.css). */
function Background() {
  return (
    <div className="bg-orbs" aria-hidden="true">
      <span className="bg-orb orb-violet" />
      <span className="bg-orb orb-cyan" />
      <span className="bg-orb orb-pink" />
    </div>
  );
}

export default Background;
