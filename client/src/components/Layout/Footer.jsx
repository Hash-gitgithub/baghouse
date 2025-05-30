// import React from 'react'
// import { Link } from "react-router-dom";

// const Footer = () => {
//   return (
//     <div className="footer">
//       <h1 className="text-center">All Right Reserved &copy; Techinfoyt</h1>
//       <p className="text-center mt-3">
//         <Link to="/about">About</Link>|<Link to="/contact">Contact</Link>|
//         <Link to="/policy">Privacy Policy</Link>
//       </p>
//     </div>
//   )
// }

// export default Footer

import React from "react";
import styled from "styled-components";
import { FaLinkedin, FaInstagram, FaYoutube } from "react-icons/fa";
import { MdSecurity } from "react-icons/md";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <Wrapper>
      <hr />
      <footer>
        <div className="container grid grid-four-column">
          <div className="footer-about">
            <h3>Bag-House</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          </div>
          <div className="footer-subscribe">
            <h3>Safe & Secure</h3>
            <div className="safe">
              <MdSecurity />
            </div>
          </div>
          <div className="footer-social">
            <h3>Follow Us</h3>
            <div className="footer-social--icons">
              <div>
                <a
                  href="https://www.youtube.com"
                >
                  <FaLinkedin className="icons" />
                </a>
              </div>
              <div>
                <a
                  href="https://www.youtube.com"
                >
                  <FaInstagram className="icons" />
                </a>
              </div>
              <div>
                <a
                  href="https://www.youtube.com"
                >
                  <FaYoutube className="icons" />
                </a>
              </div>
            </div>
          </div>
          <div className="footer-contact">
            {/* <h3>Customer Support</h3>
            <h3>+91 12345678978</h3> */}
            <button><a href="/about">About Us</a></button>
            <button><a href="/contact">Contact Us</a></button>
          </div>
        </div>

        <div className="footer-bottom--section">
          <div className="container grid grid-two-column ">
            <p>
              @{new Date().getFullYear()} Bag-House. All Rights Reserved
            </p>
            <div>
              <p>PRIVACY POLICY</p>
              <p>TERMS & CONDITIONS</p>
            </div>
          </div>
        </div>
      </footer>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  min-height: 50vh; /* Ensure it takes at least 50% of viewport height */
  background-color: black;
  color: white;
  padding: 4rem 2rem; /* Adjust padding for better responsiveness */

  hr {
    border: none;
    height: 4px;
    background-color: white;
    margin-bottom: 2rem;
    width: 100%;
  }

  footer {
    flex-grow: 1; /* Allow footer content to take remaining space */
    display: flex;
    flex-direction: column;
    justify-content: space-between; /* Push bottom section to the bottom */
  }

  .container {
    max-width: 1200px; /* Increased max-width for larger screens */
    margin: 0 auto;
    padding: 0 2rem; /* Consistent container padding */
  }

  .grid {
    display: grid;
    gap: 2rem; /* Adjusted gap for responsiveness */
  }

  .grid-four-column {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); /* More responsive columns */
  }

  .footer-about,
  .footer-subscribe,
  .footer-social,
  .footer-contact {
    margin-bottom: 2rem; /* Add some spacing between sections */
  }
    .footer-contact {
    gap:12px;
    color:black;
    display:flex;
    flex-direction:column;
  }
  .footer-contact button{
  height: 36%;
  border-radius:12px;
  }
  .footer-contact button a{
  text-decoration:none;
  color:black;
  }

  .footer-contact button:hover{
    background-color: rgb(243, 68, 84);
  }

  h3 {
    margin-bottom: 1rem;
    color: inherit; /* Inherit color from Wrapper */
  }

  p {
    color: inherit; /* Inherit color from Wrapper */
    font-size: 0.9rem; /* Slightly smaller font for better readability */
  }

  .footer-social--icons {
    display: flex;
    gap: 1rem;

    div {
      padding: 0.8rem;
      border-radius: 50%;
      border: 1px solid #555;
      display: flex;
      justify-content: center;
      align-items: center;

      .icons {
        color: inherit;
        font-size: 1.2rem;
        cursor: pointer;
      }
    }
  }

  .safe {
    margin-top: 1rem;
    font-size: 2.5rem;
    cursor: pointer;
    margin-left: 0; /* Adjust safe icon positioning */
  }

  .footer-bottom--section {
    padding-top: 2rem;
    border-top: 1px solid #333; /* Add a subtle top border */
    padding-bottom: 1rem;
  }

  .grid-two-column {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    align-items: center;
  }

  .footer-bottom--section p {
    font-size: 0.8rem;
    margin-bottom: 0.5rem;
    text-align: center; /* Center text in bottom section by default */
  }

  .footer-bottom--section > div {
    display: flex;
    justify-content: space-around; /* Distribute links in bottom section */
  }

  /* Media query for larger screens */
  @media (min-width: 768px) {
    padding: 6rem; /* Increased padding on larger screens */

    .grid {
      gap: 3rem;
    }

    .grid-four-column {
      grid-template-columns: 1fr 1.2fr 0.8fr 1fr; /* More structured columns on larger screens */
    }

    .footer-bottom--section {
      padding-top: 3rem;
    }

    .footer-bottom--section p {
      text-align: left; /* Align text left on larger screens */
    }
  }
`;

export default Footer;