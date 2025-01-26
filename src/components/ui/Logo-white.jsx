import logo from '@/assets/images/logo2.png'

const Logo = ({ className = "h-16", variant = "default" }) => {
  const isLight = variant === "light";
  
  return (
    <div className="flex items-center">
      <img 
        src={logo} 
        alt="Limeshot Logo"
        className={className}
      />
    </div>
  );
};

export default Logo;