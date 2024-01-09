import React from "react";
import { Link } from "react-router-dom";
import test from '../assets/test.PNG'

const Home = () => {
  return (
    <>
      <div className="container-fluid border-0 p-0" style={{ background: "#F5F6F6" }}>
        <div className="container border-0 py-3 p-2">
          <img
            src="https://scontent.fisb3-4.fna.fbcdn.net/v/t39.2365-6/278095046_1967528346752748_7467599174931884085_n.svg?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_eui2=AeGBBschzolOYEFZ7qn9lVP8O9IaezjgoPQ70hp7OOCg9HVuQke5YNRi9cvbRQw_doaf0fAL1QJullpR7-NvXGBH&_nc_ohc=xDi7ax7LPTMAX-C6LQ2&_nc_pt=1&_nc_ht=scontent.fisb3-4.fna&oh=00_AfCVyXy_CUaLJtBlvOP0PwGelxzMnG7NYgcSJxQvrH0l3Q&oe=659CF215"
            alt="logo"
          />
        </div>
      </div>

      <div className="d-flex justify-content-center mt-5">


  
        <div className="col-sm-6 mt-5 ms-5">
          <img
            src="https://scontent.flhe7-2.fna.fbcdn.net/v/t39.8562-6/375593064_778731280602001_6601361369208148137_n.png?_nc_cat=106&ccb=1-7&_nc_sid=f537c7&_nc_ohc=6u-QsNp1NMMAX9gIctx&_nc_oc=AQnmn9BzL7ERfLZL0pB_oN24cisuimG6sXVvyGDBh1CdwMAfSHfw2HOHS9JSzFlcN_c&_nc_ht=scontent.flhe7-2.fna&oh=00_AfC8BXpLuHyko56LMUI400CmUohY_6fsoppFOsRm6WzbMw&oe=65A0F88B"
            alt="meta"
            style={{ width: "5rem", height: "5rem" }}
          />
          <h4 className="my-3 fs-1" >
            Become <br /> Meta Verified
          </h4>
          <Link
            to="/validation"
            className="border-0 text-white text-decoration-none"
            style={{
             
              background: "#0064e0",
              borderRadius: "100px",
              padding: "10px 35px",
            }}
          >
            Apply
          </Link>

          <p style={{  fontSize: "18px" }} className="mt-4">
            Grow your social presence with Meta Verified – a new subscription <br />
            bundle available for creators and businesses on Instagram and <br />
            Facebook.
          </p>

          <p className="py-3" style={{fontSize:'17px' }}>
            Sign up now for creators
          </p>

          <p className="mt-4 mb-0" style={{ }}>
            <span className="fw-semibold">Are you a business?</span> Get more
            information on
          </p>
          <Link style={{  fontSize: '14px' }}>
            Meta verified for businesses
          </Link>

          <p className="mt-4 font-italic" style={{  fontSize: "13px" }}>
            Features, availability, and pricing may vary by region.
          </p>
        </div>
      
          <div
          className="col-sm-5 d-none d-sm-block  img-smal order-2 img-fluid" /* Show on larger screens */
          style={{
            backgroundImage: `url(${test})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
           
          }}
        ></div>   
      
       
      </div>
    </>
  );
};

export default Home;
