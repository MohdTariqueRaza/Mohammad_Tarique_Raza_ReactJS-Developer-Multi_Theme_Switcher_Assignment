// src/App.tsx
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider, useTheme } from "./context/ThemeContext";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

const Layout = () => {
  const { theme } = useTheme();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div
      className={`min-h-screen transition-all duration-300 ${
        theme === "theme2" ? "theme2-layout" : ""
      }`}
    >
      <Header toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
      <Sidebar isSidebarOpen={isSidebarOpen} />

      <main
        className={
          theme === "theme2"
            ? `transition-all duration-300 mt-16 ${
                isSidebarOpen ? "md:ml-64" : "md:ml-0"
              }`
            : "container mx-auto px-4 py-6 mt-16"
        }
      >
        <div
          className={theme === "theme2" ? "container mx-auto px-4 py-6" : ""}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </main>
    </div>
  );
};

function App() {
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "theme1";
    document.body.className = savedTheme;
  }, []);

  return (
    <ThemeProvider>
      <Router>
        <Layout />
      </Router>
    </ThemeProvider>
  );
}

export default App;
