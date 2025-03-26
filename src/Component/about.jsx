  import React, { useEffect } from 'react';

  import AOS from 'aos';

  const about = () => {
    useEffect(() => {
      AOS.init({ duration: 1000 });
    }, []);
    return (
      <>
        <div className="hero">
          <img src="./images/abt-bg-2.jpg" alt="" className="w-100" />
          <div className="caption d-flex justify-content-center align-items-center h-100">
            <div className="text-center px-5 mt-5 pt-5">
              <h4
                data-aos="zoom-out-down"
                data-aos-duration="500"
                className="pb-3"
              >
                passion{' '}
              </h4>
              <h2
                data-aos="zoom-out-down"
                data-aos-duration="1000"
                className="m-0"
              >
                OUR STORY
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
                className="py-3"
              >
                I'm Tanvi Mangare, a college student who balances my studies with
                a passion for baking. Each cake I bake is crafted with love, care,
                and attention to detail, reflecting my dedication and passion.
              </p>
              <h4
                data-aos="zoom-out-down"
                data-aos-duration="1600"
                className="pb-3"
              >
                "Baking dreams into reality, one cake at a time!"
              </h4>
            </div>
          </div>
        </div>
      </>
  );
};

export default about;
