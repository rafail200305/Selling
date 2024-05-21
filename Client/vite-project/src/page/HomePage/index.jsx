import React from "react";
import "./index.scss";

const HomePage = () => {
  return (
    <div>
      <div id="home-page">
        <div className="home-page">
          <section id="banner">
            <div className="content">
              <h1 style={{ color: "white" }}>Shop With Us</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam
                laudantium ab maxime ut quia vel nostrum iure atque.
              </p>

              <button className="shop">SHOP NOW</button>
              <button className="clup">CLUP MEMBERSHIP</button>
            </div>
          </section>

          <section id="category">
            <p>POPULAR PRODUCTS</p>
            <div className="container">
              <div style={{ display: "inline-block" }} className="image-text1">
                <div className="text">
                  <h1>Our Products</h1>
                  <h5>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Voluptatibus nemo recusandae dolorum.
                  </h5>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
