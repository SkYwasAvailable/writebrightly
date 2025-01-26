import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">DocHighlight</h3>
            <p className="text-gray-600">
              Refining your content to stand out with clarity and precision.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-600 hover:text-primary">Home</Link></li>
              <li><Link to="/services" className="text-gray-600 hover:text-primary">Services</Link></li>
              <li><Link to="/submit" className="text-gray-600 hover:text-primary">Submit Request</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p className="text-gray-600">
              Join our Discord community for support and updates.
            </p>
            <a href="#" className="text-primary hover:underline">
              Join Discord Server
            </a>
          </div>
        </div>
        <div className="border-t mt-8 pt-8 text-center text-gray-600">
          <p>&copy; {new Date().getFullYear()} DocHighlight. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};