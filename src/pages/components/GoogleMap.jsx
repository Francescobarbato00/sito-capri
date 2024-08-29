import React from 'react';

  const GoogleMap = () => {
    return (
      <section className="py-0">
        <div className="w-full h-screen">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16352.231406558348!2d14.22750708773158!3d40.5484471576206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x133b9875b5f54869%3A0x7e0f54c1576d1e03!2sCertosa%20di%20San%20Giacomo!5e0!3m2!1sit!2sit!4v1693308023041!5m2!1sit!2sit"
            width="100%"
            height="100%"
            frameBorder="0"
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
          ></iframe>
        </div>
      </section>
    );
  };
  
  export { GoogleMap };
  