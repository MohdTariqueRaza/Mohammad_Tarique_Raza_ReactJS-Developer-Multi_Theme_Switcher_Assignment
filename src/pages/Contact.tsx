// src/pages/Contact.tsx
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

const Contact = () => {
  const { theme } = useTheme();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");

  useEffect(() => {
    document.title = "Contact Us | ThemeSwitcher";

    return () => {
      document.title = "";
    };
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });

      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus(""), 5000);
    }, 1500);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`theme-section ${theme === "theme2" ? "mt-16" : ""}`}
    >
      <h1 className="theme-heading text-3xl font-bold mb-6">Contact Us</h1>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="theme-card p-6 rounded-xl">
          <h2 className="theme-heading text-xl font-bold mb-4">Get in Touch</h2>
          <p className="theme-text mb-4">
            Have questions or feedback? We'd love to hear from you. Our team is
            always ready to help with any inquiries you might have.
          </p>

          <div className="space-y-3 mt-6">
            <div className="flex items-start">
              <div className="theme-icon-bg w-10 h-10 rounded-full flex items-center justify-center mr-3">
                <svg
                  className="w-5 h-5 theme-icon"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="theme-heading font-medium">Phone</h3>
                <p className="theme-text">(123) 456-7890</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="theme-icon-bg w-10 h-10 rounded-full flex items-center justify-center mr-3">
                <svg
                  className="w-5 h-5 theme-icon"
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
              </div>
              <div>
                <h3 className="theme-heading font-medium">Email</h3>
                <p className="theme-text">contact@themeswitcher.com</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="theme-icon-bg w-10 h-10 rounded-full flex items-center justify-center mr-3">
                <svg
                  className="w-5 h-5 theme-icon"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="theme-heading font-medium">Address</h3>
                <p className="theme-text">
                  123 Design Street, Creative City, CA 90210
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="theme-card p-6 rounded-xl">
          <h2 className="theme-heading text-xl font-bold mb-4">
            Send a Message
          </h2>

          {submitStatus === "success" ? (
            <div className="theme-success-bg p-4 rounded-lg mb-4">
              <p className="theme-success-text">
                Thank you for your message! We'll get back to you soon.
              </p>
            </div>
          ) : null}

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="theme-text block mb-2 font-medium"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="theme-input w-full px-4 py-2 rounded"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="email"
                className="theme-text block mb-2 font-medium"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="theme-input w-full px-4 py-2 rounded"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="message"
                className="theme-text block mb-2 font-medium"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="theme-input w-full px-4 py-2 rounded"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`cursor-pointer theme-button w-full py-3 rounded font-medium ${
                isSubmitting ? "opacity-70 cursor-not-allowed" : ""
              }`}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
