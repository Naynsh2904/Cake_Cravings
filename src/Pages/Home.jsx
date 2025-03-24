import React from 'react';

const Home = () => {
  return (
    <>
      <div className="parent">
        <div
          id="cakeCarousel"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="./images/hero_cake (1).jpg"
                className="d-block w-100"
                alt="Cake 1"
              />
              <div className="caption d-flex justify-content-center  align-items-center w-100 h-100">
                <div style={{ backgroundColor: '#c7b3cf78' }}>
                  <h2 className="text-center">
                    Baking happiness, one slice at a time!
                  </h2>
                  <p className="text-center">
                    Every cake we bake is crafted with love and passion to bring
                    a smile to your face. We believe that every slice should
                    deliver a moment of joy, making your celebrations even more
                    memorable.
                  </p>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="./images/hero_cake (2).jpg"
                className="d-block w-100"
                alt="Cake 2"
              />
              <div className="caption d-flex justify-content-center align-items-center  w-100 h-100  ">
                <div style={{ backgroundColor: '#9da4a680' }}>
                  <h2 className="text-center">
                    Indulge in the sweetest moments of life!
                  </h2>
                  <p className="text-center">
                    " Life is full of sweet moments, and we’re here to make them
                    even sweeter. Indulge in our delicious cakes and let each
                    bite remind you to savor the little joys that make life so
                    special.
                  </p>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="./images/hero_cake (3).jpg"
                className="d-block w-100"
                alt="Cake 3"
              />
              <div className="caption d-flex justify-content-center align-items-center  w-100 h-100  ">
                <div style={{ backgroundColor: '#a6b4b37a' }}>
                  <h2 className="text-center">
                    Where every cake tells a story
                  </h2>
                  <p className="text-center">
                    Our cakes are more than just desserts; they’re stories
                    waiting to be shared. Whether it’s a birthday, wedding, or
                    any special event, each cake we create is filled with
                    meaning and memories, crafted just for you.
                  </p>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="./images/hero_cake (4).png"
                className="d-block w-100"
                alt="Cake 4"
              />
              <div className="caption d-flex justify-content-center align-items-center  w-100 h-100  ">
                <div style={{ backgroundColor: '#a19e946d' }}>
                  <h2 className="text-center">
                    From our oven to your celebration
                  </h2>
                  <p className="text-center">
                    Every cake starts with the finest ingredients and ends in a
                    celebration. From our oven straight to your table, we bring
                    you the perfect cake for every occasion, ensuring your
                    special moments are as sweet as they deserve to be.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#cakeCarousel"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon text-dark"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#cakeCarousel"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon text-dark"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
