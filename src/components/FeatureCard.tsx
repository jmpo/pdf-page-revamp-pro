
import { ReactNode } from "react";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <div className="bg-[#202633] p-8 rounded-lg shadow-lg hover:transform hover:scale-105 transition-all duration-300 animate-fade-in border border-[#36a7e3]/20">
      <div className="mb-5 text-[#36a7e3]">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3 text-white">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
};

export default FeatureCard;
