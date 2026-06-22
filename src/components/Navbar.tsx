import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import makLogo from "../assets/mak-logo.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Network", path: "/network" },
    { name: "Brands", path: "/brands" },
    { name: "Trade Execution", path: "/trade" },
    { name: "Logistics", path: "/logistics" },
    { name: "Flyers", path: "/flyers" },
    { name: "Contact", path: "/contact" },
  ];

  const isSolidNav = isScrolled || location.pathname !== "/";

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${isSolidNav ? "bg-white/95 backdrop-blur-md shadow-lg py-3" : "bg-transparent py-5"}`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6">
        <Link to="/" className="shrink-0">
          <img
            src={isSolidNav ? makLogo : "/logos/mak-logo-white.png"}
            alt="Masar Al Khaleej International LLC"
            className="h-14 md:h-16 w-auto object-contain"
          />
        </Link>

        <div
          className={`hidden lg:flex items-center gap-8 text-[11px] font-semibold uppercase tracking-[0.22em] ${isSolidNav ? "text-brand-dark" : "text-brand-white"}`}
        >
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`relative transition-colors hover:text-brand-red ${location.pathname === link.path ? "text-brand-red" : ""}`}
            >
              {link.name}
              <span
                className={`absolute -bottom-1 left-0 h-0.5 bg-brand-red transition-all ${location.pathname === link.path ? "w-full" : "w-0 group-hover:w-full"}`}
              ></span>
            </Link>
          ))}
        </div>

        <button
          className={`${isSolidNav ? "text-brand-dark" : "text-brand-white"} lg:hidden`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 border-t border-white/10 bg-brand-dark/95 p-8 shadow-2xl backdrop-blur-md lg:hidden">
          <div className="flex flex-col gap-5 text-white">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-sm font-bold uppercase tracking-[0.2em] transition-colors hover:text-brand-red ${location.pathname === link.path ? "text-brand-red" : ""}`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
