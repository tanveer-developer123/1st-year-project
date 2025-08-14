interface ProjectItem {
  title: string;
  description: string;
  imageUrl: string;
  altText: string;
  click: string;
}

const projects: ProjectItem[] = [
  {
    title: "SkyMart",
    description: "SkyMart is an e-commerce website built with React, Tailwind CSS, and Bootstrap. Users can browse products, add them to their cart, and save favorites.",
    imageUrl: "https://protfolio-personal.vercel.app/skymart.png",
    altText: "E-Commerce Platform",
    click: "https://skytechmart.netlify.app/"
  },
  {
    title: "Apartment Management System",
    description: "A web-based apartment management system using React, created during internship. My first real-world full UI project.",
    imageUrl: "https://protfolio-personal.vercel.app/apartment.jpg",
    altText: "Apartment Management System",
    click: "https://website-apartment-project.netlify.app/"
  },
  {
    title: "Bootpress AI Platform",
    description: "Bootpress is a Web app built using React.js, Tailwind CSS, and Bootstrap, with Firebase Authentication. Soon, it will integrate an AI system allowing users to interact with AI-generated content directly within the app.",
    imageUrl: "https://protfolio-personal.vercel.app/AI.jpg",
    altText: "AI Web Application",
    click: "https://bootpress-ai.vercel.app/"
  },
  {
    title: "News AI App",
    description: "A real-time news aggregator web app powered by a public news API. It fetches and displays the latest news articles with images, headlines, summaries, and publish timestamps. The layout is responsive and optimized for fast content delivery.",
    imageUrl: "Newspng.png",
    altText: "News AI App Screenshot",
    click: "https://news-ai-ruj2.vercel.app/"
  },
  {
    title: "Data Converter Table",
    description: "A React + Firestore form app where users fill a form and see it reflected live in a table.",
    imageUrl: "https://protfolio-personal.vercel.app/D_Convertpng.png",
    altText: "Form to Table App",
    click: "https://firestore-crud-ts.web.app/"
  },
  {
    title: "Mini LMS (Learning Platform)",
    description: "A simple LMS to list YouTube courses. Learners can explore and access resources easily. Built with React.",
    imageUrl: "https://protfolio-personal.vercel.app/LMS.png",
    altText: "Mini LMS",
    click: "https://protfolio-personal.vercel.app/"
  },
  {
    title: "Crypto Tracker App",
    description: "A live cryptocurrency tracker app that displays real-time market data for over 120 coins using public API integration. Users can monitor market cap, price, volume, and rank dynamically.",
    imageUrl: "crypot.png",
    altText: "Crypto Market Tracker",
    click: "https://crypto-view-ruddy.vercel.app/"
  },
  {
    title: "Ramdan Info App",
    description: "A clean web app providing updated Sehri and Iftar timings during Ramzan. Built with HTML, CSS, and JavaScript. Useful for daily Islamic schedule during holy month.",
    imageUrl: "ramdan.png",
    altText: "Ramdan Info Web App",
    click: "https://web-ramdan.vercel.app/"
  },
  {
    title: "Movie App",
    description: "A React + TypeScript web app that fetches movie data from an external API. Allows users to explore latest movies with titles, posters, and release info. Built with clean UI.",
    imageUrl: "film.png",
    altText: "Movie App Preview",
    click: "https://movie-six-sand.vercel.app/"
  },
  {
    title: "Amazon Clone",
    description: "A frontend clone of Amazon with product listings, modern design, and add-to-cart functionality. Built with React and styled using Tailwind CSS.",
    imageUrl: "amazon.png", // ← replace with actual image if you have one
    altText: "Amazon Clone",
    click: "https://amazon-clone-pi-flax.vercel.app/"
  }
];

const TanveerProjects = () => {
  return (
    <div className="max-w-6xl mx-auto py-12 p-4 dark:bg-gray-900 dark:text-white transition-colors duration-300">
      <div className="py-16 text-center mb-10">

        <h1 className="text-3xl font-bold mb-2">Web Development Projects</h1>
        <p className="text-gray-600 dark:text-gray-300">
          A showcase of my best projects in AI, Web Development, and Learning.
        </p>
        <div className="mt-2 text-sm uppercase text-blue-600 font-semibold tracking-widest">
          Code. Learn. Build.
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 shadow-md rounded-2xl p-4 border border-gray-100 dark:border-gray-700 transition-colors duration-300"
          >
            {project.imageUrl ? (
              <a
                href={project.click}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={project.imageUrl}
                  alt={project.altText}
                  className="w-full h-48 object-cover rounded-xl mb-3 hover:opacity-90 transition-opacity duration-300"
                />
              </a>
            ) : (
              <div className="w-full h-48 bg-gray-200 dark:bg-gray-700 rounded-xl mb-3" />
            )}
            <h2 className="text-xl font-semibold text-blue-700 dark:text-blue-400">
              {project.title || "Coming Soon..."}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">
              {project.description ||
                "This project is under development or not added yet."}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TanveerProjects;
