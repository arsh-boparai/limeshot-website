import logo from '@/assets/images/logo1.png'

const Logo = ({ className = "h-16", variant = "default" }) => {
  const isLight = variant === "light";
  
  return (
    <div className="flex items-center">
      <img 
        src={logo} 
        alt="Limeshot Logo"
        className={className}
        style={{
          // Maintains the minimum width requirement
          filter: isLight ? "brightness(0) invert(1)" : "none" // Handles light/dark variants
        }}
      />
    </div>
  );
};

export default Logo;