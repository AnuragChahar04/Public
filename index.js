import React, { useState, useEffect } from 'react';
import { Heart, Calendar, MapPin } from 'lucide-react';

const WeddingInvitation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    let timeout;
    const handleWheel = (e) => {
      if (isScrolling) return;
      
      e.preventDefault();
      setIsScrolling(true);

      if (e.deltaY > 0 && currentSlide < 3) {
        setCurrentSlide(prev => prev + 1);
      } else if (e.deltaY < 0 && currentSlide > 0) {
        setCurrentSlide(prev => prev - 1);
      }

      timeout = setTimeout(() => setIsScrolling(false), 800);
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => {
      window.removeEventListener('wheel', handleWheel);
      clearTimeout(timeout);
    };
  }, [currentSlide, isScrolling]);

  const slides = [
    // Slide 1: Ganesh Ji
    <div key="ganesh" className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-rose-50 via-amber-50 to-orange-50">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-64 h-64 border-l-4 border-t-4 border-rose-400 rounded-tl-[80px]"></div>
        <div className="absolute top-0 right-0 w-64 h-64 border-r-4 border-t-4 border-rose-400 rounded-tr-[80px]"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 border-l-4 border-b-4 border-rose-400 rounded-bl-[80px]"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 border-r-4 border-b-4 border-rose-400 rounded-br-[80px]"></div>
      </div>

      <div className="z-10 text-center animate-fadeIn">
        <div className="mb-8 transform hover:scale-110 transition-transform duration-500">
          <svg width="200" height="200" viewBox="0 0 200 200" className="mx-auto drop-shadow-2xl animate-float">
            <defs>
              <linearGradient id="ganeshGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{stopColor: '#ec4899', stopOpacity: 1}} />
                <stop offset="100%" style={{stopColor: '#f97316', stopOpacity: 1}} />
              </linearGradient>
            </defs>
            <circle cx="100" cy="100" r="90" fill="url(#ganeshGradient)" opacity="0.1"/>
            <text x="100" y="130" fontSize="120" textAnchor="middle" fill="url(#ganeshGradient)">ॐ</text>
            <path d="M 100 50 Q 120 60 130 80 Q 140 100 130 120 Q 120 140 100 150 Q 80 140 70 120 Q 60 100 70 80 Q 80 60 100 50" fill="none" stroke="url(#ganeshGradient)" strokeWidth="2" opacity="0.5"/>
          </svg>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-rose-600 mb-6 animate-slideDown" style={{fontFamily: 'Georgia, serif'}}>
          गणेश वंदना
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto px-4 leading-relaxed animate-slideUp" style={{fontFamily: 'Georgia, serif'}}>
          वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ।<br/>
          निर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा॥
        </p>
        
        <div className="mt-12 flex justify-center gap-3">
          {[0, 1, 2, 3].map(i => (
            <div key={i} className={`w-3 h-3 rounded-full transition-all duration-300 ${i === 0 ? 'bg-rose-600 w-8' : 'bg-rose-300'}`}></div>
          ))}
        </div>
      </div>
      
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideDown {
          from { transform: translateY(-50px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes slideUp {
          from { transform: translateY(50px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .animate-float { animation: float 3s ease-in-out infinite; }
        .animate-fadeIn { animation: fadeIn 1s ease-out; }
        .animate-slideDown { animation: slideDown 0.8s ease-out; }
        .animate-slideUp { animation: slideUp 0.8s ease-out 0.3s backwards; }
      `}</style>
    </div>,

    // Slide 2: Couple Names
    <div key="couple" className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-pink-50 via-rose-50 to-amber-50">
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-40 h-40 bg-rose-300 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-60 h-60 bg-amber-300 rounded-full opacity-20 animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="z-10 text-center px-4 animate-fadeIn">
        <div className="mb-8">
          <Heart className="w-16 h-16 mx-auto text-rose-500 animate-heartbeat" fill="currentColor"/>
        </div>
        
        <h2 className="text-3xl md:text-4xl text-gray-600 mb-4" style={{fontFamily: 'Georgia, serif'}}>
          Together with their families
        </h2>
        
        <div className="my-12">
          <p className="text-lg md:text-xl text-gray-600 mb-2">Daughter of</p>
          <p className="text-2xl md:text-3xl font-semibold text-gray-800 mb-8">Smt. & Sh. Hardhayal Singh</p>
          
          <h1 className="text-6xl md:text-8xl font-bold text-rose-600 my-8 transform hover:scale-105 transition-transform" style={{fontFamily: 'Brush Script MT, cursive'}}>
            Jyoti
          </h1>
          
          <div className="flex items-center justify-center my-8">
            <div className="h-px w-20 bg-rose-400"></div>
            <Heart className="w-8 h-8 mx-4 text-rose-500" fill="currentColor"/>
            <div className="h-px w-20 bg-rose-400"></div>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold text-rose-600 my-8 transform hover:scale-105 transition-transform" style={{fontFamily: 'Brush Script MT, cursive'}}>
            Devi Singh
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 mt-2">Son of Manish</p>
        </div>
        
        <p className="text-xl md:text-2xl text-gray-700 italic max-w-2xl mx-auto">
          "Two souls with but a single thought, two hearts that beat as one"
        </p>
        
        <div className="mt-12 flex justify-center gap-3">
          {[0, 1, 2, 3].map(i => (
            <div key={i} className={`w-3 h-3 rounded-full transition-all duration-300 ${i === 1 ? 'bg-rose-600 w-8' : 'bg-rose-300'}`}></div>
          ))}
        </div>
      </div>
      
      <style jsx>{`
        @keyframes heartbeat {
          0%, 100% { transform: scale(1); }
          25% { transform: scale(1.2); }
          50% { transform: scale(1); }
        }
        .animate-heartbeat { animation: heartbeat 2s ease-in-out infinite; }
      `}</style>
    </div>,

    // Slide 3: Event Details
    <div key="events" className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, #f97316 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="z-10 text-center px-4 max-w-4xl animate-fadeIn">
        <Calendar className="w-20 h-20 mx-auto mb-6 text-rose-600 animate-bounce"/>
        
        <h2 className="text-5xl md:text-6xl font-bold text-rose-600 mb-4" style={{fontFamily: 'Georgia, serif'}}>
          Golden Moments
        </h2>
        
        <div className="bg-white bg-opacity-80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 my-8 transform hover:scale-105 transition-transform">
          <div className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Thursday, 04th December 2025
          </div>
          
          <div className="space-y-6 text-left max-w-2xl mx-auto">
            <div className="flex items-start gap-4 p-4 bg-rose-50 rounded-xl transform hover:translate-x-2 transition-transform">
              <div className="w-2 h-2 mt-3 rounded-full bg-rose-500 flex-shrink-0"></div>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">Barat Swagat</h3>
                <p className="text-xl text-gray-600">5:00 PM</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 p-4 bg-amber-50 rounded-xl transform hover:translate-x-2 transition-transform">
              <div className="w-2 h-2 mt-3 rounded-full bg-amber-500 flex-shrink-0"></div>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">Dinner</h3>
                <p className="text-xl text-gray-600">6:00 PM</p>
              </div>
            </div>
          </div>
        </div>
        
        <p className="text-xl text-gray-700 italic mt-6">
          With new dreams, new hopes, and new aspirations
        </p>
        
        <div className="mt-12 flex justify-center gap-3">
          {[0, 1, 2, 3].map(i => (
            <div key={i} className={`w-3 h-3 rounded-full transition-all duration-300 ${i === 2 ? 'bg-rose-600 w-8' : 'bg-rose-300'}`}></div>
          ))}
        </div>
      </div>
    </div>,

    // Slide 4: Venue
    <div key="venue" className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-rose-300 rounded-full opacity-20 animate-float"></div>
          <div className="absolute bottom-1/3 right-1/3 w-40 h-40 bg-purple-300 rounded-full opacity-20 animate-float" style={{animationDelay: '1s'}}></div>
        </div>
      </div>

      <div className="z-10 text-center px-4 max-w-4xl animate-fadeIn">
        <MapPin className="w-20 h-20 mx-auto mb-6 text-rose-600 animate-bounce"/>
        
        <h2 className="text-5xl md:text-6xl font-bold text-rose-600 mb-8" style={{fontFamily: 'Georgia, serif'}}>
          Wedding Venue
        </h2>
        
        <div className="bg-white bg-opacity-90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 transform hover:scale-105 transition-transform">
          <h3 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Dev Vatika
          </h3>
          <p className="text-2xl md:text-3xl text-gray-700 mb-6">
            Near Electricity Board, Deeghot
          </p>
          <p className="text-xl text-gray-600 mb-8">
            Vill. Deeghot, Teh. Hodal, Distt. Palwal (Hr.)
          </p>
          
          <div className="pt-6 border-t-2 border-rose-200">
            <p className="text-lg text-gray-600 italic">
              Save the date and join us in celebrating this beautiful union
            </p>
          </div>
        </div>
        
        <div className="mt-12 flex justify-center gap-3">
          {[0, 1, 2, 3].map(i => (
            <div key={i} className={`w-3 h-3 rounded-full transition-all duration-300 ${i === 3 ? 'bg-rose-600 w-8' : 'bg-rose-300'}`}></div>
          ))}
        </div>
        
        <div className="mt-12">
          <Heart className="w-12 h-12 mx-auto text-rose-500" fill="currentColor"/>
        </div>
      </div>
    </div>
  ];

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div 
        className="flex transition-transform duration-700 ease-in-out h-full"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="min-w-full h-full">
            {slide}
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeddingInvitation;
