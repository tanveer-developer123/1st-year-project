import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";

interface LearningCategory {
    title: string;
    icon: string;
    color: string;
    skills: string[];
}
interface Project {
    title: string;
    description: string;
    imageUrl: string;
    altText: string;
    technologies: string;
    linkText: string;
    linkHref: string;
}

const Home = () => {
    useEffect(() => {
        AOS.init({ once: true });
    }, []);
    const webProjects: Project[] = [
        {
            title: "E-commerce Intelligence Dashboard",
            description: "A real-time analytics dashboard built with **React, Next.js, and Node.js**, offering deep insights into sales, customer behavior, and inventory.",
            imageUrl: "https://placehold.co/112x112/1F2937/D1D5DB?text=Web+Dash", // Placeholder image
            altText: "E-commerce Analytics Dashboard",
            technologies: "React, Next.js, Node.js",
            linkText: "View Case Study",
            linkHref: "/projects/web/ecommerce-dashboard",
        },
        {
            title: "Dynamic Portfolio Creator",
            description: "A personalized portfolio builder leveraging **MongoDB** for flexible data storage and **Tailwind CSS** for stunning, customizable UIs.",
            imageUrl: "https://placehold.co/112x112/1F2937/D1D5DB?text=Portfolio", // Placeholder image
            altText: "Interactive Portfolio Builder",
            technologies: "MongoDB, Tailwind CSS",
            linkText: "View Demo",
            linkHref: "/projects/web/portfolio-creator",
        },
        // Add more web projects here if needed
    ];

    // Data for AI/ML & Python Projects
    const aiMlProjects: Project[] = [
        {
            title: "Advanced Sentiment Analysis Engine",
            description: "An NLP-powered tool utilizing **TensorFlow and Keras** to accurately gauge public sentiment from text data, vital for market research.",
            imageUrl: "https://placehold.co/112x112/1F2937/D1D5DB?text=Sentiment", // Placeholder image
            altText: "Sentiment Analysis Engine",
            technologies: "TensorFlow, Keras",
            linkText: "Read About It",
            linkHref: "/projects/ai-ml/sentiment-analysis",
        },
        {
            title: "Smart Sales Forecasting Model",
            description: "A robust Machine Learning model using **Scikit-learn and Pandas** for highly accurate future sales predictions based on historical data.",
            imageUrl: "https://placehold.co/112x112/1F2937/D1D5DB?text=Forecasting", // Placeholder image
            altText: "Predictive Sales Forecasting Model",
            technologies: "Scikit-learn, Pandas",
            linkText: "Explore Model",
            linkHref: "/projects/ai-ml/sales-forecasting",
        },
        // Add more AI/ML projects here if needed
    ];
    const learningCategories: LearningCategory[] = [
        { title: "Web Development", icon: "fas fa-code", color: "text-blue-400", skills: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Node.js", "MongoDB", "Tailwind CSS", "Git", "REST API"] },
        { title: "Data Science", icon: "fas fa-chart-bar", color: "text-purple-400", skills: ["Python", "R", "SQL", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Scikit-learn", "EDA", "Statistics"] },
        { title: "Machine Learning", icon: "fas fa-brain", color: "text-pink-400", skills: ["Python", "Scikit-learn", "TensorFlow", "Keras", "XGBoost", "LightGBM", "Feature Engineering", "Model Evaluation", "Supervised/Unsupervised"] },
        { title: "Artificial Intelligence (AI)", icon: "fas fa-robot", color: "text-red-400", skills: ["Python", "TensorFlow", "PyTorch", "OpenCV", "NLP", "Speech Recognition", "Deep Learning", "Computer Vision", "LLMs", "Prompt Engineering"] },
        { title: "Data Engineering", icon: "fas fa-database", color: "text-green-400", skills: ["Python", "SQL", "Apache Spark", "Apache Kafka", "Airflow", "ETL Pipelines", "AWS", "GCP", "BigQuery", "Docker", "Data Warehousing"] },
        { title: "Data Analysis", icon: "fas fa-search-dollar", color: "text-indigo-400", skills: ["Python", "R", "Excel", "SQL", "Pandas", "Power BI", "Tableau", "Jupyter Notebook", "Descriptive Statistics", "Data Wrangling"] },
    ];

    // Helper function to get the description based on the title
    const getDescription = (title: string): string => {
        switch (title) {
            case "Web Development": return "Build dynamic, responsive web applications and robust backends from the ground up.";
            case "Data Science": return "Uncover deep insights, make data-driven predictions, and solve complex problems.";
            case "Machine Learning": return "Develop intelligent systems that learn, adapt, and make informed decisions from data.";
            case "Artificial Intelligence (AI)": return "Explore cutting-edge AI concepts, from natural language processing to computer vision.";
            case "Data Engineering": return "Design, build, and maintain scalable data pipelines and infrastructures.";
            case "Data Analysis": return "Interpret and present data effectively to support critical business and research decisions.";
            default: return "";
        }
    };
    return (
        <>
            <div className="min-h-screen bg-gradient-to-br from-gray-950 to-slate-900 text-slate-100 font-sans antialiased selection:bg-purple-600 selection:text-white">

                <main className="container mx-auto py-8">
                    {/* Part 1 Hero Section: Dynamic & Engaging */}
                    <section
                        id="hero"
                        className="text-center py-24 lg:py-40 relative overflow-hidden rounded-3xl shadow-3xl bg-gradient-to-br from-[#0f1117] to-[#1a1d27] border border-neutral-800"
                        data-aos="zoom-in"
                        data-aos-duration="800"
                    >
                        <div
                            className="absolute inset-0 opacity-90"
                            style={{
                                backgroundImage:
                                    'url("https://images.unsplash.com/photo-1461749280684-dccba630e2f6?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29kaW5nfGVufDB8fDB8fHww")',
                                backgroundSize: "cover",
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "center",
                                animation: "pan-background 60s linear infinite",
                            }}
                            data-aos="fade"
                            data-aos-delay="100"
                            data-aos-duration="1000"
                        ></div>

                        <div
                            className="absolute inset-0 bg-black opacity-60"
                            data-aos="fade"
                            data-aos-delay="200"
                            data-aos-duration="1000"
                        ></div>

                        <div className="relative z-10 p-8 lg:p-16" data-aos="fade-up" data-aos-delay="300">
                            <h1
                                className="text-4xl md:text-6xl lg:text-7xl font-['Montserrat'] font-extrabold mb-6 leading-tight text-white text-shadow-glow"
                                data-aos="fade-right"
                                data-aos-delay="400"
                                data-aos-duration="1000"
                            >
                                <span
                                    className="text-cyan-400 block mb-2"
                                    data-aos="zoom-in"
                                    data-aos-delay="450"
                                    data-aos-duration="800"
                                >
                                    Data Visualization:
                                </span>
                                Discover Insights. Build Skills. Make an Impact.
                            </h1>

                            <p
                                className="text-lg md:text-xl lg:text-2xl mb-10 max-w-5xl mx-auto text-slate-100 leading-relaxed font-['Lato']"
                                data-aos="fade-up"
                                data-aos-delay="500"
                                data-aos-duration="1000"
                            >
                                Welcome to the platform where raw data transforms into powerful visual stories. Whether you're
                                a curious beginner, a passionate developer, or a business seeking clarity — you'll find the{" "}
                                <strong
                                    className="text-white font-bold"
                                    data-aos="zoom-in"
                                    data-aos-delay="600"
                                    data-aos-duration="800"
                                >
                                    tools, knowledge, and support
                                </strong>{" "}
                                you need to bring your data to life.
                            </p>

                            <div
                                className="flex flex-col md:flex-row justify-center space-y-6 md:space-y-0 md:space-x-8"
                                data-aos="fade-up"
                                data-aos-delay="700"
                                data-aos-duration="1000"
                            >
                                <a
                                    href="#learn"
                                    className="px-12 py-5 bg-gradient-to-r from-teal-500 to-emerald-600 hover:from-teal-600 hover:to-emerald-700 text-white font-bold text-lg rounded-full shadow-3xl transition-all duration-300 transform hover:scale-105 hover:ring-4 ring-teal-400 ring-opacity-70 focus:outline-none focus:ring-4 focus:ring-teal-400 focus:ring-opacity-70 group"
                                    data-aos="zoom-in"
                                    data-aos-delay="800"
                                    data-aos-duration="800"
                                >
                                    <span className="flex items-center justify-center">
                                        <i
                                            className="fas fa-graduation-cap mr-3"
                                            data-aos="flip-left"
                                            data-aos-delay="850"
                                            data-aos-duration="800"
                                        ></i>
                                        Start Learning Now
                                    </span>
                                </a>

                                <a
                                    href="#tools"
                                    className="px-12 py-5 border-4 border-cyan-400 text-cyan-300 font-bold text-lg rounded-full shadow-3xl transition-all duration-300 transform hover:scale-105 hover:bg-cyan-600 hover:text-white focus:outline-none focus:ring-4 focus:ring-cyan-400 focus:ring-opacity-70 group"
                                    data-aos="zoom-in"
                                    data-aos-delay="850"
                                    data-aos-duration="800"
                                >
                                    <span className="flex items-center justify-center">
                                        <i
                                            className="fas fa-chart-line mr-3"
                                            data-aos="flip-left"
                                            data-aos-delay="900"
                                            data-aos-duration="800"
                                        ></i>
                                        Visualize Your Data
                                    </span>
                                </a>
                            </div>
                        </div>
                    </section>


                    {/* Part 2 Key Features Overview: Refined Messaging & Visuals */}
                    <section
                        id="features-overview"
                        className="my-24 px-4 py-16 text-center bg-gradient-to-br from-gray-900 to-black rounded-3xl shadow-2xl overflow-hidden"
                        data-aos="fade-up"
                        data-aos-duration="1000"
                    >
                        <h2
                            className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-['Poppins'] mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 drop-shadow-lg"
                            data-aos="zoom-in-right"
                            data-aos-delay="100"
                            data-aos-duration="800"
                        >
                            Your Comprehensive Data Ecosystem
                        </h2>

                        <p
                            className="text-lg md:text-xl lg:text-2xl font-['Lato'] text-slate-300 mb-16 max-w-4xl mx-auto leading-relaxed px-4"
                            data-aos="fade-up"
                            data-aos-delay="200"
                            data-aos-duration="800"
                        >
                            We've meticulously designed a platform that integrates all facets of data interaction: <strong>secure access, deep learning, inspiring projects, powerful tools, and intelligent assistance.</strong>
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 max-w-7xl mx-auto">
                            {/* Card 1 */}
                            <div
                                className="relative bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl shadow-xl border border-slate-700 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 hover:border-purple-500 group overflow-hidden"
                                data-aos="zoom-in-up"
                                data-aos-delay="300"
                                data-aos-duration="800"
                            >
                                <div className="absolute inset-0 bg-purple-900 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                                <i className="fas fa-lock text-5xl text-purple-400 mb-6 transition-all duration-300 group-hover:text-purple-300 group-hover:scale-110"
                                    data-aos="flip-left" data-aos-delay="350" data-aos-duration="600"></i>
                                <h3 className="text-2xl font-bold font-['Montserrat'] mb-3 text-white"
                                    data-aos="fade-right" data-aos-delay="400" data-aos-duration="600">
                                    Advanced Authentication
                                </h3>
                                <p className="text-slate-400 text-base font-['Open_Sans'] leading-relaxed"
                                    data-aos="fade-in" data-aos-delay="450" data-aos-duration="600">
                                    Secure your journey with Face Authentication & JWT-powered login/signup.
                                </p>
                            </div>

                            {/* Card 2 */}
                            <div
                                className="relative bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl shadow-xl border border-slate-700 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 hover:border-teal-500 group overflow-hidden"
                                data-aos="zoom-in-up"
                                data-aos-delay="400"
                                data-aos-duration="800"
                            >
                                <div className="absolute inset-0 bg-teal-900 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                                <i className="fas fa-book-open text-5xl text-teal-400 mb-6 transition-all duration-300 group-hover:text-teal-300 group-hover:scale-110"
                                    data-aos="flip-left" data-aos-delay="450" data-aos-duration="600"></i>
                                <h3 className="text-2xl font-bold font-['Montserrat'] mb-3 text-white"
                                    data-aos="fade-right" data-aos-delay="500" data-aos-duration="600">
                                    In-Depth Learning
                                </h3>
                                <p className="text-slate-400 text-base font-['Open_Sans'] leading-relaxed"
                                    data-aos="fade-in" data-aos-delay="550" data-aos-duration="600">
                                    Master Web Dev, Data Science, AI, and more with structured courses.
                                </p>
                            </div>

                            {/* Card 3 */}
                            <div
                                className="relative bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl shadow-xl border border-slate-700 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 hover:border-orange-500 group overflow-hidden"
                                data-aos="zoom-in-up"
                                data-aos-delay="500"
                                data-aos-duration="800"
                            >
                                <div className="absolute inset-0 bg-orange-900 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                                <i className="fas fa-project-diagram text-5xl text-orange-400 mb-6 transition-all duration-300 group-hover:text-orange-300 group-hover:scale-110"
                                    data-aos="flip-left" data-aos-delay="550" data-aos-duration="600"></i>
                                <h3 className="text-2xl font-bold font-['Montserrat'] mb-3 text-white"
                                    data-aos="fade-right" data-aos-delay="600" data-aos-duration="600">
                                    Inspiring Projects
                                </h3>
                                <p className="text-slate-400 text-base font-['Open_Sans'] leading-relaxed"
                                    data-aos="fade-in" data-aos-delay="650" data-aos-duration="600">
                                    Explore real-world applications from our expert developers.
                                </p>
                            </div>

                            {/* Card 4 */}
                            <div
                                className="relative bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl shadow-xl border border-slate-700 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 hover:border-red-500 group overflow-hidden"
                                data-aos="zoom-in-up"
                                data-aos-delay="600"
                                data-aos-duration="800"
                            >
                                <div className="absolute inset-0 bg-red-900 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                                <i className="fas fa-tools text-5xl text-red-400 mb-6 transition-all duration-300 group-hover:text-red-300 group-hover:scale-110"
                                    data-aos="flip-left" data-aos-delay="650" data-aos-duration="600"></i>
                                <h3 className="text-2xl font-bold font-['Montserrat'] mb-3 text-white"
                                    data-aos="fade-right" data-aos-delay="700" data-aos-duration="600">
                                    Powerful Data Tools
                                </h3>
                                <p className="text-slate-400 text-base font-['Open_Sans'] leading-relaxed"
                                    data-aos="fade-in" data-aos-delay="750" data-aos-duration="600">
                                    Visualize any data format & get instant AI assistance.
                                </p>
                            </div>
                        </div>
                    </section>


                    {/* Part 3 Learn Section */}
                    <section id="learn" className="min-h-screen bg-gradient-to-br from-gray-950 to-gray-800 text-slate-200 font-sans py-16">
                        <div className="container mx-auto px-4">

                            {/* Section title */}
                            <h2
                                className="text-4xl lg:text-5xl font-extrabold text-center mb-16 text-teal-300 drop-shadow-lg leading-tight"
                                data-aos="fade-right"
                                data-aos-duration="1000"
                            >
                                Master the Future: <br className="sm:hidden" /> Deep-Dive Learning Paths
                            </h2>

                            {/* Section description */}
                            <p
                                className="text-xl text-center mb-16 max-w-4xl mx-auto text-slate-300 leading-relaxed"
                                data-aos="fade-up"
                                data-aos-delay="200"
                                data-aos-duration="1000"
                            >
                                Whether you're starting from scratch or looking to specialize, our comprehensive learning modules cover the entire spectrum of modern data and development skills. Each path is designed to take you from foundational concepts to advanced mastery.
                            </p>

                            {/* Grid for individual learning category cards */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-10">
                                {learningCategories.map((category, index) => (
                                    <div
                                        key={index}
                                        className="bg-slate-800 p-8 rounded-2xl shadow-xl border border-slate-700 hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-4 relative overflow-hidden group bg-gradient-to-br from-slate-800 to-slate-700 hover:border-teal-400"
                                        data-aos="fade-up"
                                        data-aos-delay={`${index * 100}`}
                                        data-aos-duration="800"
                                    >
                                        {/* Subtle background hover overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-slate-900 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>

                                        {/* Color strip at top */}
                                        <div className={`absolute top-0 left-0 w-full h-2 ${category.color.replace('text-', 'bg-')} rounded-t-2xl`}></div>

                                        {/* Icon */}
                                        <i
                                            className={`${category.icon} text-6xl ${category.color} mb-6 transition-transform duration-300 group-hover:scale-115`}
                                            data-aos="zoom-in"
                                            data-aos-delay="100"
                                            data-aos-duration="600"
                                        ></i>

                                        {/* Category title */}
                                        <h3
                                            className="text-3xl font-bold mb-4 text-white leading-snug"
                                            data-aos="fade-left"
                                            data-aos-delay="200"
                                            data-aos-duration="600"
                                        >
                                            {category.title}
                                        </h3>

                                        {/* Category description */}
                                        <p
                                            className="text-slate-400 mb-6 text-lg leading-relaxed"
                                            data-aos="fade-up"
                                            data-aos-delay="300"
                                            data-aos-duration="600"
                                        >
                                            {getDescription(category.title)}
                                        </p>

                                        {/* Key Skills heading */}
                                        <h4
                                            className="text-xl font-semibold text-white mb-4 border-b border-slate-700 pb-2"
                                            data-aos="fade-right"
                                            data-aos-delay="350"
                                            data-aos-duration="600"
                                        >
                                            Key Skills:
                                        </h4>

                                        {/* Skill list */}
                                        <ul className="list-none text-slate-400 text-base grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-4">
                                            {category.skills.map((skill, sIdx) => (
                                                <li
                                                    key={sIdx}
                                                    className="flex items-center"
                                                    data-aos="zoom-in"
                                                    data-aos-delay={400 + sIdx * 50}
                                                    data-aos-duration="600"
                                                >
                                                    <span className="inline-block w-2.5 h-2.5 rounded-full bg-teal-500 mr-2 flex-shrink-0 animate-pulse"></span>
                                                    {skill}
                                                </li>
                                            ))}
                                        </ul>

                                        {/* CTA button */}
                                        <a
                                            href={`/learn/${category.title.toLowerCase().replace(/\s/g, '-')}`}
                                            className="mt-10 inline-block px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg rounded-full shadow-lg transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-75 group-hover:bg-blue-500"
                                            data-aos="fade-up"
                                            data-aos-delay="600"
                                            data-aos-duration="600"
                                        >
                                            Start Learning {category.title} &rarr;
                                        </a>
                                    </div>
                                ))}
                            </div>

                            {/* Explore All Learning Paths CTA */}
                            <div className="text-center mt-24" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">
                                <a
                                    href="/learn"
                                    className="w-full sm:w-auto px-6 sm:px-14 py-4 sm:py-6 text-lg sm:text-2xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-bold rounded-full shadow-xl transition-all duration-300 transform hover:scale-105 hover:ring-4 ring-purple-400 ring-opacity-60 focus:outline-none focus:ring-4 focus:ring-purple-500 focus:ring-opacity-75 tracking-wide text-center"
                                    data-aos="zoom-in-up"
                                    data-aos-delay="300"
                                    data-aos-duration="800"
                                >
                                    Explore All {learningCategories.length}+ Learning Paths
                                </a>
                            </div>
                        </div>
                    </section>


                    {/* Part 4 Projects Section */}
                    <section id="projects" className="min-h-screen bg-gradient-to-br from-gray-950 to-gray-800 text-slate-200 font-sans py-16">
                        <div className="container mx-auto px-4">
                            {/* Section title */}
                            <h2 className="text-4xl lg:text-5xl font-extrabold text-center mb-16 text-orange-300 drop-shadow-lg leading-tight"
                                data-aos="fade-right" data-aos-duration="1000">
                                Our Vision in Action: <br className="sm:hidden" /> Curated Project Portfolios
                            </h2>

                            {/* Section description */}
                            <p className="text-xl text-center mb-16 max-w-4xl mx-auto text-slate-300 leading-relaxed"
                                data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
                                Witness the power of code and data come alive through impactful, real-world applications. Our two core development
                                pillars showcase innovative solutions built to inspire and solve complex challenges.
                            </p>

                            {/* Grid for project categories (Web Dev and AI/ML) */}
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                                {/* Web Development Projects */}
                                <div className="bg-slate-800 p-10 rounded-2xl shadow-xl border border-slate-700 hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-4 relative overflow-hidden bg-gradient-to-br from-slate-800 to-slate-700"
                                    data-aos="fade-right" data-aos-duration="1000" data-aos-delay="300">

                                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-slate-900 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>

                                    <h3 className="text-3xl font-bold mb-8 text-yellow-300 flex items-center justify-center"
                                        data-aos="zoom-in" data-aos-delay="400">
                                        <i className="fas fa-globe mr-4 text-4xl"></i> Web Development Masterpieces
                                    </h3>

                                    <p className="text-slate-400 mb-8 text-lg leading-relaxed" data-aos="fade-up" data-aos-delay="500">
                                        Explore a diverse range of modern web applications, from interactive dashboards and robust e-commerce solutions
                                        to scalable CMSs. Each project shows our commitment to clean code, responsive design, and great UX.
                                    </p>

                                    <div className="space-y-8">
                                        {webProjects.map((project, index) => (
                                            <div key={index} className="bg-slate-700 p-6 rounded-lg shadow-md flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6 border border-slate-600 hover:bg-slate-600 transition duration-200 group"
                                                data-aos="fade-up" data-aos-delay={`${index * 100 + 600}`} data-aos-duration="800">
                                                <img
                                                    src={project.imageUrl}
                                                    alt={project.altText}
                                                    className="w-28 h-28 object-cover rounded-md flex-shrink-0 border border-slate-500 shadow-md group-hover:scale-105 transition-transform duration-300"
                                                    onError={(e) => { e.currentTarget.src = `https://placehold.co/112x112/1F2937/D1D5DB?text=Image+Error`; }}
                                                />
                                                <div>
                                                    <h4 className="text-2xl font-semibold text-white mb-2" data-aos="fade-up" data-aos-delay={`${index * 100 + 700}`}>{project.title}</h4>
                                                    <p className="text-slate-400 text-md mb-2" data-aos="fade-in" data-aos-delay={`${index * 100 + 800}`} dangerouslySetInnerHTML={{ __html: project.description }}></p>
                                                    <a href={project.linkHref} className="text-blue-400 hover:text-blue-300 text-md font-medium flex items-center group-hover:text-blue-200 transition-colors duration-200"
                                                        data-aos="zoom-in" data-aos-delay={`${index * 100 + 900}`}>
                                                        {project.linkText} <i className="fas fa-arrow-right ml-2 text-sm"></i>
                                                    </a>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="text-center mt-12" data-aos="zoom-in-up" data-aos-delay="700" data-aos-duration="1000">
                                        <a
                                            href="/projects/web-development"
                                            className="w-full sm:w-auto px-5 sm:px-8 py-3 sm:py-4 text-base sm:text-lg bg-yellow-600 hover:bg-yellow-700 text-white font-bold rounded-full shadow-lg transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-yellow-500 focus:ring-opacity-75 text-center"
                                        >
                                            Explore All Web Projects
                                        </a>
                                    </div>
                                </div>

                                {/* AI/ML & Python Projects */}
                                <div className="bg-slate-800 p-10 rounded-2xl shadow-xl border border-slate-700 hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-4 relative overflow-hidden bg-gradient-to-br from-slate-800 to-slate-700"
                                    data-aos="fade-left" data-aos-duration="1000" data-aos-delay="300">

                                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-slate-900 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>

                                    <h3 className="text-3xl font-bold mb-8 text-red-300 flex items-center justify-center"
                                        data-aos="zoom-in" data-aos-delay="400">
                                        <i className="fas fa-microchip mr-4 text-4xl"></i> AI/ML & Python Innovations
                                    </h3>

                                    <p className="text-slate-400 mb-8 text-lg leading-relaxed" data-aos="fade-up" data-aos-delay="500">
                                        Dive into intelligent systems, predictive analytics, and automated solutions built using AI, ML, and Python.
                                        These projects reflect the transformative power of data science.
                                    </p>

                                    <div className="space-y-8">
                                        {aiMlProjects.map((project, index) => (
                                            <div key={index} className="bg-slate-700 p-6 rounded-lg shadow-md flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6 border border-slate-600 hover:bg-slate-600 transition duration-200 group"
                                                data-aos="fade-up" data-aos-delay={`${index * 100 + 600}`} data-aos-duration="800">
                                                <img
                                                    src={project.imageUrl}
                                                    alt={project.altText}
                                                    className="w-28 h-28 object-cover rounded-md flex-shrink-0 border border-slate-500 shadow-md group-hover:scale-105 transition-transform duration-300"
                                                    onError={(e) => { e.currentTarget.src = `https://placehold.co/112x112/1F2937/D1D5DB?text=Image+Error`; }}
                                                />
                                                <div>
                                                    <h4 className="text-2xl font-semibold text-white mb-2" data-aos="fade-up" data-aos-delay={`${index * 100 + 700}`}>{project.title}</h4>
                                                    <p className="text-slate-400 text-md mb-2" data-aos="fade-in" data-aos-delay={`${index * 100 + 800}`} dangerouslySetInnerHTML={{ __html: project.description }}></p>
                                                    <a href={project.linkHref} className="text-blue-400 hover:text-blue-300 text-md font-medium flex items-center group-hover:text-blue-200 transition-colors duration-200"
                                                        data-aos="zoom-in" data-aos-delay={`${index * 100 + 900}`}>
                                                        {project.linkText} <i className="fas fa-arrow-right ml-2 text-sm"></i>
                                                    </a>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="text-center mt-12" data-aos="zoom-in-up" data-aos-delay="700" data-aos-duration="1000">
                                        <a
                                            href="/projects/ai-ml"
                                            className="w-full sm:w-auto px-5 sm:px-8 py-3 sm:py-4 text-base sm:text-lg bg-red-600 hover:bg-red-700 text-white font-bold rounded-full shadow-lg transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-red-500 focus:ring-opacity-75 text-center"
                                        >
                                            Explore All AI/ML Projects
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* View All Projects Button */}
                            <div className="text-center mt-24" data-aos="zoom-in" data-aos-delay="400" data-aos-duration="1000">
                                <a
                                    href="/projects"
                                    className="w-full sm:w-auto px-6 sm:px-12 py-4 sm:py-5 text-base sm:text-xl bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 text-white font-bold rounded-full shadow-xl transition-all duration-300 transform hover:scale-[1.02] hover:ring-4 ring-green-400 ring-opacity-60 focus:outline-none focus:ring-4 focus:ring-green-500 focus:ring-opacity-75 tracking-wide text-center leading-tight"
                                >
                                    View All Our Revolutionary Projects
                                </a>
                            </div>
                        </div>
                    </section>

                    {/* Part 5 Tools */}
                    <section
                        id="tools"
                        className="bg-gradient-to-br from-gray-950 to-gray-800 text-slate-200 font-sans py-12"
                    >
                        <div className="container mx-auto px-4">
                            {/* Section Title */}
                            <h2
                                data-aos="fade-up"
                                className="text-4xl lg:text-5xl font-extrabold text-center mb-16 text-cyan-300 drop-shadow-lg leading-tight"
                            >
                                Empower Your Workflow: <br className="sm:hidden" /> Intuitive Data Tools
                            </h2>

                            {/* Section Description */}
                            <p
                                data-aos="fade-up"
                                data-aos-delay="100"
                                className="text-xl text-center mb-16 max-w-4xl mx-auto text-slate-300 leading-relaxed"
                            >
                                Revolutionize how you interact with data. Our platform provides a
                                cutting-edge <strong className="text-cyan-400">Data Visualizer</strong> for instant insights and an
                                <strong className="text-purple-400"> AI Chatbot</strong> ready to assist with any query, making complex tasks simple.
                            </p>

                            {/* Tools Grid */}
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                                {/* Data Visualization Card */}
                                <div
                                    data-aos="zoom-in-up"
                                    data-aos-delay="200"
                                    className="bg-slate-800 p-10 rounded-2xl shadow-xl border border-slate-700 hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-4 relative overflow-hidden bg-gradient-to-br from-slate-800 to-slate-700"
                                >
                                    <h3 className="text-3xl font-bold mb-8 text-blue-300 flex items-center justify-center">
                                        <i className="fas fa-chart-pie mr-4 text-4xl"></i> Dynamic Data Visualizer
                                    </h3>
                                    <p className="text-slate-400 mb-8 text-lg leading-relaxed">
                                        Effortlessly transform raw data into beautiful, interactive visualizations. Whether it's a bar chart or heat map, gain clarity instantly.
                                    </p>

                                    {/* Supported Formats */}
                                    <div className="mb-8">
                                        <p className="text-slate-300 font-semibold mb-4 text-xl border-b border-slate-700 pb-2">Supported File Formats:</p>
                                        <div className="flex flex-wrap justify-center gap-4 text-base text-slate-400">
                                            {[".CSV", ".PDF", ".XLSX", ".DOCX", "...and more!"].map((format, index) => (
                                                <span
                                                    key={index}
                                                    data-aos="fade-up"
                                                    data-aos-delay={300 + index * 100}
                                                    className="bg-slate-700 px-5 py-2 rounded-full border border-slate-600 flex items-center shadow-md hover:bg-slate-600 transition duration-200"
                                                >
                                                    <i className={`fas ${format === ".CSV" ? "fa-file-csv text-green-400" : format === ".PDF" ? "fa-file-pdf text-red-400" : format === ".XLSX" ? "fa-file-excel text-emerald-400" : format === ".DOCX" ? "fa-file-word text-blue-400" : "fa-file-alt text-gray-400"} mr-2 text-lg`}></i>
                                                    {format}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Upload Box */}
                                    <div data-aos="fade-up" className="bg-slate-700 p-8 rounded-xl text-center border border-slate-600 shadow-inner">
                                        <p className="text-white text-2xl font-bold mb-4">Ready to See Your Data?</p>
                                        <p className="text-slate-400 mb-6 text-lg">Drag & Drop your file here or click below to upload:</p>
                                        <a
                                            href="https://datatoolfordae.streamlit.app/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <button
                                                className="px-10 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold text-xl rounded-full shadow-lg transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-75"
                                            >
                                                <i className="fas fa-upload mr-3"></i> Upload Your Data
                                            </button>
                                        </a>

                                        <p className="text-slate-500 text-sm mt-6">Secure processing. Instant visualizations. Deep insights.</p>
                                    </div>
                                </div>

                                {/* AI Chatbot Card */}
                                <div
                                    data-aos="zoom-in-up"
                                    data-aos-delay="300"
                                    className="bg-slate-800 p-10 rounded-2xl shadow-xl border border-slate-700 hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-4 relative overflow-hidden bg-gradient-to-br from-slate-800 to-slate-700"
                                >
                                    <h3 className="text-3xl font-bold mb-8 text-purple-300 flex items-center justify-center">
                                        <i className="fas fa-robot mr-4 text-4xl"></i> Intelligent AI Chatbot
                                    </h3>
                                    <p className="text-slate-400 mb-8 text-lg leading-relaxed">
                                        Ask questions and get real-time answers on development, data, or anything else. Our chatbot is powered by advanced AI.
                                    </p>
                                    <div className="bg-slate-700 p-8 rounded-xl text-center border border-slate-600 shadow-inner">
                                        <p className="text-white text-2xl font-bold mb-4">Ask Our AI Anything!</p>
                                        <p className="text-slate-400 mb-6 text-lg">Type your question below and get a smart response:</p>
                                        <div className="flex flex-col gap-4">
                                            <textarea
                                                className="w-full p-4 rounded-lg bg-slate-800 border border-slate-600 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
                                                rows={4}
                                                placeholder="e.g., Explain clustering vs classification..."
                                            ></textarea>
                                            <button
                                                className="px-10 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold text-xl rounded-full shadow-lg transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-purple-500 focus:ring-opacity-75"
                                            >
                                                <i className="fas fa-paper-plane mr-3"></i> Send Query
                                            </button>
                                        </div>
                                        <p className="text-slate-500 text-sm mt-6">Powered by advanced large language models.</p>
                                    </div>

                                    <a
                                        data-aos="fade-up"
                                        href="/tools/ai-chatbot"
                                        className="mt-10 text-purple-400 hover:text-purple-300 font-semibold text-lg transition duration-200 flex items-center justify-center"
                                    >
                                        Launch AI Chatbot &rarr;
                                    </a>
                                </div>
                            </div>

                        </div>
                    </section>

                    {/* Part 7 AI Chatbot  */}

                    <section
                        id="Chatbot"
                        className="p-6 sm:p-10  pt-12 py-10 md:p-16 bg-slate-800 rounded-xl shadow-lg border border-slate-700 hover:shadow-2xl transition-all duration-300"
                        data-aos="fade-up"
                        data-aos-delay="100"
                        data-aos-duration="1000"
                    >
                        <h3
                            className="text-3xl sm:text-4xl font-bold mb-8 text-purple-300 flex items-center justify-center"
                            data-aos="zoom-in"
                            data-aos-delay="200"
                        >
                            <i className="fas fa-comments mr-4 text-4xl"></i> AI-Powered Chat Assistant
                        </h3>

                        <p
                            className="text-slate-400 mb-8 text-lg leading-relaxed text-center"
                            data-aos="fade-in"
                            data-aos-delay="300"
                        >
                            Stuck somewhere? Need instant help? Our AI chatbot is here 24/7 to guide you, explain concepts, troubleshoot issues, and recommend resources tailored to your query.
                        </p>

                        <div
                            className="bg-slate-700 p-6 sm:p-8 rounded-xl text-center border border-slate-600 shadow-inner"
                            data-aos="zoom-in-up"
                            data-aos-delay="400"
                        >
                            <p
                                className="text-white text-xl sm:text-2xl font-bold mb-4"
                                data-aos="fade-up"
                                data-aos-delay="500"
                            >
                                Ask Anything, Anytime
                            </p>

                            <p
                                className="text-slate-400 mb-6 text-base sm:text-lg"
                                data-aos="fade-up"
                                data-aos-delay="600"
                            >
                                Type your question or choose from popular prompts below:
                            </p>

                            <div
                                className="flex flex-wrap gap-3 justify-center mb-6"
                                data-aos="fade-up"
                                data-aos-delay="700"
                            >
                                <span className="bg-slate-600 px-4 py-2 rounded-full text-slate-200 text-sm">How to clean a CSV?</span>
                                <span className="bg-slate-600 px-4 py-2 rounded-full text-slate-200 text-sm">What is a confusion matrix?</span>
                                <span className="bg-slate-600 px-4 py-2 rounded-full text-slate-200 text-sm">Build a bar chart using D3.js</span>
                            </div>

                            <Link to="/chatbot-ai">
                                <button
                                    className="px-8 sm:px-10 py-3 sm:py-4 bg-purple-600 hover:bg-purple-700 text-white font-bold text-lg sm:text-xl rounded-lg shadow-md transition duration-300 transform hover:scale-105"
                                    data-aos="zoom-in"
                                    data-aos-delay="800"
                                >
                                    <i className="fas fa-robot mr-3"></i> Launch Chatbot
                                </button>
                            </Link>

                            <p
                                className="text-slate-500 text-sm mt-6"
                                data-aos="fade-in"
                                data-aos-delay="900"
                            >
                                Trained on latest datasets. Context-aware. Developer-friendly.
                            </p>
                        </div>

                        <Link className="mt-10 inline-block text-purple-400 hover:text-purple-300 font-semibold text-lg transition duration-200 text-center w-full sm:w-auto"
                            data-aos="fade-up"
                            data-aos-delay="1000" to="chatbot-ai">
                            Talk to the Bot &rarr;

                        </Link>
                    </section>

                    {/* Part 8 Face Authentication */}

                    <section
                        id="face-auth-management"
                        className="min-h-screen bg-gradient-to-br from-gray-950 to-gray-800 text-slate-200 font-sans py-16"
                    >
                        <div className="container mx-auto px-4">
                            {/* Section title */}
                            <h2
                                className="text-4xl lg:text-5xl font-extrabold text-center mb-16 text-rose-300 drop-shadow-lg leading-tight"
                                data-aos="fade-up"
                                data-aos-delay="100"
                                data-aos-duration="700"
                            >
                                Next-Gen Security: <br className="sm:hidden" /> Face Authentication
                            </h2>

                            {/* Section description */}
                            <p
                                className="text-xl text-center mb-16 max-w-4xl mx-auto text-slate-300 leading-relaxed"
                                data-aos="fade-up"
                                data-aos-delay="200"
                                data-aos-duration="700"
                            >
                                Embrace the future of secure login systems. Our Face Authentication module
                                ensures seamless and reliable user access using computer vision and
                                encryption technology.
                            </p>

                            {/* Main Card */}
                            <div
                                className="flex flex-col lg:flex-row justify-center items-center gap-12 bg-slate-800 p-10 rounded-2xl shadow-xl border border-slate-700 transition-all duration-300 transform hover:-translate-y-4 bg-gradient-to-br from-slate-800 to-slate-700"
                                data-aos="fade-up"
                                data-aos-delay="300"
                                data-aos-duration="800"
                            >
                                {/* Image */}
                                <div
                                    className="relative w-full max-w-md flex-shrink-0"
                                    data-aos="zoom-in"
                                    data-aos-delay="400"
                                    data-aos-duration="700"
                                >
                                    <img
                                        src="https://placehold.co/400x300/1F2937/D1D5DB?text=Face+Auth+Demo"
                                        alt="Face Recognition Demo"
                                        className="w-full h-auto rounded-xl shadow-lg border border-slate-600 transform hover:scale-105 transition-transform duration-300"
                                        onError={(e) => {
                                            e.currentTarget.src = `https://placehold.co/400x300/1F2937/D1D5DB?text=Image+Error`;
                                        }}
                                    />
                                </div>

                                {/* Feature List */}
                                <div
                                    className="max-w-xl text-left lg:text-left"
                                    data-aos="fade-left"
                                    data-aos-delay="500"
                                    data-aos-duration="800"
                                >
                                    <ul className="space-y-5 text-lg text-slate-300">
                                        {[
                                            "Fast and secure sign-in, making your access quick and protected.",
                                            "Supports multiple faces per account, convenient for families or teams.",
                                            "Utilizes encrypted biometric templates for ultimate privacy and data safety.",
                                            "Works seamlessly across various devices and web browsers.",
                                            "Powered by advanced TensorFlow & OpenCV technologies for accuracy.",
                                        ].map((text, index) => (
                                            <li className="flex items-start" key={index}>
                                                <i className="fas fa-check-circle text-green-400 mr-3 text-2xl mt-1 animate-pulse" />
                                                <span>{text}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <a
                                        href="/security/face-auth"
                                        className="mt-12 inline-block px-10 py-5 bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-700 hover:to-pink-700 text-white font-bold text-xl rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-rose-500 focus:ring-opacity-75 tracking-wide"
                                        data-aos="zoom-in-up"
                                        data-aos-delay="700"
                                        data-aos-duration="800"
                                    >
                                        Try Face Authentication &rarr;
                                    </a>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Part 9 Final CTA Section */}
                    <section
                        className="my-24 py-16 bg-gradient-to-br from-gray-950 to-gray-800 text-slate-200 font-sans"
                        id="cta-data-journey"
                    >
                        <div className="container mx-auto px-4 text-center">
                            {/* Section Title */}
                            <h2
                                className="text-4xl sm:text-5xl font-extrabold text-white mb-6 drop-shadow-lg leading-tight"
                                data-aos="fade-up"
                                data-aos-delay="100"
                                data-aos-duration="700"
                            >
                                Ready to Transform Your Data Journey? <br className="sm:hidden" />
                                <span className="text-emerald-300">Start Today!</span>
                            </h2>

                            {/* Section Description */}
                            <p
                                className="text-lg sm:text-xl text-slate-400 mb-10 max-w-3xl mx-auto leading-relaxed"
                                data-aos="fade-up"
                                data-aos-delay="200"
                                data-aos-duration="700"
                            >
                                Join thousands of learners and professionals using our platform to shape
                                their data careers, projects, and research. Start your journey today.
                            </p>

                            {/* CTA Button */}
                            <a
                                href="/signup"
                                className="inline-block px-10 sm:px-14 py-4 sm:py-6 bg-gradient-to-r from-emerald-600 to-teal-600
                 hover:from-emerald-700 hover:to-teal-700 text-white font-bold text-xl sm:text-2xl
                 rounded-full shadow-xl transition-all duration-300 transform
                 hover:scale-105 hover:ring-4 ring-emerald-400 ring-opacity-60
                 focus:outline-none focus:ring-4 focus:ring-emerald-500 focus:ring-opacity-75
                 tracking-wide"
                                data-aos="zoom-in"
                                data-aos-delay="300"
                                data-aos-duration="800"
                            >
                                Create Your Free Account &rarr;
                            </a>
                        </div>
                    </section>
                </main>
            </div>
        </>
    );
};

export default Home;