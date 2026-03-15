"use client";
import { ChevronDown, Menu, Target, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext, useEffect, useRef, useState } from "react";
import { ThemeContext } from "./ThemeContext";
import { SignInButton, SignUpButton, UserButton, useUser } from '@clerk/nextjs';

function DesktopAuthControls({ isDarkMode }) {
  const { isSignedIn } = useUser();

  return (
    <div className="flex items-center space-x-3">
      {!isSignedIn ? (
        <div className="flex items-center space-x-2">
          <SignInButton mode="modal">
            <button
              className={`px-4 py-2 rounded-md font-medium transition-colors duration-200 ${
                isDarkMode
                  ? "text-gray-300 hover:text-white hover:bg-gray-700"
                  : "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
              }`}
            >
              Sign In
            </button>
          </SignInButton>
          <SignUpButton mode="modal">
            <button
              className={`px-4 py-2 rounded-md font-medium transition-colors duration-200 ${
                isDarkMode
                  ? "bg-blue-600 hover:bg-blue-700 text-white"
                  : "bg-blue-600 hover:bg-blue-700 text-white"
              }`}
            >
              Sign Up
            </button>
          </SignUpButton>
        </div>
      ) : (
        <div className="flex items-center space-x-3">
          <Link
            href="/dashboard"
            className={`px-4 py-2 rounded-md font-medium transition-colors duration-200 ${
              isDarkMode
                ? "text-gray-300 hover:text-white hover:bg-gray-700"
                : "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
            }`}
          >
            Dashboard
          </Link>
          <UserButton
            appearance={{
              elements: {
                avatarBox: "w-8 h-8",
              },
            }}
            afterSignOutUrl="/"
          />
        </div>
      )}
    </div>
  );
}

