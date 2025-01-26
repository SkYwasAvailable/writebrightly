import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold text-primary">DocHighlight</Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-center flex-1 space-x-8">
            <Link to="/" className="text-gray-700 hover:text-primary px-3 py-2">Home</Link>
            <Link to="/services" className="text-gray-700 hover:text-primary px-3 py-2">Services</Link>
            <Link to="/submit">
              <Button>Submit Request</Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-primary"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-b">
            <Link
              to="/"
              className="block px-3 py-2 text-gray-700 hover:text-primary"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              to="/services"
              className="block px-3 py-2 text-gray-700 hover:text-primary"
              onClick={toggleMenu}
            >
              Services
            </Link>
            <Link
              to="/submit"
              className="block px-3 py-2"
              onClick={toggleMenu}
            >
              <Button className="w-full">Submit Request</Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};