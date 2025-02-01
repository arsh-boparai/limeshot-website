// src/components/ui/LocalFlowWidget.jsx
import { useEffect } from 'react';

const LocalFlowWidget = () => {
  useEffect(() => {
    const loadWidget = async () => {
      try {
        // Check if widget server is accessible
        const serverCheck = await fetch('https://widget-server-eight.vercel.app');
        if (!serverCheck.ok) {
          console.error('Widget server is not accessible');
          return;
        }

        // Create script element
        const script = document.createElement('script');
        script.src = 'https://localflow-widget.vercel.app/widget.js';
        script.async = true;
        
        // Once the script is loaded, initialize LocalFlow
        script.onload = () => {
          try {
            new window.LocalFlow('e367a70dacabfbc41d8524807d5d02e7afdc8e32551d0b3b66385e6d46373da9', {
              theme: 'light',
              position: 'bottom-right',
              serverUrl: 'https://widget-server-eight.vercel.app', // Add server URL
              widgetUrl: 'https://localflow-widget.vercel.app' // Add widget URL
            });
          } catch (error) {
            console.error('Error initializing widget:', error);
          }
        };

        script.onerror = (error) => {
          console.error('Error loading widget script:', error);
        };
        
        // Append script to document
        document.body.appendChild(script);

        // Cleanup on component unmount
        return () => {
          document.body.removeChild(script);
        };
      } catch (error) {
        console.error('Error in widget initialization:', error);
      }
    };

    loadWidget();
  }, []);

  return null;
};

export default LocalFlowWidget;