function MobileAuthControls({ isDarkMode, onAfterNavigate }) {
  const { isSignedIn } = useUser();

  return !isSignedIn ? (
    <div className="flex space-x-2 pt-3">
      <SignInButton mode="modal">
        <button
          className={`flex-1 py-3 rounded-md font-medium transition-colors duration-200 ${
            isDarkMode
              ? "text-gray-300 hover:text-white border border-gray-600 hover:bg-gray-700"
              : "text-gray-700 hover:text-blue-600 border border-gray-300 hover:bg-blue-50"
          }`}
        >
          Sign In
        </button>
      </SignInButton>
      <SignUpButton mode="modal">
        <button
          className={`flex-1 py-3 rounded-md font-medium transition-colors duration-200 ${
            isDarkMode
              ? "bg-blue-600 hover:bg-blue-700 text-white"
              : "bg-blue-600 hover:bg-blue-700 text-white"
          }`}
        >
          Sign Up
        </button>
      </SignUpButton>
    </div>
  ) : (
    <div className="pt-3 space-y-2">
      <Link
        href="/dashboard"
        className={`block w-full text-center py-3 rounded-md font-medium transition-colors duration-200 ${
          isDarkMode
            ? "text-gray-300 hover:text-white border border-gray-600 hover:bg-gray-700"
            : "text-gray-700 hover:text-blue-600 border border-gray-300 hover:bg-blue-50"
        }`}
        onClick={onAfterNavigate}
      >
        Dashboard
      </Link>
      <div className="flex justify-center pt-2">
        <UserButton
          appearance={{
            elements: {
              avatarBox: "w-10 h-10",
            },
          }}
          afterSignOutUrl="/"
        />
      </div>
    </div>
  );
}

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const dropdownRefs = useRef([]);
  const { isDarkMode } = useContext(ThemeContext);
  const pathname = usePathname();
  const publishableKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;
  const isTestPublishableKey =
    typeof publishableKey === 'string' && publishableKey.startsWith('pk_test_');
  const isProduction = process.env.NODE_ENV === 'production';
  const clerkEnabled = Boolean(publishableKey) && !(isProduction && isTestPublishableKey);

  const menuItems = [
    {
      name: "Career Planning",
      submenu: [
        { name: "Department Roles", href: "/careerplanning?page=DepartmentJobRoles" },
        { name: "Role Selection", href: "/careerplanning/checkcareer" },
        { name: "Role Roadmap", href: "/careerplanning?page=RoleRoadMap" },
      ],
    },
    {
      name: "Learn",
      submenu: [
        { name: "Courses", href: "/learn?page=CoursesExplore" },
        { name: "Industry-Based Certifications", href: "/learn?page=IndustryCertifications" },
        { name: "Projects – Real-World Problem Statements", href: "/learn?page=RealCompanyProjects" },
        { name: "Competitions & Hackathons", href: "/learn?page=CompetitionsHackathons" },
        { name: "Aptitude Learning Platforms", href: "/learn?page=AptitudeLearningPlatforms" },
      ],
    },
    {
      name: "Preparation",
      submenu: [
        { name: "Mock Interview", href: "/preparation/mockinterview" },
        { name: "Soft Skills", href: "/preparation/softskill" },
        { name: "Coding Round", href: "/preparation/codinground" },
        { name: "Resume Preparation", href: "https://career-pilot-ai-module-3.vercel.app/", external: true },
      ],
    },
    {
      name: "Company",
      submenu: [
        { name: "Hiring Platforms", href: "/company/hiring-platforms" },
        { name: "Superset Drives", href: "https://joinsuperset.com", external: true },
        { name: "Internship Platforms", href: "/company/internship-platforms" },
        { name: "Hiring Challenges", href: "/company/hiring-challenges" },
        { name: "MNC Career Portals", href: "/company/mnc-careers" },
        { name: "Startup Database", href: "https://drive.google.com/drive/folders/1kpMh9S6pEgfMMD2UOSeAmgx9Y-0HYFoj", external: true },
        { name: "Remote Hiring", href: "https://docs.google.com/spreadsheets/d/1m8zZ3Rz2LMwe707XfN9SkDG89AP5W1QE/edit?usp=drivesdk", external: true },
      ],
    },
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRefs.current.every((ref) => ref && !ref.contains(event.target))
      ) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Close mobile menu when window is resized to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Close menus when route changes
  useEffect(() => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  const handleDropdownToggle = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  const handleMobileMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
    // Close any open dropdowns when toggling mobile menu
    setActiveDropdown(null);
  };

  const handleLinkClick = () => {
    // Close mobile menu and dropdowns when a link is clicked
    setIsMenuOpen(false);
    setActiveDropdown(null);
  };

  return (
    <nav className={`relative z-[9999] ${isDarkMode
      ? "bg-black/95 backdrop-blur-md border-b border-gray-800"
      : "bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div
            onClick={() => {
              window.location.href = "/";
            }}
            className="flex items-center space-x-2 cursor-pointer"
          >
            {/* Use the local folder favicon as the logo mark */}
            <img
              src="https://res.cloudinary.com/duhhsnbwh/image/upload/v1773567036/Logo_kowvbb.png"
              alt="CareerPilot AI Logo"
              width={32}
              height={32}
              className="w-8 h-8 rounded-md"
            />
            <span className={`text-2xl font-bold ${isDarkMode ? "text-white" : "text-gray-800"}`}>
              CareerPilot AI
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href={"/"}
              className={`flex items-center space-x-1 transition-colors duration-200 py-2 ${
                isDarkMode ? "text-gray-300 hover:text-white" : "text-gray-700 hover:text-blue-600"
              }`}
            >
              <span>Home</span>
            </Link>
            {menuItems.map((item, index) => (
              <div
                key={item.name}
                className="relative"
                ref={(el) => (dropdownRefs.current[index] = el)}
              >
                <button
                  className={`flex items-center space-x-1 transition-colors duration-200 py-2 ${
                    isDarkMode
                      ? activeDropdown === index
                        ? "text-white"
                        : "text-gray-300 hover:text-white"
                      : activeDropdown === index
                        ? "text-blue-600"
                        : "text-gray-700 hover:text-blue-600"
                  }`}
                  onClick={() => handleDropdownToggle(index)}
                  onMouseEnter={() => setActiveDropdown(index)}
                >
                  <span>{item.name}</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      activeDropdown === index ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Desktop Dropdown */}
                {activeDropdown === index && (
                  <div
                    className={`absolute top-full left-0 mt-1 w-56 shadow-xl py-2 rounded-md animate-in fade-in slide-in-from-top-2 duration-200 ${
                      isDarkMode
                      ? "bg-black border border-gray-700"
                      : "bg-white border border-slate-200"
                    }`}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    {item.submenu.map((subItem) => (
                      subItem.external ? (
                        <a
                          key={subItem.name}
                          href={subItem.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`block px-4 py-2 transition-colors duration-200 ${
                            isDarkMode
                              ? "text-white hover:bg-gray-900 hover:text-gray-300"
                              : "text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                          }`}
                          onClick={handleLinkClick}
                        >
                          {subItem.name}
                        </a>
                      ) : (
                        <a
                          key={subItem.name}
                          href={subItem.href}
                          className={`block px-4 py-2 transition-colors duration-200 ${
                            isDarkMode
                              ? "text-white hover:bg-gray-900 hover:text-gray-300"
                              : "text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                          }`}
                          onClick={handleLinkClick}
                        >
                          {subItem.name}
                        </a>
                      )
                    ))}
                  </div>
                )}
              </div>
            ))}
            {/* Controls */}
            {clerkEnabled ? <DesktopAuthControls isDarkMode={isDarkMode} /> : null}
            {/* Removed Get Started CTA to eliminate layout gap on small devices in desktop mode */}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              className={`p-2 rounded-lg transition-colors duration-200 ${
                isDarkMode
                  ? "text-white hover:bg-gray-700"
                  : "text-gray-700 hover:bg-slate-100"
              }`}
              onClick={handleMobileMenuToggle}
              aria-label="Menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className={`md:hidden border-t animate-in slide-in-from-top duration-200 ${
          isDarkMode
          ? "bg-black border-gray-700"
          : "bg-white border-slate-200"
        }`}>
          <div className="px-4 py-4 space-y-3 max-h-96 overflow-y-auto">
            {menuItems.map((item, index) => (
              <div
                key={item.name}
                className={`border-b pb-3 last:pb-0 last:border-b-0 ${
                  isDarkMode ? "border-gray-700" : "border-slate-200"
                }`}
              >
                <button
                  className={`flex items-center justify-between w-full py-2 ${
                    isDarkMode
                      ? "text-white hover:text-gray-300"
                      : "text-gray-800 hover:text-blue-600"
                  }`}
                  onClick={() => handleDropdownToggle(index)}
                >
                  <span className="font-medium">{item.name}</span>
                  <ChevronDown
                    className={`w-5 h-5 transition-transform duration-200 ${
                      activeDropdown === index ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Mobile Dropdown */}
                {activeDropdown === index && (
                  <div className="mt-2 space-y-1 pl-4">
                    {item.submenu.map((subItem) => (
                      subItem.external ? (
                        <a
                          key={subItem.name}
                          href={subItem.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`block py-2 ${
                            isDarkMode
                              ? "text-white hover:text-gray-300"
                              : "text-gray-600 hover:text-blue-600"
                          }`}
                          onClick={handleLinkClick}
                        >
                          {subItem.name}
                        </a>
                      ) : (
                        <a
                          key={subItem.name}
                          href={subItem.href}
                          className={`block py-2 ${
                            isDarkMode
                              ? "text-white hover:text-gray-300"
                              : "text-gray-600 hover:text-blue-600"
                          }`}
                          onClick={handleLinkClick}
                        >
                          {subItem.name}
                        </a>
                      )
                    ))}
                  </div>
                )}
              </div>
            ))}
            {/* Removed Get Started CTA in mobile menu */}
            
            {/* Mobile Authentication */}
            {clerkEnabled ? (
              <MobileAuthControls isDarkMode={isDarkMode} onAfterNavigate={handleLinkClick} />
            ) : null}
          </div>
        </div>
      )}
    </nav>
  );
}

export default NavBar;
