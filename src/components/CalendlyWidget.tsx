
import React, { useEffect } from 'react';

const CalendlyWidget = () => {
  useEffect(() => {
    // Load Calendly script if not already loaded
    if (!document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]')) {
      const script = document.createElement('script');
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div 
      className="calendly-inline-widget" 
      data-url="https://calendly.com/marcel-friluftslove/45-minutes-call/" 
      style={{ minWidth: '320px', height: '700px' }}
    />
  );
};

export default CalendlyWidget;
