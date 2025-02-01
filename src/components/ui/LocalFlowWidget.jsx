import { useEffect } from 'react';

const LocalFlowWidget = () => {
  useEffect(() => {
    // Create script element
    const script = document.createElement('script');
    script.src = 'https://cdn.localflow.com/widget.js';
    script.async = true;
    
    // Once the script is loaded, initialize LocalFlow
    script.onload = () => {
      new window.LocalFlow('e367a70dacabfbc41d8524807d5d02e7afdc8e32551d0b3b66385e6d46373da9', {
        theme: 'light',
        position: 'bottom-right'
      });
    };
    
    // Append script to document
    document.body.appendChild(script);

    // Cleanup on component unmount
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null; // This component doesn't render anything
};

export default LocalFlowWidget;