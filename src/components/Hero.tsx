import { ArrowRight, Award, Users, BookOpen } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      image: "https://aitsrajampet.ac.in/images/event/AA-Rating/AITS-Rajampet-Secures-AA-Rating-by-IIT-IISc-NPTEL.jpg",
      title: "Welcome to AITS Rajampet",
      subtitle: "Shaping Tomorrow's Leaders Today"
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwytQRm04jOWXYKbmZMwC54S_4y7bCtIs9fQ&s",
      title: "State-of-the-Art Facilities",
      subtitle: "Modern Labs & Infrastructure"
    },
    {
      image: "https://wallpapercave.com/wp/wp8489424.jpg",
      title: "90%+ Placement Rate",
      subtitle: "Building Successful Careers"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div id="home" className="relative h-screen">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            currentSlide === index ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={slide.image}
            className="w-full h-full object-cover"
            alt={slide.title}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
        </div>
      ))}
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="text-white">
          <div className="animate-fadeIn">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {slides[currentSlide].title}
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl">
              {slides[currentSlide].subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm p-4 rounded-lg transform hover:scale-105 transition-transform duration-300">
              <Award className="h-8 w-8 text-navy-300" />
              <div>
                <h3 className="font-semibold">A-Grade</h3>
                <p className="text-sm opacity-80">Accredited Institution</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm p-4 rounded-lg transform hover:scale-105 transition-transform duration-300">
              <Users className="h-8 w-8 text-navy-300" />
              <div>
                <h3 className="font-semibold">90%+ Placements</h3>
                <p className="text-sm opacity-80">Consistent Success</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm p-4 rounded-lg transform hover:scale-105 transition-transform duration-300">
              <BookOpen className="h-8 w-8 text-navy-300" />
              <div>
                <h3 className="font-semibold">9+ Programs</h3>
                <p className="text-sm opacity-80">Diverse Courses</p>
              </div>
            </div>
          </div>

          <div className="space-x-4">
            <button className="bg-navy-600 text-white px-8 py-3 rounded-md hover:bg-navy-700 inline-flex items-center transition-all duration-300 transform hover:translate-x-2">
              Explore Programs
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-md hover:bg-white hover:text-gray-900 transition-colors duration-300">
              Virtual Tour
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}