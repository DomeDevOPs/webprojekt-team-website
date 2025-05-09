import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const teamMembers = [
  {
    id: 1,
    name: 'Julia Schmidt',
    role: 'Frontend Entwicklerin',
    bio: 'Julia ist spezialisiert auf React und moderne Frontend-Frameworks. Sie hat über 5 Jahre Erfahrung in der Entwicklung von benutzerfreundlichen Interfaces.',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=800',
    social: {
      github: '#',
      linkedin: '#',
      email: 'julia@webstudio.de'
    }
  },
  {
    id: 2,
    name: 'Markus Weber',
    role: 'Backend Entwickler',
    bio: 'Markus ist unser Backend-Experte mit fundiertem Wissen in Node.js, Python und Datenbanktechnologien. Er sorgt für robuste und skalierbare Anwendungen.',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=800',
    social: {
      github: '#',
      linkedin: '#',
      email: 'markus@webstudio.de'
    }
  },
  {
    id: 3,
    name: 'Sarah Müller',
    role: 'UI/UX Designerin',
    bio: 'Sarah verbindet ästhetisches Design mit benutzerfreundlicher Funktionalität. Sie hat ein Auge für Details und schafft intuitive Nutzererlebnisse.',
    image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=800',
    social: {
      github: '#',
      linkedin: '#',
      email: 'sarah@webstudio.de'
    }
  }
];

const Team = () => {
  return (
    <div>
      {/* Team Header */}
      <section className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Unser Team</h1>
          <p className="text-xl max-w-3xl mx-auto text-emerald-100">
            Lernen Sie die kreativen Köpfe hinter unseren innovativen Webprojekten kennen.
          </p>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {teamMembers.map((member) => (
              <div key={member.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="h-80 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-emerald-600 font-medium mb-4">{member.role}</p>
                  <p className="text-gray-600 mb-6">{member.bio}</p>
                  <div className="flex space-x-4">
                    <a href={member.social.github} className="text-gray-500 hover:text-gray-900 transition-colors">
                      <Github className="h-5 w-5" />
                    </a>
                    <a href={member.social.linkedin} className="text-gray-500 hover:text-gray-900 transition-colors">
                      <Linkedin className="h-5 w-5" />
                    </a>
                    <a href={`mailto:${member.social.email}`} className="text-gray-500 hover:text-gray-900 transition-colors">
                      <Mail className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Unsere Werte</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Diese Grundsätze leiten unsere tägliche Arbeit und Zusammenarbeit.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 border border-emerald-200 rounded-lg hover:border-emerald-300 transition-colors">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Innovation</h3>
              <p className="text-gray-600">
                Wir bleiben stets am Puls der Zeit und setzen auf zukunftsweisende Technologien.
              </p>
            </div>
            
            <div className="p-6 border border-emerald-200 rounded-lg hover:border-emerald-300 transition-colors">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Qualität</h3>
              <p className="text-gray-600">
                Wir liefern durchdachte Lösungen mit höchsten Ansprüchen an Code und Design.
              </p>
            </div>
            
            <div className="p-6 border border-emerald-200 rounded-lg hover:border-emerald-300 transition-colors">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Zusammenarbeit</h3>
              <p className="text-gray-600">
                Wir arbeiten eng mit unseren Kunden zusammen und verstehen uns als Partner.
              </p>
            </div>
            
            <div className="p-6 border border-emerald-200 rounded-lg hover:border-emerald-300 transition-colors">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Transparenz</h3>
              <p className="text-gray-600">
                Wir kommunizieren offen und ehrlich über Fortschritte, Herausforderungen und Lösungen.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;