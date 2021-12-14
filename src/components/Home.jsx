//Daniel is doing home page
import React from "react";
import logo from "./images/nft_icon.png";
//merge resolutions

const Home = () => {
  return (
    <div>
      <div className="bg-image">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-7">
              <h1 className="text-center text-white">
                {" "}
                Discover, collect, and sell extraordinary NFTs{" "}
              </h1>
            </div>
          </div>
          <br></br>
          <div class="row justify-content-center">
            <div class="col-7">
              <h4 className="text-center text-white">
                {" "}
                on one of the world's largest NFT marketplaces{" "}
              </h4>
            </div>
          </div>
          <br></br>
          <br></br>
          <br></br>
          <div class="row justify-content-end">
            <div class="col-7">
              <a href="register" title="">
                <img className="img-responsive" src={logo} alt="Image" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
