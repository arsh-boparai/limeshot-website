const Logo = ({ className = "h-10", variant = "default" }) => {
    const isLight = variant === "light";
  
    return (
      <div className="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 80" className={"h-12"}>
          <defs>
            {/* Main sphere gradient - consistent blue */}
            <linearGradient id="sphereGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: "#38bdf8", stopOpacity: 1 }} />
              <stop offset="50%" style={{ stopColor: "#0ea5e9", stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: "#0284c7", stopOpacity: 1 }} />
            </linearGradient>
            
            {/* Shine effect */}
            <radialGradient id="sphereShine" cx="40%" cy="40%" r="60%">
              <stop offset="0%" style={{ stopColor: "#ffffff", stopOpacity: 0.4 }} />
              <stop offset="100%" style={{ stopColor: "#ffffff", stopOpacity: 0 }} />
            </radialGradient>
  
            {/* Layer gradients */}
            <linearGradient id="layerGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: "#38bdf8", stopOpacity: 0.3 }} />
              <stop offset="100%" style={{ stopColor: "#0ea5e9", stopOpacity: 0.1 }} />
            </linearGradient>
          </defs>
  
          {/* Base sphere - same for both variants */}
          <circle cx="40" cy="40" r="28" fill="url(#sphereGradient)" />
          
          {/* Inner glow */}
          <circle cx="40" cy="40" r="28" fill="url(#sphereShine)" />
  
          {/* Decorative segments */}
          <path 
            d="M40 12 C50 25, 55 35, 55 40 C55 45, 50 55, 40 68" 
            fill="none" 
            stroke="url(#layerGradient)" 
            strokeWidth="2" 
            opacity="0.8" 
          />
          <path 
            d="M40 12 C30 25, 25 35, 25 40 C25 45, 30 55, 40 68" 
            fill="none" 
            stroke="url(#layerGradient)" 
            strokeWidth="2" 
            opacity="0.8" 
          />
  
          {/* Connection nodes - using primary blue */}
          <circle cx="40" cy="25" r="2.5" fill="#38bdf8" opacity="0.9" />
          <circle cx="40" cy="55" r="2.5" fill="#38bdf8" opacity="0.9" />
          <circle cx="25" cy="40" r="2.5" fill="#38bdf8" opacity="0.9" />
          <circle cx="55" cy="40" r="2.5" fill="#38bdf8" opacity="0.9" />
  
          {/* Additional detail lines */}
          <path 
            d="M40 15 L40 20 M40 60 L40 65" 
            stroke="#38bdf8" 
            strokeWidth="2" 
            strokeLinecap="round" 
            opacity="0.4" 
          />
          <path 
            d="M15 40 L20 40 M60 40 L65 40" 
            stroke="#38bdf8" 
            strokeWidth="2" 
            strokeLinecap="round" 
            opacity="0.4" 
          />
  
          {/* Company name - only text color changes based on variant */}
          <g transform="translate(85, 48)">
            <text
              fontFamily="Arial"
              fontWeight="bold"
              fontSize="32"
              fill={isLight ? "#ffffff" : "#0f172a"}
              letterSpacing="1"
            >
              LIMESHOT
            </text>
            <text
              fontFamily="Arial"
              fontSize="14"
              fill={isLight ? "#ffffff" : "#0284c7"}
              x="3"
              y="20"
              letterSpacing="4"
              fontWeight="500"
            >
              DIGITAL
            </text>
          </g>
        </svg>
      </div>
    );
  };
  
  export default Logo;