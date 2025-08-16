import { FiChevronDown, FiChevronUp } from "react-icons/fi";

import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { FiMenu, FiX } from "react-icons/fi";
import { FaBook, FaListAlt } from "react-icons/fa"; // Example icons

export default function LearningPlatform() {
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState(null);
  const [expandedSection, setExpandedSection] = useState(null);
  const [selectedConcept, setSelectedConcept] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/learning/categories/")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
        setActiveCategory(data[0] || null);
      })
      .catch((err) => console.error("Error fetching categories:", err));
  }, []);

  useEffect(() => {
    activeCategory?.id &&
      fetch(`http://127.0.0.1:8000/api/learning/categories/${activeCategory.id}/`)
        .then((res) => res.json())
        .then((data) => {
          setActiveCategory(data);
        })
        .catch((err) => console.error("Error fetching category:", err));
  }, [activeCategory?.id]);

  return (
    <div className="py-5 flex flex-col min-h-screen text-black">
      {/* Top Tabs */}
      <div className="flex items-center justify-start space-x-3 p-3 text-black 
                  overflow-x-auto whitespace-nowrap border-b bg-white shadow-md">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => {
              setActiveCategory(cat);
              setExpandedSection(null);
              setSelectedConcept(null);
            }}
            className={`inline-block px-4 py-3 rounded-lg transition-all duration-300 
          ${activeCategory?.id === cat.id
                ? "bg-blue-600 text-white shadow-lg"
                : "bg-gray-200 hover:bg-gray-400"
              }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      <div className="flex flex-1 bg-gray-800 relative">
        {/* Sidebar */}
        <div
          className={`bg-gray-900 text-white p-4 overflow-y-auto transition-all duration-300
           fixed md:static top-0 left-0 h-full z-20
           ${sidebarOpen ? "w-64" : "w-0 md:w-64"}`}
        >
          {/* Sidebar Toggle */}
          <button
            className="mb-4 md:hidden bg-gray-700 p-2 rounded"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            {sidebarOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>

          {sidebarOpen && activeCategory?.sections?.length ? (
            activeCategory.sections.map((section) => (
              <div key={section.id} className="mb-2">
                <button
                  onClick={() =>
                    setExpandedSection(expandedSection === section.id ? null : section.id)
                  }
                  className="w-full text-left font-semibold p-2 hover:bg-gray-800 rounded flex justify-between items-center"
                >
                  <span className="flex items-center gap-2">
                    <FaListAlt /> {section.name}
                  </span>
                  <span className="text-gray-300">
                    {expandedSection === section.id ? (
                      <FiChevronUp className="w-4 h-4" />
                    ) : (
                      <FiChevronDown className="w-4 h-4" />
                    )}
                  </span>

                </button>
                {expandedSection === section.id && (
                  <div className="ml-3 mt-1 space-y-1">
                    {section.concepts.map((concept) => (
                      <button
                        key={concept.id}
                        className="block text-sm text-left hover:bg-gray-700 p-1 rounded w-full flex items-center gap-2"
                        onClick={() => setSelectedConcept(concept)}
                      >
                        <FaBook /> {concept.title}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))
          ) : sidebarOpen ? (
            <p className="text-gray-400">No sections available.</p>
          ) : null}
        </div>

        {/* Overlay for Mobile */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 md:hidden z-10"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Main Content */}
        <div className="flex-1 p-6 bg-gray-50 overflow-y-auto md:ml-0 ml-0">
          {selectedConcept ? (
            <>
              <h1 className="text-2xl font-bold mb-4">{selectedConcept.title}</h1>
              <div className="prose max-w-none">
                <ReactMarkdown
                  components={{
                    code({ inline, className, children, ...props }) {
                      return inline ? (
                        <code className="bg-gray-800 text-yellow-300 px-1 py-0.5 rounded">
                          {children}
                        </code>
                      ) : (
                        <pre className="bg-gray-900 text-green-300 p-4 rounded-lg overflow-x-auto">
                          <code {...props}>{children}</code>
                        </pre>
                      );
                    },
                  }}
                >
                  {selectedConcept.content || "No content available for this concept."}
                </ReactMarkdown>
              </div>
            </>
          ) : (
            <p className="text-gray-500">Select a topic from the sidebar.</p>
          )}
        </div>
      </div>
    </div>
  );
}
