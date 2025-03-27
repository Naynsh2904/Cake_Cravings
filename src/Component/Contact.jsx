import React, { useEffect } from 'react';

import AOS from 'aos';

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <>
      <div className="hero">
        <img src="./images/contact.jpg" alt="" className="w-100" />
        <div className="caption d-flex justify-content-center align-items-center h-100 w-100">
          <div className="text-center px-5">
            <h4
              data-aos="zoom-out-down"
              data-aos-duration="500"
              className="pb-3"
            >
              Get Connect...
            </h4>
            <h2
              data-aos="zoom-out-down"
              data-aos-duration="1000"
              className="m-0"
            >
              CONTACT US
            </h2>
            <img
              data-aos="zoom-out-down"
              data-aos-duration="1200"
              src="./images/h1-slide-1-img-1.png"
              alt=""
            />
            <h2 className="pt-2 fs-1">I'm Tanvi Magare</h2>
            <p className="mb-1">
              Mobile No. : <span>9834659774</span>
            </p>
            <a
              href="https://www.instagram.com/_cakes.delights_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="fs-2 mb-1">Instagram</p>
            </a>
            <p className="">
              Address: Nim chowk Pathari Taluka Saoli District Chandrapur,
              Maharastra.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
