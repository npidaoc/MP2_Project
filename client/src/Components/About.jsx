import React from "react";
import Target from "../Assets/target_4-8820062.webp";
import Achievement from "../Assets/achievement-8820199.webp";
import Teamwork from "../Assets/teamwork_2-8820597.webp";

function About() {
  const workInfoData = [
    {
      image: Target,
      title: "Our Misssion",
      text: "We exist to support our partners in their daily journey towards earning, growing, and achieving success.",
    },
    {
      image: Achievement,
      title: "Our Vision",
      text: "Our vision is to deliver innovative advertising solutions, propelling our clients toward unparalleled digital prosperity. ",
    },
    {
      image: Teamwork,
      title: "Contribution",
      text: "Create a supportive community with like minded people helping each other achieve their goals.",
    },
  ];

  return (
    <div id="about"className="about-section-wrapper">
      <div className="about-section-top">
        <p className="primary-subheading">About</p>
        <h1 className="primary-heading">What Is NP Advertising Solution?</h1>
        <p className="primary-text">
        NP Advertising Solution proudly extends its services tailored just for you. Our dedicated team is committed to delivering excellence in every aspect of your advertising needs. Let us be your partner in success, offering a personalized service designed to elevate your brand and surpass your expectations. Discover the difference with NP Advertising Solution – where your goals become our priority.
        </p>
      </div>
      <div className="about-section-bottom">
        {workInfoData.map((data) => (
          <div className="about-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2 className="title-with-border">{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default About;

