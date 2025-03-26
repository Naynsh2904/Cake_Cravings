import React, { useEffect } from 'react';

import AOS from 'aos';

const Map = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <>
      <div className="hero">
        <img src="./images/foot.jpg" alt="" className="w-100" />
        <div className="caption d-flex justify-content-center align-items-center h-100 w-100">
          <div className="text-center pt-5">
            <h4 className="text-center text-black py-2 pb-3 fs-1">This is my Hometown </h4>
            <div className="d-flex justify-content-center pb-5">
              <iframe
                title="Tanvi Magare's Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.123456789!2d73.856743!3d18.520430!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a2ce676a400b1f5%3A0xe2ec9189aa93e066!2sPathari%2C%20Maharashtra%20441215!5e0!3m2!1sen!2sin!4v1691764567890"
                width="90%"
                height="450"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <p className='pt-3'>
              Copyright © 2024 All rights reserved | This template is made with
              🧡 by Nayan Shivankar
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Map;
