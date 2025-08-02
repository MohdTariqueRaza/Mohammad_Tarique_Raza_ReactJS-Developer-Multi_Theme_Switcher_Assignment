// src/components/ThemeIcon.tsx
import React from "react";

const ThemeIcon: React.FC<{ theme: string }> = ({ theme }) => {
  const getIcon = () => {
    switch (theme) {
      case "theme1":
        return (
          <div className="bg-gray-200 border-2 border-gray-300 rounded-full w-8 h-8 flex items-center justify-center">
            <div className="w-4 h-4 bg-gray-400 rounded-full"></div>
          </div>
        );
      case "theme2":
        return (
          <div className="bg-gray-800 border-2 border-gray-700 rounded-full w-8 h-8 flex items-center justify-center">
            <div className="w-4 h-4 bg-gray-400 rounded-full"></div>
          </div>
        );
      case "theme3":
        return (
          <div className="bg-gradient-to-r from-yellow-400 to-red-500 border-2 border-yellow-300 rounded-full w-8 h-8 flex items-center justify-center">
            <div className="w-4 h-4 bg-white rounded-full"></div>
          </div>
        );
      default:
        return (
          <div className="bg-gray-200 border-2 border-gray-300 rounded-full w-8 h-8 flex items-center justify-center">
            <div className="w-4 h-4 bg-gray-400 rounded-full"></div>
          </div>
        );
    }
  };

  return getIcon();
};

export default ThemeIcon;
