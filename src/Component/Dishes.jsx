import React from 'react';

const Dishes = () => {
  return (
    <>
      <div className="hero">
        <img src="./images/dishes.jpg" alt="" className="w-100" />
        <div className="caption d-flex justify-content-center h-100 ps-3 pt-5">
          <div className="pt-5">
            <h2 className="pt-5">OUR DISHES</h2>
            <img className="w-50" src="./images/h1-slide-1-img-1.png" alt="" />
            <h3
              data-aos="fade-up"
              data-aos-anchor-placement="center-bottom"
              className="pt-3"
            >
              <img className="pe-3" src="./images/download.svg" alt="" />
              Chocolate Cake
            </h3>
            <h3
              data-aos="fade-up"
              data-aos-anchor-placement="center-bottom"
              className="pt-3"
            >
              <img className="pe-3" src="./images/download.svg" alt="" />
              Butterscotch Cake
            </h3>
            <h3
              data-aos="fade-up"
              data-aos-anchor-placement="center-bottom"
              className="pt-3"
            >
              <img className="pe-3" src="./images/download.svg" alt="" />
              White Forest Cake
            </h3>
            <h3
              data-aos="fade-up"
              data-aos-anchor-placement="center-bottom"
              className="pt-3"
            >
              <img className="pe-3" src="./images/download.svg" alt="" />
              Black Forest Cake
            </h3>
            <h3
              data-aos="fade-up"
              data-aos-anchor-placement="center-bottom"
              className="pt-3"
            >
              <img className="pe-3" src="./images/download.svg" alt="" />
              Pineapple Cake
            </h3>
            <div>
              <img
                src="./images/cook-cute.jpg"
                className="w-100 pt-4 pb-3"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dishes;
