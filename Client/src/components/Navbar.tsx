import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";

const Navbar = () => {
  const [learnMenu, setLearnMenu] = useState({});
  const [loading, setLoading] = useState(true);
  const [activeMenu, setActiveMenu] = useState(null);
  const [activeSub, setActiveSub] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const hoverRef = useRef(false);

  useEffect(() => {
  axios.get("http://127.0.0.1:8000/api/learning/nested/")
    .then(res => setLearnMenu(
      res.data.reduce((a, c) => ({ ...a, [c.name]: c.sections.map(s => s.name) }), {})
    ))
    .catch(console.error)
    .finally(() => setLoading(false));
}, []);


  const menuItems = {
    Learn: loading ? { "Loading...": [] } : learnMenu,
    Projects: { Tanveer: [], Maroof: [] },
    Tools: {
      "Face Authentication": [],
      "Chatbot AI": [],
      "Data Visualization": [],
      "Data Cleaning": [],
      "Data Engineering": [],
      "Data Analysis": [],
    },
    Explore: { Home: [], About: [] },
  };

  const closeAll = () => { setMobileOpen(false); setActiveMenu(null); setActiveSub(null); };
  const toggleMenu = (isMobile, key) => {
    if (isMobile) setActiveMenu(activeMenu === key ? null : key);
    else { setActiveMenu(key); hoverRef.current = true; }
  };

  const MenuList = ({ mobile }) => (
    <ul className={mobile ? "space-y-4" : "flex gap-10 text-white"}>
      {Object.entries(menuItems).map(([key, items]) => (
        <li key={key}
          className="relative"
          onMouseEnter={() => !mobile && toggleMenu(false, key)}
          onMouseLeave={() => !mobile && ((hoverRef.current = false), setTimeout(() => !hoverRef.current && closeAll(), 150))}
        >
          <button className={`${mobile ? "w-full text-left text-xl" : "text-lg"} font-bold hover:text-teal-400`}
            onClick={() => mobile && toggleMenu(true, key)}>{key}</button>

          <AnimatePresence>
            {activeMenu === key && (
              <motion.ul
                className={mobile ? "ml-4 mt-2 space-y-2 border-l border-gray-700 pl-4" : "absolute top-12 left-1/2 -translate-x-1/2 bg-gray-800 shadow-2xl rounded-xl px-6 py-4 min-w-[220px] border border-gray-700 space-y-2"}
                initial={{ opacity: 0, y: mobile ? 0 : -10, height: mobile ? 0 : "auto" }}
                animate={{ opacity: 1, y: 0, height: "auto" }}
                exit={{ opacity: 0, y: mobile ? 0 : -10, height: 0 }}
                transition={{ duration: 0.2 }}
              >
                {Object.entries(items).map(([item, subs]) => (
                  <li key={item}
                    onMouseEnter={() => !mobile && setActiveSub(item)}>
                    <Link to={`/${item.toLowerCase().replace(/\s/g, "-")}`}
                      className={`${mobile ? "text-gray-300" : ""} block hover:text-teal-400`}
                      onClick={closeAll}>{item}</Link>

                    <AnimatePresence>
                      {subs.length > 0 && (
                        mobile
                          ? activeSub === item && (
                            <motion.ul className="ml-4 mt-2 space-y-1 border-l border-gray-800 pl-4"
                              initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }}>
                              {subs.map(sub => (
                                <li key={sub}><Link to={`/${sub.toLowerCase().replace(/\s/g, "-")}`} className="block text-base text-gray-400 hover:text-teal-400" onClick={closeAll}>{sub}</Link></li>
                              ))}
                            </motion.ul>
                          )
                          : activeSub === item && (
                            <motion.ul className="absolute top-0 left-full ml-2 bg-gray-900 border border-gray-700 shadow-lg rounded-md px-4 py-2 w-40"
                              initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -10 }}>
                              {subs.map(sub => (
                                <li key={sub}><Link to={`/${sub.toLowerCase().replace(/\s/g, "-")}`} className="block text-sm text-gray-300 hover:text-teal-400" onClick={closeAll}>{sub}</Link></li>
                              ))}
                            </motion.ul>
                          )
                      )}
                    </AnimatePresence>
                  </li>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>
        </li>
      ))}
    </ul>
  );

  return (
    <div className="relative z-[100] pb-16">
      <AnimatePresence>
        {(activeMenu || mobileOpen) && (
          <motion.div className="fixed inset-0 bg-black/70 backdrop-blur-sm"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={closeAll} />
        )}
      </AnimatePresence>

      <nav className="fixed top-0 left-0 w-full bg-gray-950 px-6 py-4 z-50 shadow-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between relative">
          <Link to="/" onClick={closeAll}>
            <h1 className="text-white text-xl sm:text-2xl font-bold hover:text-blue-400">CodePilot</h1>
            <p className="text-xs text-gray-400">Your AI Coding Companion</p>
          </Link>

          <div className="md:hidden">
            <button onClick={() => setMobileOpen(!mobileOpen)} className="text-white">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileOpen
                  ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />}
              </svg>
            </button>
          </div>

          <div className="hidden md:block absolute left-1/2 -translate-x-1/2">
            <MenuList mobile={false} />
          </div>

          <AnimatePresence>
            {mobileOpen && (
              <motion.div className="fixed top-0 right-0 h-full w-64 bg-gray-900 shadow-lg p-6 md:hidden overflow-y-auto"
                initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} transition={{ type: "spring", damping: 20, stiffness: 150 }}>
                <div className="flex justify-end mb-6">
                  <button onClick={closeAll} className="text-white">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <MenuList mobile={true} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
