/* =====================================================================
   PROJECTS  –  edit this file to add / change projects.

   Screenshots are NOT listed here. Put image files in:
       public/images/projects/<imageFolder>/
   and they are picked up automatically (sorted by file name).
   The first image is used as the cover, or set `cover: "file-name.png"`.

   ---------------------------------------------------------------------
   TEMPLATE – copy, paste at the end of the array, then fill in:

   {
     slug: "my-new-project",                 // used in the URL: /projects/my-new-project
     title: "My New Project",
     category: "Full-Stack Web Application",
     shortDescription: "One or two lines shown on the full-screen card.",
     overview: "Paragraph for the details page.",
     problem: "What problem does it solve?",
     objectives: ["Objective one", "Objective two"],
     features: [{ label: "Feature name", value: "What it does." }],
     technologies: ["React", "Node.js"],
     role: "What you built / were responsible for.",
     implementation: ["Step or technical detail one", "Step or technical detail two"],
     github: "https://github.com/...",       // or null
     live: "https://...",                    // or null
     dashboardLink: null,                    // optional (e.g. Tableau dashboard)
     storyLink: null,                        // optional (e.g. Tableau story)
     imageFolder: "projects/my-new-project", // create public/images/projects/my-new-project/
   }

   Any field you leave out is simply hidden on the details page.
   ===================================================================== */

