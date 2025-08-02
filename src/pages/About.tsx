// src/pages/About.tsx
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import { useEffect } from "react";

const About = () => {
  const { theme } = useTheme();

  useEffect(() => {
    document.title = "About Us | ThemeSwitcher";

    return () => {
      document.title = "";
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`theme-section ${theme === "theme2" ? "mt-16" : ""}`}
    >
      <h1 className="theme-heading text-3xl font-bold mb-6">About Us</h1>

      <div className="theme-card p-6 rounded-xl mb-8">
        <h2 className="theme-heading text-xl font-bold mb-4">Our Story</h2>
        <p className="theme-text mb-4">
          Founded in 2023, our company began with a simple mission: to create
          beautiful, functional products that make everyday life better. What
          started as a small team of passionate designers and developers has
          grown into a thriving community of creators and customers who share
          our vision.
        </p>
        <p className="theme-text">
          We believe in the power of design to transform experiences. Every
          product we create is thoughtfully crafted with attention to detail and
          a commitment to quality.
        </p>
      </div>

      <div className="theme-card p-6 rounded-xl">
        <h2 className="theme-heading text-xl font-bold mb-4">Our Values</h2>
        <ul className="theme-text space-y-3">
          <li className="flex items-start">
            <span className="theme-bullet mr-3 mt-1">•</span>
            <span>
              <strong>Quality:</strong> We never compromise on the quality of
              our products or services.
            </span>
          </li>
          <li className="flex items-start">
            <span className="theme-bullet mr-3 mt-1">•</span>
            <span>
              <strong>Innovation:</strong> We continuously explore new ideas and
              technologies.
            </span>
          </li>
          <li className="flex items-start">
            <span className="theme-bullet mr-3 mt-1">•</span>
            <span>
              <strong>Sustainability:</strong> We're committed to
              environmentally responsible practices.
            </span>
          </li>
          <li className="flex items-start">
            <span className="theme-bullet mr-3 mt-1">•</span>
            <span>
              <strong>Community:</strong> We build relationships, not just
              transactions.
            </span>
          </li>
        </ul>
      </div>
    </motion.div>
  );
};

export default About;
