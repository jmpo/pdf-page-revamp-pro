
import { useEffect, useState } from "react";

const HeroImage = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative">
      <div className={`transform transition-all duration-700 ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
        <img 
          src="/placeholder.svg" 
          alt="ChatIA Dashboard" 
          className="w-full h-auto rounded-lg shadow-xl"
        />
        <div className="absolute -bottom-4 -right-4 bg-white p-3 rounded-lg shadow-lg flex items-center">
          <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
          <p className="text-sm font-medium text-gray-700">24/7 Atención automática</p>
        </div>
      </div>
    </div>
  );
};

export default HeroImage;
