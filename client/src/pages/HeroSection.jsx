import React from 'react'
import styled from 'styled-components'
// import { NavLink } from "react-router-dom"
// import { Button } from '../styles/Button';
// import { TbShoppingBagHeart } from "react-icons/tb";

function HeroSection({ myData }) {

  return (
    <Wrapper>
      <div className="hero-section">
      <div className="hero-content">
        <div className="hero-text">
          <p className="welcome-text">WELCOME TO</p>
          <h1 className="hero-title">Bag-House</h1>
          <p className="hero-description">
            Whether you're looking for Stylish clothing and accessories for every occasion or High-quality, trendy
            pieces at affordable prices, we've got you covered. Explore our curated collection of men's wear, women's
            wear, accessories, electronics and many more. We offer Premium Quality, Exclusive Designs, and Sustainable
            products.
          </p>
          <button className="shop-button" onClick={() => navigate("/product")}>
            SHOP <span className="cart-icon">🛒</span> NOW
          </button>
        </div>
        <div className="hero-image">
          <img src="/images/main.png" alt="Online Shopping" className="shopping-illustration" />
        </div>
      </div>
    </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .hero-section {
  flex: 1;
  background: linear-gradient(to right, #7928ca, #ff0080, #ff4d4d, #ff9a00);
  padding: 50px;
}

.hero-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1400px;
  margin: 0 auto;
  height: 100%;
}

.hero-text {
  max-width: 600px;
  color: white;
}

.welcome-text {
  font-size: 18px;
  margin-bottom: 10px;
  font-weight: 500;
}

.hero-title {
  font-size: 60px;
  margin-bottom: 20px;
  color: #000;
  font-family: Impact, sans-serif;
}

.hero-description {
  font-size: 16px;
  line-height: 1.6;
  margin-bottom: 30px;
  font-family: 'Georgia', serif;
}

.shop-button {
  background-color: #ff4d4d;
  color: white;
  border: 2px solid white;
  padding: 15px 30px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;
  display: flex;
  align-items: center;
  gap: 8px;
}

.shop-button:hover {
  background-color: #ff2525;
}

.cart-icon {
  font-size: 18px;
}

.hero-image {
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.shopping-illustration {
  max-width: 100%;
  height: auto;
}

/* Responsive styles */
@media (max-width: 1024px) {
  .hero-content {
    flex-direction: column;
    text-align: center;
  }

  .hero-text {
    margin-bottom: 40px;
    max-width: 100%;
  }

  .hero-image {
    width: 100%;
  }

  .shop-button {
    margin: 0 auto;
  }
}

@media (max-width: 768px) {
  .navbar {
    flex-direction: column;
    padding: 20px;
  }

  .logo-container {
    margin-bottom: 20px;
  }

  .nav-links {
    width: 100%;
    justify-content: space-between;
    gap: 10px;
  }

  .hero-section {
    padding: 30px 20px;
  }

  .hero-title {
    font-size: 40px;
  }
}

`;
export default HeroSection