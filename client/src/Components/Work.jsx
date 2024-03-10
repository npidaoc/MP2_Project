import React from "react";
import Monitor from "../Assets/monitor-1101209.webp";
import Target from "../Assets/purpose-1101350.webp";
import Increase from "../Assets/bar-chart-1101253.webp";

function Work () {
  const workInfoData = [
    {
      image: Monitor,
      title: "Done For You Offer",
      text: "  Elevate your brand effortlessly with our expert advertising services. Your success, simplified!",
    },
    {
      image: Target,
      title: "Affiliate Sharing Program",
      text: "Establish a sustainable online business with our RevShare affiliate program and earn recurring commissions from referrals. ",
    },
    {
      image: Increase,
      title: "Online Training & Community",
      text: "Master online marketing through step-by-step courses, live events.",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Why Choose Us</p>
        <h1 className="primary-heading">How Can We Help You?</h1>
        <p className="primary-text">
        Dive into a dynamic advertising ballet. Our algorithms masterfully combine seamless monitoring, precision targeting, and energetic increases. Watch your message take the spotlight, captivating audiences in the digital realm. Welcome to the brilliance of our advertising solution—a symphony of success tailored just for you.
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
