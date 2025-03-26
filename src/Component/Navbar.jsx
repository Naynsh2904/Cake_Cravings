import React from 'react';

const Navbar = () => {
  return (
    <nav className=" w-100 position-fixed top-0 left-0 bg-white">
      <div className=" justify-content-around py-2 align-items-center d-flex">
        <h1>Cake Cravings...</h1>
        <div className="text-end">
          <img className="h-25 w-50" src="./images/logo-img-1.png" alt="" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
