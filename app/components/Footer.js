"use client";
import {
  ArrowDown,
  ArrowUp,
  Globe,
  Linkedin,
  PenTool,
  Target,
  LayoutTemplate,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "./ThemeContext";

const Footer = () => {
  const logoUrl =
    "https://res.cloudinary.com/duhhsnbwh/image/upload/v1773567036/Logo_kowvbb.png";

  const [showScrollButtons, setShowScrollButtons] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);
  const [isAtBottom, setIsAtBottom] = useState(false);
  const [shareUrl, setShareUrl] = useState(
    process.env.NEXT_PUBLIC_BASE_URL || "https://careerpilot-ai.vercel.app"
  );
  const { isDarkMode } = useContext(ThemeContext);

  useEffect(() => {
    try {
      if (typeof window !== "undefined" && window.location?.href) {
        setShareUrl(window.location.href);
      }
    } catch {
      // ignore
    }

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // Show buttons when scrolled more than 400px
      setShowScrollButtons(scrollY > 400);

      // Check if at top (within 100px of top)
      setIsAtTop(scrollY < 100);

      // Check if at bottom (within 100px of bottom)
      setIsAtBottom(scrollY + windowHeight >= documentHeight - 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToBottom = () => {
    window.scrollTo({ top: document.documentElement.scrollHeight, behavior: "smooth" });
  };

  const whatsappShareHref = `https://wa.me/?text=${encodeURIComponent(
    `CareerPilot AI: ${shareUrl}`
  )}`;

  return (
    <footer className={`relative py-16 ${
      isDarkMode
        ? "bg-gray-900 text-gray-300"
        : "bg-gradient-to-br from-slate-50 via-white to-blue-50 text-black"
    }`}>
      {/* Subtle top border gradient for visual separation */}
      <div className={`absolute top-0 left-0 right-0 h-px ${
        isDarkMode
          ? "bg-gradient-to-r from-transparent via-amber-500/30 to-transparent"
          : "bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"
      }`} />

      {/* Shadow effect for better separation */}
      <div className={`absolute top-0 left-0 right-0 h-8 ${
        isDarkMode
          ? "bg-gradient-to-b from-black/5 to-transparent"
          : "bg-gradient-to-b from-slate-200/20 to-transparent"
      }`} />

      <div className="container mx-auto px-6 md:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          {/* CareerPilot AI Section - Enhanced visual appeal */}
          <div className="lg:pr-8">
            <div className="flex items-center space-x-3 mb-6">
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center shadow-lg transform hover:scale-105 transition-transform duration-300 ${
                  isDarkMode
                    ? "bg-gradient-to-br from-amber-400 to-amber-600 shadow-amber-500/25"
                    : "bg-gradient-to-br from-blue-500 to-indigo-600 shadow-blue-500/25"
                }`}
              >
                <img
                  src={logoUrl}
                  alt="CareerPilot AI"
                  className="w-8 h-8 object-contain"
                  loading="lazy"
                />
              </div>
              <h3
                className={`text-2xl font-bold tracking-tight ${
                  isDarkMode ? "text-amber-400" : "text-gray-900"
                }`}
                style={{ fontFamily: "'Inter', 'Segoe UI', sans-serif", lineHeight: '1.2', fontWeight: 'bold' }}
              >
                CareerPilot AI
              </h3>
            </div>
            <p className={`mb-8 text-base leading-relaxed font-bold ${
              isDarkMode ? "text-gray-300" : "text-black"
            }`}
            style={{ fontFamily: "'Inter', 'Segoe UI', sans-serif", lineHeight: '1.6', fontWeight: 'bold' }}>
              Your AI-powered career companion helping you navigate your professional
              journey with confidence and achieve your goals.
            </p>

            {/* Portfolio / Social Icons (all real links) */}
            <div className="flex flex-wrap gap-3">
              {/* Development Portfolio */}
              <a
                href="https://tech-world-ai.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className={`group p-3 rounded-xl transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 ${
                  isDarkMode
                    ? "text-gray-400 hover:text-white bg-gray-800/50 hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-600/25"
                    : "text-gray-600 hover:text-white bg-white hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-600/25"
                }`}
                aria-label="Development Portfolio"
                title="Development Portfolio"
              >
                <Globe className="w-5 h-5" />
              </a>

              {/* UI/UX Portfolio (Figma) */}
              <a
                href="https://jargon-savant-75370195.figma.site/"
                target="_blank"
                rel="noopener noreferrer"
                className={`group p-3 rounded-xl transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 ${
                  isDarkMode
                    ? "text-gray-400 hover:text-white bg-gray-800/50 hover:bg-purple-600 hover:shadow-lg hover:shadow-purple-600/25"
                    : "text-gray-600 hover:text-white bg-white hover:bg-purple-600 hover:shadow-lg hover:shadow-purple-600/25"
                }`}
                aria-label="UI/UX Portfolio (Figma)"
                title="UI/UX Portfolio (Figma)"
              >
                <PenTool className="w-5 h-5" />
              </a>

              {/* Framer Portfolio */}
              <a
                href="https://portfolio-wajid-daud-tamboli.framer.website/"
                target="_blank"
                rel="noopener noreferrer"
                className={`group p-3 rounded-xl transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 ${
                  isDarkMode
                    ? "text-gray-400 hover:text-white bg-gray-800/50 hover:bg-indigo-600 hover:shadow-lg hover:shadow-indigo-600/25"
                    : "text-gray-600 hover:text-white bg-white hover:bg-indigo-600 hover:shadow-lg hover:shadow-indigo-600/25"
                }`}
                aria-label="Framer Portfolio"
                title="Framer Portfolio"
              >
                <LayoutTemplate className="w-5 h-5" />
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/wajid-daud-tamboli-3217b031a/"
                target="_blank"
                rel="noopener noreferrer"
                className={`group p-3 rounded-xl transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 ${
                  isDarkMode
                    ? "text-gray-400 hover:text-white bg-gray-800/50 hover:bg-[#0077B5] hover:shadow-lg hover:shadow-blue-600/25"
                    : "text-gray-600 hover:text-white bg-white hover:bg-[#0077B5] hover:shadow-lg hover:shadow-blue-600/25"
                }`}
                aria-label="LinkedIn"
                title="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>

              {/* WhatsApp Share */}
              <a
                href={whatsappShareHref}
                target="_blank"
                rel="noopener noreferrer"
                className={`group p-3 rounded-xl transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 ${
                  isDarkMode
                    ? "text-gray-400 hover:text-white bg-gray-800/50 hover:bg-green-600 hover:shadow-lg hover:shadow-green-600/25"
                    : "text-gray-600 hover:text-white bg-white hover:bg-green-600 hover:shadow-lg hover:shadow-green-600/25"
                }`}
                aria-label="Share on WhatsApp"
                title="Share on WhatsApp"
              >
                <FaWhatsapp className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links Section - Enhanced with proper spacing and animations */}
          <div className="lg:px-4">
            <h3
              className="text-xl font-bold mb-8 !text-black"
              style={{ fontFamily: "'Inter', 'Segoe UI', sans-serif", lineHeight: '1.2', fontWeight: 'bold' }}
            >
              Quick Links
            </h3>
            <nav>
              <ul className="space-y-4">
                <li>
                  <Link
                    href="/careerplanning?page=DepartmentJobRoles"
                    className={`group block w-fit text-base transition-all duration-300 relative font-bold ${
                      "!text-black hover:text-blue-700"
                    }`}
                    style={{
                      fontFamily: "'Inter', 'Segoe UI', sans-serif",
                      lineHeight: '1.5',
                      fontWeight: 'bold',
                    }}
                  >
                    Career Planning ↗
                    <span className={`absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                      "bg-blue-500/40"
                    }`}></span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/learn?page=IndustryCertifications"
                    className={`group block w-fit text-base transition-all duration-300 relative font-bold ${
                      "!text-black hover:text-blue-700"
                    }`}
                    style={{
                      fontFamily: "'Inter', 'Segoe UI', sans-serif",
                      lineHeight: '1.5',
                      fontWeight: 'bold',
                    }}
                  >
                    Learn ↗
                    <span className={`absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                      "bg-blue-500/40"
                    }`}></span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/preparation/mockinterview"
                    className={`group block w-fit text-base transition-all duration-300 relative font-bold ${
                      "!text-black hover:text-blue-700"
                    }`}
                    style={{
                      fontFamily: "'Inter', 'Segoe UI', sans-serif",
                      lineHeight: '1.5',
                      fontWeight: 'bold',
                    }}
                  >
                    Preparation ↗
                    <span className={`absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                      "bg-blue-500/40"
                    }`}></span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/company/hiring-platforms"
                    className={`group block w-fit text-base transition-all duration-300 relative font-bold ${
                      "!text-black hover:text-blue-700"
                    }`}
                    style={{
                      fontFamily: "'Inter', 'Segoe UI', sans-serif",
                      lineHeight: '1.5',
                      fontWeight: 'bold',
                    }}
                  >
                    Company ↗
                    <span className={`absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                      "bg-blue-500/40"
                    }`}></span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* Contact Us Section - Enhanced with clickable interactions */}
          <div className="lg:pl-4">
            <h3
              className="text-xl font-bold mb-8 !text-black"
              style={{ fontFamily: "'Inter', 'Segoe UI', sans-serif", lineHeight: '1.2', fontWeight: 'bold' }}
            >
              Contact Us
            </h3>
            <ul className="space-y-6">
              {/* Location */}
              <li className="flex items-start space-x-4 group">
                <div
                  className={`p-3 rounded-xl transition-all duration-300 group-hover:scale-105 ${
                    isDarkMode
                      ? "bg-gray-800/70 group-hover:bg-gray-700"
                      : "bg-white/70 border border-slate-200 group-hover:bg-white backdrop-blur-sm"
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={isDarkMode ? "text-amber-400" : "text-blue-700"}
                    style={{ color: isDarkMode ? undefined : '#1d4ed8' }}
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=N.K.%20Orchid%20College%20of%20Engineering%20%26%20Technology%2C%20Solapur"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base leading-relaxed font-bold transition-colors !text-black hover:text-blue-700"
                  style={{ fontFamily: "'Inter', 'Segoe UI', sans-serif", lineHeight: '1.5', fontWeight: 'bold' }}
                >
                  N.K. Orchid College of Engineering & Technology, Solapur
                </a>
              </li>

              {/* Phone - Clickable */}
              <li className="flex items-center space-x-4 group">
                <div
                  className={`p-3 rounded-xl transition-all duration-300 group-hover:scale-105 ${
                    isDarkMode
                      ? "bg-gray-800/70 group-hover:bg-gray-700"
                      : "bg-white/70 border border-slate-200 group-hover:bg-white backdrop-blur-sm"
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={isDarkMode ? "text-amber-400" : "text-blue-700"}
                    style={{ color: isDarkMode ? undefined : '#1d4ed8' }}
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <a
                  href="tel:+919667033839"
                  className="text-base transition-all duration-300 hover:scale-105 font-bold !text-black hover:text-blue-700"
                  style={{
                    fontFamily: "'Inter', 'Segoe UI', sans-serif",
                    lineHeight: '1.5',
                    fontWeight: 'bold',
                  }}
                >
                  +91 9667033839
                </a>
              </li>

              {/* Email - Clickable */}
              <li className="flex items-center space-x-4 group">
                <div
                  className={`p-3 rounded-xl transition-all duration-300 group-hover:scale-105 ${
                    isDarkMode
                      ? "bg-gray-800/70 group-hover:bg-gray-700"
                      : "bg-white/70 border border-slate-200 group-hover:bg-white backdrop-blur-sm"
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={isDarkMode ? "text-amber-400" : "text-blue-700"}
                    style={{ color: isDarkMode ? undefined : '#1d4ed8' }}
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <a
                  href="mailto:wajidtamboli@orchidengg.ac.in"
                  className="text-base transition-all duration-300 hover:scale-105 break-all font-bold !text-black hover:text-blue-700"
                  style={{
                    fontFamily: "'Inter', 'Segoe UI', sans-serif",
                    lineHeight: '1.5',
                    fontWeight: 'bold',
                  }}
                >
                  wajidtamboli@orchidengg.ac.in
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright Section */}
        <div
          className={`mt-16 pt-8 border-t text-center ${
            isDarkMode ? "border-gray-700 text-gray-400" : "border-slate-200 text-gray-600"
          }`}
        >
          <p className="text-sm font-bold"
             style={{ fontFamily: "'Inter', 'Segoe UI', sans-serif", lineHeight: '1.5', fontWeight: 'bold' }}>
            &copy; {new Date().getFullYear()} CareerPilot AI. All rights reserved.
          </p>
        </div>
      </div>

      {/* Dual Scroll Buttons - Top & Bottom */}
      {showScrollButtons && (
        <>
          {/* Scroll to Top Button (left side with extra bottom offset to avoid chatbot overlap) */}
          {!isAtTop && (
            <div className="fixed bottom-24 left-8 z-50">
              <button
                onClick={scrollToTop}
                className={`w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 group ${
                  isDarkMode
                    ? "bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-amber-500/25 hover:shadow-amber-500/40"
                    : "bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-blue-500/25 hover:shadow-blue-500/40"
                }`}
                aria-label="Scroll to top"
              >
                <ArrowUp className="w-5 h-5 transition-transform group-hover:-translate-y-0.5" />
              </button>
            </div>
          )}

          {/* Scroll to Bottom Button */}
          {!isAtBottom && (
            <div className="fixed bottom-8 left-8 z-50">
              <button
                onClick={scrollToBottom}
                className={`w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 group ${
                  isDarkMode
                    ? "bg-gradient-to-r from-amber-600 to-amber-700 text-white shadow-amber-600/25 hover:shadow-amber-600/40"
                    : "bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-indigo-500/25 hover:shadow-indigo-500/40"
                }`}
                aria-label="Scroll to bottom"
              >
                <ArrowDown className="w-5 h-5 transition-transform group-hover:translate-y-0.5" />
              </button>
            </div>
          )}
        </>
      )}
    </footer>
  );
};

export default Footer;
