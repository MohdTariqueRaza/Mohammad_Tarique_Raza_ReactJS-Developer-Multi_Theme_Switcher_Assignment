// src/components/ProductCard.tsx
import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
  brand: string;
  model: string;
  color: string;
  category: string;
  discount: number;
}

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const { theme } = useTheme();

  const finalPrice =
    product.price !== undefined && product.discount !== undefined
      ? product.price - (product.price * product.discount) / 100
      : product.price;

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className={`theme-card overflow-hidden ${
        theme === "theme1"
          ? "rounded-lg"
          : theme === "theme2"
          ? "rounded-xl"
          : "rounded-2xl"
      }`}
    >
      {/* <div className="theme-card-image-bg h-48 flex items-center justify-center p-4"> */}
      <div className="theme-card-image-bg h-48 flex items-center justify-center overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="object-cover"
          loading="lazy"
          onError={(e) => {
            e.currentTarget.src = "/no-image.png";
          }}
        />
      </div>

      <div className="p-4">
        <span className="theme-category text-xs font-medium px-2 py-1 rounded capitalize">
          {product.category}
        </span>

        <h3
          className={`theme-heading font-semibold mt-2 mb-1 ${
            theme === "theme3" ? "text-xl" : ""
          }`}
        >
          {product.title.split(" ").slice(0, 10).join(" ") + "..."}
        </h3>

        <p
          className={`theme-text ${
            theme === "theme1"
              ? "text-sm mb-3"
              : theme === "theme2"
              ? "text-sm mb-3"
              : "mb-3"
          }`}
        >
          {product.description.split(" ").slice(0, 20).join(" ") + "..."}
        </p>

        <div className="text-xs text-gray-500 mb-2">
          <span className="mr-2">Brand: {product.brand}</span>
          <span className="mr-2">Model: {product.model}</span>
          <span>Color: {product.color}</span>
        </div>

        <div className="flex justify-between items-center mt-4">
          <div>
            <span className="theme-price font-bold text-lg text-green-600">
              ${finalPrice.toFixed(2)}
            </span>
            {product.discount > 0 && (
              <span className="text-sm line-through text-gray-400 ml-2">
                ${product.price.toFixed(2)}
              </span>
            )}
          </div>

          <button
            className={`theme-button cursor-pointer px-4 py-2 rounded ${
              theme === "theme1"
                ? ""
                : theme === "theme2"
                ? "font-medium"
                : "rounded-full px-5"
            }`}
          >
            {theme === "theme3" ? "Add+" : "Add to Cart"}
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
