import { Menu, X, Phone, Mail } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className="bg-navy-900 text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4 text-sm">
            <span className="flex items-center">
              <Phone className="h-4 w-4 mr-2" />
              99486 61275, (08565)
            </span>
            <span className="hidden md:flex items-center">
              <Mail className="h-4 w-4 mr-2" />
              info@aits.edu.in
            </span>
          </div>
          <div className="text-sm font-medium">
            A-Grade Accredited Institution
          </div>
        </div>
      </div>
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTllfFPkEarzbeyY89hsnmbLWIoiQrn7LT6XQ&s" 
                alt="AITS Logo" 
                className="h-12 w-12 object-contain"
              />
              <span className={`ml-2 text-xl font-bold ${scrolled ? 'text-gray-800' : 'text-white'}`}>
                AITS Rajampet
              </span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              {['Home', 'Academics', 'Campus Life', 'Placements', 'Admissions'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  className={`${
                    scrolled ? 'text-gray-700 hover:text-navy-600' : 'text-white hover:text-navy-200'
                  } transition-colors duration-200`}
                >
                  {item}
                </a>
              ))}
              <button className="bg-navy-600 text-white px-4 py-2 rounded-md hover:bg-navy-700 transition-colors duration-200">
                Apply Now
              </button>
            </div>

            <div className="md:hidden flex items-center">
              <button 
                onClick={() => setIsOpen(!isOpen)}
                className={scrolled ? 'text-gray-800' : 'text-white'}
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden bg-white shadow-lg">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {['Home', 'Academics', 'Campus Life', 'Placements', 'Admissions'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  className="block px-3 py-2 text-gray-700 hover:text-navy-600"
                >
                  {item}
                </a>
              ))}
              <button className="w-full text-left px-3 py-2 bg-navy-600 text-white rounded-md hover:bg-navy-700">
                Apply Now
              </button>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}