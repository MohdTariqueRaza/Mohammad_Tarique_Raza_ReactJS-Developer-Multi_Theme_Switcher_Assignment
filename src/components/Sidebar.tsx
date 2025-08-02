// src/components/Sidebar.tsx
import React from "react";
import { NavLink } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

interface SidebarProps {
  isSidebarOpen: boolean;
}

type IconProps = {
  className?: string;
};

// Sun Icon (Light theme)
export const SunIcon: React.FC<IconProps> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
    />
  </svg>
);

// Moon Icon (Dark theme)
export const MoonIcon: React.FC<IconProps> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
    />
  </svg>
);

// Palette Icon (Colorful theme)
export const PaletteIcon: React.FC<IconProps> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
    />
  </svg>
);

const Sidebar = ({ isSidebarOpen }: SidebarProps) => {
  const { theme, setTheme } = useTheme();

  // Only show sidebar for theme2
  if (theme !== "theme2") return null;

  const handleThemeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTheme(e.target.value as "theme1" | "theme2" | "theme3");
  };

  return (
    <aside
      className={`theme-sidebar fixed top-16 left-0 h-[calc(100%-4rem)] z-30 transition-all duration-300 ${
        isSidebarOpen ? "w-64" : "w-0 overflow-hidden"
      }`}
    >
      <div
        className={`flex flex-col h-full ${isSidebarOpen ? "p-6" : "hidden"}`}
      >
        <nav className="flex-1 overflow-y-auto">
          <ul className="space-y-3">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `flex items-center px-4 py-3 rounded-lg transition-colors ${
                    isActive ? "theme-sidebar-active" : "theme-sidebar-link"
                  }`
                }
              >
                <svg
                  className="w-5 h-5 mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `flex items-center px-4 py-3 rounded-lg transition-colors ${
                    isActive ? "theme-sidebar-active" : "theme-sidebar-link"
                  }`
                }
              >
                <svg
                  className="w-5 h-5 mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `flex items-center px-4 py-3 rounded-lg transition-colors ${
                    isActive ? "theme-sidebar-active" : "theme-sidebar-link"
                  }`
                }
              >
                <svg
                  className="w-5 h-5 mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>

        {theme === "theme2" && (
          <div className="pt-6 flex justify-center theme-switcher">
            <div className="flex items-center bg-gray-800/90 backdrop-blur-sm rounded-xl p-1.5 border border-gray-700 shadow-lg">
              {[
                { value: "theme1", icon: SunIcon, label: "Light" },
                { value: "theme2", icon: MoonIcon, label: "Dark" },
                { value: "theme3", icon: PaletteIcon, label: "Colorful" },
              ].map((option) => (
                <button
                  key={option.value}
                  onClick={() =>
                    handleThemeChange({
                      target: { value: option.value },
                    } as React.ChangeEvent<HTMLSelectElement>)
                  }
                  className={`cursor-pointer flex flex-col items-center px-4 py-2.5 rounded-lg transition-all duration-300 ${
                    theme === option.value
                      ? "bg-[#4fd1c5] text-[#1a202c] shadow-[#4fd1c5]/20"
                      : "text-gray-400 hover:text-gray-200"
                  }`}
                  aria-label={`${option.label} theme`}
                >
                  <option.icon
                    className={`w-5 h-5 mb-1.5 transition-transform ${
                      theme === option.value ? "scale-110" : ""
                    }`}
                  />
                  <span className="text-xs font-medium tracking-tight">
                    {option.label}
                  </span>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </aside>
  );
};

export default Sidebar;
