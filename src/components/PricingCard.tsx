
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

interface PricingCardProps {
  title: string;
  price: string;
  description: string;
  features: string[];
  ctaText: string;
  popular?: boolean;
  discount?: string;
  isAnnual?: boolean;
}

const PricingCard = ({ 
  title, 
  price, 
  description, 
  features, 
  ctaText,
  popular = false,
  discount,
  isAnnual = false
}: PricingCardProps) => {
  return (
    <div className={`
      bg-white rounded-xl shadow-lg overflow-hidden
      transform transition-all duration-300
      ${popular ? 'ring-2 ring-[#42E2B8] scale-105' : 'hover:shadow-xl'}
    `}>
      {popular && (
        <div className="bg-[#42E2B8] text-[#001F5C] text-center py-1 font-medium">
          Más popular
        </div>
      )}
      <div className="p-8">
        <h3 className="text-xl font-bold text-[#001F5C] mb-2">{title}</h3>
        <div className="flex items-baseline mb-2">
          <span className="text-3xl font-bold text-[#001F5C]">Gs. {price}</span>
          {price !== "0" && <span className="text-gray-500 ml-1">/mes</span>}
        </div>
        <p className="text-gray-600 mb-6">{description}</p>
        
        <ul className="space-y-3 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 shrink-0" />
              <span className="text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>
        
        <Button 
          className={`w-full ${
            popular 
              ? 'bg-[#42E2B8] hover:bg-[#35B396] text-[#001F5C]' 
              : 'bg-[#001F5C] hover:bg-[#002A7A] text-white'
          }`}
        >
          {ctaText}
        </Button>
        
        {discount && (
          <p className="text-center mt-4 text-sm text-green-600 font-medium">
            {discount}
          </p>
        )}
      </div>
    </div>
  );
};

export default PricingCard;
