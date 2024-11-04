import { useState } from 'react';
import { 
  Cpu, Database, Brain, BarChart, Cog, Building2, 
  Zap, Radio, GraduationCap, Pill, BookOpen, Briefcase, ArrowRight 
} from 'lucide-react';

export default function Programs() {
  const [activeTab, setActiveTab] = useState('btech');
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const programs = {
    btech: [
      { 
        icon: <Cpu />, 
        title: "CSE", 
        seats: 240, 
        desc: "Computer Science & Engineering",
        image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80"
      },
      { 
        icon: <Database />, 
        title: "AIDS", 
        seats: 240, 
        desc: "Artificial Intelligence & Data Science",
        image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80"
      },
      { 
        icon: <Brain />, 
        title: "AIMS", 
        seats: 120, 
        desc: "AI & Machine Learning",
        image: "https://images.unsplash.com/photo-1589254065878-42c9da997008?auto=format&fit=crop&q=80"
      },
      { 
        icon: <BarChart />, 
        title: "CSE-DS", 
        seats: 120, 
        desc: "Data Science",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80"
      },
      { 
        icon: <Brain />, 
        title: "CSE-AI", 
        seats: 120, 
        desc: "Artificial Intelligence",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80"
      },
      { 
        icon: <Cog />, 
        title: "ME", 
        seats: 60, 
        desc: "Mechanical Engineering",
        image: "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&q=80"
      },
      { 
        icon: <Building2 />, 
        title: "CE", 
        seats: 120, 
        desc: "Civil Engineering",
        image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80"
      },
      { 
        icon: <Zap />, 
        title: "EEE", 
        seats: 240, 
        desc: "Electrical and Electronics",
        image: "https://images.unsplash.com/photo-1620283085068-5aab84e2db8e?auto=format&fit=crop&q=80"
      },
      { 
        icon: <Radio />, 
        title: "ECE", 
        seats: 240, 
        desc: "Electronics and Communication",
        image: "https://images.unsplash.com/photo-1563770660941-20978e870e26?auto=format&fit=crop&q=80"
      }
    ],
    other: [
      { 
        icon: <Pill />, 
        title: "B.Pharmacy", 
        seats: 240, 
        desc: "Pharmaceutical Sciences",
        image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&q=80"
      },
      { 
        icon: <BookOpen />, 
        title: "MCS", 
        seats: 60, 
        desc: "Master of Computer Science",
        image: "https://images.unsplash.com/photo-1623479322729-28b25c16b011?auto=format&fit=crop&q=80"
      },
      { 
        icon: <Briefcase />, 
        title: "MBA", 
        seats: 60, 
        desc: "Business Administration",
        image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80"
      },
      { 
        icon: <GraduationCap />, 
        title: "PG", 
        seats: 60, 
        desc: "Other Specializations",
        image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80"
      }
    ]
  };

  return (
    <section id="academics" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fadeIn">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Academic Programs
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose from our diverse range of AICTE approved programs
          </p>
        </div>

        <div className="flex justify-center space-x-4 mb-8">
          <button
            onClick={() => setActiveTab('btech')}
            className={`px-6 py-2 rounded-full transition-all duration-300 ${
              activeTab === 'btech'
                ? 'bg-navy-600 text-white'
                : 'bg-white text-gray-600 hover:bg-navy-50'
            }`}
          >
            B.Tech Programs
          </button>
          <button
            onClick={() => setActiveTab('other')}
            className={`px-6 py-2 rounded-full transition-all duration-300 ${
              activeTab === 'other'
                ? 'bg-navy-600 text-white'
                : 'bg-white text-gray-600 hover:bg-navy-50'
            }`}
          >
            Other Programs
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs[activeTab].map((program, index) => (
            <div
              key={index}
              className="relative bg-white rounded-lg shadow-lg overflow-hidden group animate-scaleIn"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-navy-50 rounded-lg text-navy-600">
                    {program.icon}
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold">{program.title}</h3>
                    <p className="text-navy-600">{program.seats} Seats</p>
                  </div>
                </div>
                <p className="text-gray-600">{program.desc}</p>
                <button className="mt-4 text-navy-600 hover:text-navy-800 font-medium inline-flex items-center group">
                  Learn more
                  <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-2 transition-transform duration-300" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}