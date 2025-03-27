import React, { useEffect } from 'react';

import AOS from 'aos';
const Price = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <>
      <div className="hero price mt-5">
        <img src="./images/abt_bg.jpg" alt="" className="w-100" />
        <img src="./images/abt_bg.jpg" alt="" className="w-100" />
        <div className="caption d-flex justify-content-center pt-5 h-100">
          <div>
            <div className="text-center px-5 mt-5 pt-5">
              <h4
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                className="pb-3"
              >
                Enjoy Each Bites...
              </h4>
              <h2
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                className="m-0"
              >
                OUR PRICES
              </h2>
              <img
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                src="./images/h1-slide-1-img-1.png"
                alt=""
              />

              <div data-aos="fade-up" className="py-3 my-4 card">
                <h4 className="mb-0">Small</h4>
                <h3>&#8377; 250</h3>
                <h5>(1/4 kg)</h5>
              </div>

              <div data-aos="fade-up" className="py-3 my-4 card">
                <h4 className="mb-0">Medium</h4>
                <h3>&#8377; 350</h3>
                <h5>(1/2 Kg)</h5>
              </div>

              <div data-aos="fade-up" className="py-3 my-4 card">
                <h4 className="mb-0">Large</h4>
                <h3>&#8377; 700</h3>
                <h5>(1 Kg)</h5>
              </div>

              <h4
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                className="pt-5"
              >
                "Quality cakes at a price that's just as sweet!"
              </h4>
            </div>
            <img src="./images/cute-cook.jpg" alt="" className="w-100 pt-5" />

            <div className="d-flex justify-content-center py-5">
              <img
                data-aos="zoom-out-up"
                className="w-50"
                src="./images/h1-slide-1-img-1.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Price;
