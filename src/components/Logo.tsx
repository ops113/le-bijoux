import { motion } from "framer-motion";
import smLogo from "@/assets/sm-logo.png";

interface LogoProps {
  variant?: "light" | "dark";
  className?: string;
}

export const Logo = ({ variant = "dark", className = "" }: LogoProps) => {
  const textColor = variant === "light" ? "text-swan-wing" : "text-ebony-clay";
  
  return (
    <motion.div 
      className={`flex flex-col items-center ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Monogram */}
      <img 
        src={smLogo} 
        alt="SM Monogram" 
        className="w-16 h-16 md:w-20 md:h-20 object-contain"
      />
      
      {/* Brand Name */}
      <div className={`mt-2 text-xs tracking-luxury uppercase font-light ${textColor}`}>
        Sumayah Marafi
      </div>
    </motion.div>
  );
};

export const LogoHorizontal = ({ variant = "dark", className = "" }: LogoProps) => {
  const textColor = variant === "light" ? "text-swan-wing" : "text-ebony-clay";
  
  return (
    <motion.div 
      className={`flex items-center gap-3 ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <span className={`text-xl md:text-2xl font-display font-light tracking-elegant ${textColor}`}>
        Sumayah<span className="text-quicksand"> </span>Marafi
      </span>
    </motion.div>
  );
};
