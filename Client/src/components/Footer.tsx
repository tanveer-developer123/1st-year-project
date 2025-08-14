import { FaGithub, FaLinkedin, FaTwitter, FaGlobe } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Footer = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <footer className="bg-gray-900 text-white py-10 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

        {/* Intro */}
        <div data-aos="fade-up">
          <h2 className="text-2xl font-bold text-white mb-4" data-aos="zoom-in">DataVis</h2>
          <p className="text-sm leading-relaxed text-gray-400" data-aos="fade-up" data-aos-delay="100">
            Empower your journey through data — whether you're exploring AI, developing tools, or building beautiful visualizations. Our mission is to make data knowledge accessible and actionable.
          </p>
          <div className="flex gap-4 mt-4" data-aos="zoom-in" data-aos-delay="200">
            {[
              { href: "https://github.com", icon: <FaGithub /> },
              { href: "https://linkedin.com", icon: <FaLinkedin /> },
              { href: "https://twitter.com", icon: <FaTwitter /> },
              { href: "https://yourportfolio.com", icon: <FaGlobe /> }
            ].map(({ href, icon }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white text-xl transition-transform transform hover:scale-125 duration-300"
                data-aos="zoom-in"
                data-aos-delay={300 + i * 100}
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        {/* Learn */}
        <div data-aos="fade-up">
          <h3 className="text-lg font-semibold mb-4 text-yellow-400">Learn</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            {[
              "Web Development",
              "Data Science",
              "Machine Learning",
              "AI",
              "Data Visualization"
            ].map((item, i) => (
              <li key={i} data-aos="fade-left" data-aos-delay={100 * (i + 1)}>
                <a href={`/learn/${item.toLowerCase().replace(/ /g, "-")}`} className="hover:text-yellow-500">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Projects */}
        <div data-aos="fade-left">
          <h3 className="text-lg font-semibold mb-4 text-green-400">Projects</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            {[
              // { text: "Tanveer's Projects", link: "/projects/tanveer" },
              // { text: "Maroof's Projects", link: "/projects/maroof" },
              { text: "Web Projects", link: "/tanveer" },
              { text: "AI/ML Projects", link: "/projects/ai-ml" }
            ].map((item, i) => (
              <li key={i} data-aos="fade-up" data-aos-delay={100 * (i + 1)}>
                <a href={item.link} className="hover:text-green-300">{item.text}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Tools */}
        <div data-aos="fade-up">
          <h3 className="text-lg font-semibold mb-4 text-cyan-400">Tools</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            {[
              "Face Authentication",
              "Chatbot AI",
              "Data Visualization",
              "Data Cleaning",
              "Data Analysis"
            ].map((tool, i) => (
              <li key={i} data-aos="fade-left" data-aos-delay={100 * (i + 1)}>
                <a href={`/tools/${tool.toLowerCase().replace(/ /g, "-")}`} className="hover:text-cyan-300">
                  {tool}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div
        className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-500"
        data-aos=""
      >
        Made with ❤️ by
        <span className="text-white font-medium" data-aos="zoom-in" data-aos-delay="200">Tanveer</span> &
        <span className="text-white font-medium" data-aos="zoom-in" data-aos-delay="300">Maroof</span> &copy;
        {new Date().getFullYear()}{" "}
        <span className="text-white font-medium inline-block" data-aos="zoom-in" data-aos-delay="400">
          DataVis
        </span>. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
