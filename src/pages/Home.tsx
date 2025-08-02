// src/pages/Home.tsx
import { useState, useEffect } from "react";
import ProductCard from "../components/ProductList";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  brand: string;
  model: string;
  color: string;
  discount: number;
}

const Home = () => {
  const { theme } = useTheme();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.in/api/products");
        if (!response.ok) throw new Error("Failed to fetch products");

        const data = await response.json();
        setProducts(data.products.slice(0, 8)); // Get first 8 products
      } catch (err) {
        setError("Failed to load products. Please try again later.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    document.title = "Home | ThemeSwitcher";

    return () => {
      document.title = "";
    };
  }, []);

  if (loading) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="theme-text flex justify-center items-center h-64"
      >
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 theme-spinner"></div>
      </motion.div>
    );
  }

  if (error) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="theme-text text-center py-10"
      >
        <div className="theme-error-bg inline-block p-4 rounded-lg">
          <p>{error}</p>
          <button
            className="theme-button mt-4 px-4 py-2 rounded cursor-pointer"
            onClick={() => window.location.reload()}
          >
            Retry
          </button>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section - Different layout per theme */}
      {theme === "theme1" && (
        <div className="theme-section my-12">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="theme-heading text-4xl font-bold mb-6">
              Minimalist Shopping Experience
            </h1>
            <p className="theme-text text-lg mb-8 max-w-2xl mx-auto">
              Discover our curated collection of premium products designed with
              simplicity and elegance in mind.
            </p>
            <button className="theme-button px-8 py-3 rounded-lg font-medium cursor-pointer">
              Shop Collection
            </button>
          </div>
        </div>
      )}

      {theme === "theme2" && (
        <div className="theme-section dark-section my-12 p-8 rounded-xl">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
              <h1 className="theme-heading text-4xl font-bold mb-6">
                Dark Mode Elegance
              </h1>
              <p className="theme-text text-lg mb-8">
                Immerse yourself in our sophisticated collection designed for
                discerning tastes.
              </p>
              <button className="theme-button px-8 py-3 rounded-lg font-medium cursor-pointer">
                Explore Products
              </button>
            </div>
            <div className="md:w-1/2 theme-card p-6 rounded-xl sm:w-full">
              <img
                src="https://images.unsplash.com/photo-1504274066651-8d31a536b11a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Featured Product"
                className="w-full h-64 object-cover rounded-lg featured-product"
              />
            </div>
          </div>
        </div>
      )}

      {theme === "theme3" && (
        <div className="theme-card p-8 rounded-3xl my-12">
          <div className="text-center">
            <h1 className="theme-heading text-5xl mb-6">
              Colorful Shopping Adventure!
            </h1>
            <p className="theme-text text-xl mb-8 max-w-2xl mx-auto">
              Dive into our vibrant collection of fun and exciting products that
              bring joy to your everyday life!
            </p>
            <button className="theme-button px-8 py-4 rounded-full font-medium text-lg cursor-pointer">
              Start Exploring
            </button>
          </div>
        </div>
      )}

      {/* Products Section */}
      <div
        className={
          theme === "theme3" ? "theme-card p-6 rounded-3xl" : "theme-section"
        }
      >
        <h2
          className={`theme-heading ${
            theme === "theme3"
              ? "text-4xl text-center mb-10"
              : "text-2xl font-bold mb-6"
          }`}
        >
          Featured Products
        </h2>

        <div
          className={`grid grid-cols-1 gap-6 ${
            theme === "theme1"
              ? "sm:grid-cols-2 lg:grid-cols-3"
              : theme === "theme2"
              ? "sm:grid-cols-2 lg:grid-cols-3"
              : "sm:grid-cols-2 lg:grid-cols-4"
          }`}
        >
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

      {/* Additional sections per theme */}
      {theme === "theme1" && (
        <div className="theme-section mt-12">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="theme-heading text-2xl font-bold mb-6">
              Minimalist Philosophy
            </h2>
            <p className="theme-text mb-8 max-w-2xl mx-auto">
              We believe in quality over quantity. Each product is carefully
              selected to enhance your life without clutter.
            </p>
          </div>
        </div>
      )}

      {theme === "theme2" && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
          <div className="theme-card p-8 rounded-xl">
            <h3 className="theme-heading text-xl font-bold mb-4">
              Premium Quality
            </h3>
            <p className="theme-text">
              Our products are crafted with the finest materials and attention
              to detail, ensuring longevity and satisfaction.
            </p>
          </div>
          <div className="theme-card p-8 rounded-xl">
            <h3 className="theme-heading text-xl font-bold mb-4">
              Exclusive Designs
            </h3>
            <p className="theme-text">
              Each item in our collection features unique designs inspired by
              contemporary aesthetics and timeless elegance.
            </p>
          </div>
        </div>
      )}

      {theme === "theme3" && (
        <div className="theme-card p-8 rounded-3xl mt-12">
          <div className="text-center">
            <h2 className="theme-heading text-3xl mb-6">
              Join Our Colorful Community!
            </h2>
            <p className="theme-text text-lg mb-8 max-w-2xl mx-auto">
              Sign up for exclusive deals, fun content, and colorful inspiration
              delivered to your inbox!
            </p>
            <div className="w-full max-w-md mx-auto px-4">
              <form className="flex flex-col sm:flex-row items-stretch gap-2 sm:gap-0">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="theme-input flex-grow px-4 py-3 rounded-full sm:rounded-l-full sm:rounded-r-none w-full focus:outline-none"
                />
                <button
                  type="submit"
                  className="theme-button px-6 py-3 rounded-full sm:rounded-r-full sm:rounded-l-none font-medium cursor-pointer w-full sm:w-auto"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default Home;
