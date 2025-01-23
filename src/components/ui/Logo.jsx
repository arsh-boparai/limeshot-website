
const Logo = ({ className = "h-8" }) => {
    return (
      <div className="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 60" className={className}>
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: "#a3e635", stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: "#65a30d", stopOpacity: 1 }} />
            </linearGradient>
          </defs>
          <circle cx="30" cy="30" r="20" fill="url(#grad1)" />
          <path d="M25 30 L45 30" stroke="white" strokeWidth="4" strokeLinecap="round" />
          <text x="60" y="35" fontFamily="Arial" fontWeight="bold" fontSize="20" fill="#fff">
            LIMESHOT
          </text>
        </svg>
      </div>
    );
  };
  
  export default Logo;