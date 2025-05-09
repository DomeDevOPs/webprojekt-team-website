import React from 'react';
import { Link } from 'react-router-dom';
import { Code2, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Code2 className="h-6 w-6 mr-2" />
              <span className="text-xl font-bold">WebStudio</span>
            </div>
            <p className="text-gray-400 mb-4">
              Wir entwickeln innovative Weblösungen für Ihr Unternehmen.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Kontakt</h3>
            <div className="space-y-2">
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-2 text-emerald-400" />
                <span>Musterstraße 123, 10115 Berlin</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-emerald-400" />
                <span>+49 30 1234567</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-emerald-400" />
                <span>info@webstudio.de</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-emerald-400 transition-colors">
                  Startseite
                </Link>
              </li>
              <li>
                <Link to="/team" className="hover:text-emerald-400 transition-colors">
                  Team
                </Link>
              </li>
              <li>
                <Link to="/kontakt" className="hover:text-emerald-400 transition-colors">
                  Kontakt
                </Link>
              </li>
              <li>
                <Link to="/impressum" className="hover:text-emerald-400 transition-colors">
                  Impressum
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} WebStudio. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;