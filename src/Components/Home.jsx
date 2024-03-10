import React, { useState, useEffect } from "react";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/home-advertising.png";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";

function Home() {
  const [backendData, setBackendData] = useState("");

  useEffect(() => {
    // Fetch data from the backend when the component mounts
    fetchBackendData();
  }, []);

  const fetchBackendData = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/data");
      const data = await response.json();
      // Assuming  backend API returns an object with a 'message' property
      setBackendData(data.message);
    } catch (error) {
      console.error("Error fetching data from the backend", error);
    }
  };

  return (
    <div id="home" className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">Seize the Opportunity:</h1>
          <p className="primary-text">
            {backendData || "Transform Your Business Today with Our Proven Advertising Solution!"}
          </p>
          <button className="secondary-button">
            Take Action! <FiArrowRight />{" "}
          </button>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Home;
