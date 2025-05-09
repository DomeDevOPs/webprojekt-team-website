import React from 'react';
import { ArrowRight, Code, Layers, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-800 via-teal-800 to-emerald-700 text-white">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRjMC0yLjIwOS0xLjc5MS00LTQtNHMtNCAxLjc5MS00IDQgMS43OTEgNCA0IDQgNC0xLjc5MSA0LTR6bTAtMThjMC0yLjIwOS0xLjc5MS00LTQtNHMtNCAxLjc5MS00IDQgMS43OTEgNCA0IDQgNC0xLjc5MSA0LTR6bTE4IDBjMC0yLjIwOS0xLjc5MS00LTQtNHMtNCAxLjc5MS00IDQgMS43OTEgNCA0IDQgNC0xLjc5MSA0LTR6bS0xOCAxOGMwLTIuMjA5LTEuNzkxLTQtNC00cy00IDEuNzkxLTQgNCAxLjc5MSA0IDQgNCA0LTEuNzkxIDQtNHptMTggMGMwLTIuMjA5LTEuNzkxLTQtNC00cy00IDEuNzkxLTQgNCAxLjc5MSA0IDQgNCA0LTEuNzkxIDQtNHptMTggMGMwLTIuMjA5LTEuNzkxLTQtNC00cy00IDEuNzkxLTQgNCAxLjc5MSA0IDQgNCA0LTEuNzkxIDQtNHoiPjwvcGF0aD48L2c+PC9nPjwvc3ZnPg==')]"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Innovative <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-teal-300">Webentwicklung</span> für die digitale Zukunft
            </h1>
            <p className="text-xl md:text-2xl text-emerald-100 mb-8">
              Wir gestalten digitale Erlebnisse, die begeistern und Ihr Unternehmen voranbringen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/kontakt" className="bg-white text-emerald-900 hover:bg-emerald-50 px-8 py-4 rounded-lg font-medium text-lg flex items-center justify-center transition-colors shadow-lg">
                Projekt starten <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link to="/team" className="bg-emerald-700 hover:bg-emerald-600 px-8 py-4 rounded-lg font-medium text-lg transition-colors shadow-lg">
                Unser Team kennenlernen
              </Link>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto">
            <path fill="#ffffff" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,149.3C960,160,1056,160,1152,138.7C1248,117,1344,75,1392,53.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Unsere Leistungen</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Wir bieten maßgeschneiderte Lösungen für Ihre digitalen Herausforderungen.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg border-2 border-emerald-100 hover:border-emerald-200 transition-colors">
              <div className="bg-emerald-100 text-emerald-600 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                <Code className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Webentwicklung</h3>
              <p className="text-gray-600 mb-4">
                Moderne, responsive Websites und Webanwendungen mit den neuesten Technologien.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg border-2 border-emerald-100 hover:border-emerald-200 transition-colors">
              <div className="bg-teal-100 text-teal-600 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                <Layers className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">UI/UX Design</h3>
              <p className="text-gray-600 mb-4">
                Benutzerfreundliche Interfaces und überzeugende Nutzererlebnisse für Ihre digitalen Produkte.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg border-2 border-emerald-100 hover:border-emerald-200 transition-colors">
              <div className="bg-emerald-100 text-emerald-600 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                <Zap className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Performance-Optimierung</h3>
              <p className="text-gray-600 mb-4">
                Beschleunigung Ihrer Website für bessere Nutzererfahrung und höhere Conversion-Raten.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-8 md:mb-0 md:mr-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Bereit für Ihr nächstes Projekt?</h2>
              <p className="text-xl text-emerald-100">
                Kontaktieren Sie uns für ein unverbindliches Beratungsgespräch.
              </p>
            </div>
            <Link 
              to="/kontakt" 
              className="bg-white text-emerald-600 hover:bg-emerald-50 px-8 py-4 rounded-lg font-medium text-lg transition-colors shadow-lg"
            >
              Jetzt anfragen
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;