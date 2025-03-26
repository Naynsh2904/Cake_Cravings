import React, { useEffect } from 'react';

const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <>
      <div className="hero">
        <img src="./images/h1-slide-1.jpg" alt="" className="w-100" />
        <div className="caption d-flex justify-content-center align-items-center h-100">
          <div className="text-center px-5 mt-5 pt-5">
            <h4
              data-aos="zoom-out-down"
              data-aos-duration="500"
              className="pb-3"
            >
              All for a Special Day
            </h4>
            <h2
              data-aos="zoom-out-down"
              data-aos-duration="1000"
              className="m-0"
            >
              DELIGHT
            </h2>
            <img
              data-aos="fade-left"
              data-aos-duration="1200"
              src="./images/h1-slide-1-img-1.png"
              alt=""
            />
            <p
              data-aos="zoom-out-down"
              data-aos-duration="1400"
              className="pb-3"
            >
              It's always good time for sweets! Made with care and prepared with
              love, our sweets are all you might need to make every day special.
              Find your favorite now.
            </p>
            <h4
              data-aos="zoom-out-down"
              data-aos-duration="1600"
              className="pb-3"
            >
              " Welcome to My Home Bakery..!!! "
            </h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