export const projects = [
  {
    slug: "kshopping",
    title: "KShopping",
    category: "Full-Stack Web Application",
    shortDescription:
      "A full-stack e-commerce web application developed using Java and Spring Boot.",
    overview:
      "KShopping is a full-stack e-commerce web application built with Java and Spring Boot. In the real world, this architecture enables businesses to manage inventory, process secure checkouts, and handle user data efficiently.",
    problem:
      "Online stores need to let customers browse and order products smoothly, while giving owners a reliable way to manage inventory, follow orders and keep customers informed. Handling this manually or with disconnected tools is slow and error-prone.",
    objectives: [
      "Build a secure, scalable backend with Java and Spring Boot.",
      "Give customers a dashboard to browse products, manage the shopping cart and place orders.",
      "Give admins a dashboard to monitor user activity, track orders and update inventory.",
      "Automate order confirmation and status updates through email.",
    ],
    features: [
      { label: "Description", value: "Java, Spring Boot, and React stack managing application data." },
      { label: "User Dashboard", value: "Browse products, manage shopping cart, and place orders." },
      { label: "Admin Dashboard", value: "Monitor user activity, track orders, and update inventory." },
      { label: "Mail Services", value: "Automated order confirmation and status email notifications." },
    ],
    technologies: ["Java", "Spring Boot", "HTML/CSS", "JavaScript", "SQL"],
    role:
      "Developed a secure, scalable backend and dynamic frontend to streamline the online shopping experience.",
    implementation: [
      "Backend services written in Java with Spring Boot, handling users, products, carts and orders.",
      "Application data stored and queried with SQL.",
      "Separate user and admin dashboards for the day-to-day shopping and management flows.",
      "Email notifications triggered for order confirmation and order status changes.",
    ],
    github: "https://github.com/bhanuprakash0928/k-shopping",
    live: null,
    imageFolder: "projects/kshopping",
  },

  {
    slug: "vehicle-booking-system",
    title: "Vehicle Booking System",
    category: "Web Application",
    shortDescription:
      "A web-based application designed to simplify vehicle booking for travel.",
    overview:
      "A web-based application designed to simplify vehicle booking for travel. Real-world applications include logistics management and ride-hailing services, optimizing route planning and fleet allocation.",
    problem:
      "Planning a trip usually means comparing vehicles and costs across several places before booking. Travellers need one simple place to search for a vehicle, see an estimated cost and book it.",
    objectives: [
      "Let users search for vehicles and enter their travel details.",
      "Show an estimated cost before booking.",
      "Provide a smooth, interactive booking flow.",
    ],
    features: [
      { label: "Description", value: "React and REST API integration for real-time data handling." },
      { label: "User Dashboard", value: "Search vehicles, select travel details, and view cost estimates." },
      { label: "Booking System", value: "Seamless booking flow with interactive UI elements." },
    ],
    technologies: ["React", "JavaScript", "HTML/CSS", "REST API"],
    role:
      "Built an interactive interface for calculating estimated costs and booking trips.",
    implementation: [
      "Component-based user interface built with React.",
      "REST API integration for real-time data handling.",
      "Interactive booking flow with cost estimation based on the selected travel details.",
    ],
    github: null,
    live: "https://quick-ride-parcel.lovable.app/",
    imageFolder: "projects/vehicle-booking",
  },

  {
    slug: "cosmetics-analysis-dashboard",
    title: "Cosmetics Product Analysis Dashboard",
    category: "Data Analytics / Tableau",
    shortDescription:
      "An interactive Tableau dashboard to analyze cosmetics products and trends.",
    overview:
      "An interactive Tableau dashboard that analyzes cosmetics products and market trends. In a business context, this helps cosmetic brands identify market trends, pricing strategies, and customer preferences for data-driven decisions.",
    problem:
      "Raw cosmetics product data is hard to read as plain rows. Brands need clear visuals to see which products, brands, categories and price points perform best.",
    objectives: [
      "Clean and transform the raw dataset so it is ready for analysis.",
      "Visualize product ratings, prices, brands and categories.",
      "Extract actionable insights that support marketing decisions.",
    ],
    features: [
      { label: "Description", value: "End-to-end data pipeline from raw Excel/SQL to Tableau." },
      { label: "Trend Analysis", value: "Visualized product ratings, prices, brands, and categories." },
      { label: "Customer Insights", value: "Extracted actionable metrics to support marketing strategies." },
    ],
    technologies: ["Tableau", "SQL", "Excel", "Data Analysis", "Data Visualization"],
    role:
      "Cleaned and transformed raw data using Excel and SQL, then built the interactive visualizations in Tableau.",
    implementation: [
      "Raw data cleaned and transformed using Excel and SQL.",
      "Interactive Tableau visualizations built on the prepared data.",
      "Published to Tableau Public so the dashboard can be explored online.",
    ],
    github: "https://github.com/bhanuprakash0928/Cosmetic-Insights-Tableau",
    live: null,
    dashboardLink:
      "https://public.tableau.com/app/profile/yettapu.bhanu.prakash.reddy/viz/CosmeticsDashboard_17829848680900/Dashboard1",
    storyLink: null, // add your Tableau Story URL here when it is ready
    imageFolder: "projects/cosmetics-tableau",
  },

  {
    slug: "personal-portfolio",
    title: "Personal Portfolio",
    category: "Frontend / React",
    shortDescription:
      "A responsive portfolio website to showcase my technical skills and projects.",
    overview:
      "A responsive portfolio website that presents my technical skills, projects, certificates and achievements. It demonstrates modern web development practices, accessibility standards, and responsive design.",
    problem:
      "Recruiters and hiring managers need one place to quickly see a developer's skills, projects and certifications, on any device.",
    objectives: [
      "Present skills, projects and certificates in a clean, professional layout.",
      "Work smoothly on desktop, tablet and mobile.",
      "Keep content easy to update without touching components.",
    ],
    features: [
      { label: "Description", value: "Built with React and Vite for optimal performance." },
      { label: "UI/UX Design", value: "Features smooth animations, glassmorphism, and responsive grids." },
      { label: "Accessibility", value: "Keyboard navigable with semantic HTML structure." },
    ],
    technologies: ["React", "JavaScript", "HTML", "CSS", "Vite"],
    role:
      "Designed and developed the whole UI to present my professional journey.",
    implementation: [
      "Single-page React application bundled with Vite.",
      "Content driven by simple data files for projects, certificates and gallery images.",
      "Contact form connected to EmailJS.",
    ],
    github: "https://github.com/bhanuprakash0928/portfolio",
    live: "https://y-bhanu-portfolio.netlify.app/",
    imageFolder: "projects/personal-portfolio",
  },

  /* Folders already created for these two – add their details here when ready
     (see the template at the top of this file):
       public/images/projects/video-slot-booking/
       public/images/projects/smart-exam-allocation/
  */
]

export const getProject = (slug) => projects.find((p) => p.slug === slug)
