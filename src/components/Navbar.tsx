import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Code2 } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Code2 className="h-8 w-8 mr-2" />
              <span className="text-xl font-bold">WebStudio</span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to="/" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-emerald-500 transition-colors">
                Startseite
              </Link>
              <Link to="/team" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-emerald-500 transition-colors">
                Team
              </Link>
              <Link to="/kontakt" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-emerald-500 transition-colors">
                Kontakt
              </Link>
              <Link to="/impressum" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-emerald-500 transition-colors">
                Impressum
              </Link>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md hover:bg-emerald-500 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link 
              to="/" 
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-emerald-500"
              onClick={() => setIsOpen(false)}
            >
              Startseite
            </Link>
            <Link 
              to="/team" 
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-emerald-500"
              onClick={() => setIsOpen(false)}
            >
              Team
            </Link>
            <Link 
              to="/kontakt" 
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-emerald-500"
              onClick={() => setIsOpen(false)}
            >
              Kontakt
            </Link>
            <Link 
              to="/impressum" 
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-emerald-500"
              onClick={() => setIsOpen(false)}
            >
              Impressum
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;