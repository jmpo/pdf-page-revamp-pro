
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Flag } from "lucide-react";

interface PhoneInputProps {
  value: string;
  onChange: (value: string, formattedValue: string) => void;
  placeholder?: string;
  required?: boolean;
  className?: string;
}

const PhoneInput = ({ value, onChange, placeholder = "0991 111 222", required = false, className }: PhoneInputProps) => {
  const [displayValue, setDisplayValue] = useState(value);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Allow only numbers
    const rawValue = e.target.value.replace(/\D/g, '');
    
    // Format for display with visual spacing (0991 111 222)
    let formattedDisplay = rawValue;
    if (rawValue.length > 4) {
      formattedDisplay = `${rawValue.substring(0, 4)} ${rawValue.substring(4)}`;
    }
    if (rawValue.length > 7) {
      formattedDisplay = `${formattedDisplay.substring(0, 9)} ${formattedDisplay.substring(9)}`;
    }
    
    // Format for API/webhook (+595 991111222)
    let formattedAPI = "";
    if (rawValue) {
      // Remove leading 0 if present and add country code
      const numberWithoutLeadingZero = rawValue.startsWith('0') ? rawValue.substring(1) : rawValue;
      formattedAPI = `+595 ${numberWithoutLeadingZero}`;
    }
    
    setDisplayValue(formattedDisplay);
    onChange(rawValue, formattedAPI);
  };

  return (
    <div className="relative flex items-center">
      <div className="absolute left-3 flex items-center pointer-events-none">
        <img 
          src="/lovable-uploads/44fab854-0824-4162-9249-79eff404cd26.png" 
          alt="Bandera de Paraguay" 
          className="h-4 w-6 mr-2"
        />
      </div>
      <Input
        type="tel"
        value={displayValue}
        onChange={handleChange}
        className={`pl-12 ${className}`}
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
};

export default PhoneInput;
