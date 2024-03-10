import React, { useState, useEffect } from "react";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/home-advertising.png";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";
import { Modal, Button, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const ValidationModal = ({ open, handleClose }) => {
  const [activePage, setActivePage] = useState(1);

  const handleNextPage = () => {
    if (activePage < 6) {
      setActivePage(activePage + 1);
    }
  };

  const handlePrevPage = () => {
    if (activePage > 1) {
      setActivePage(activePage - 1);
    }
  };

  const handleCloseModal = () => {
    setActivePage(1);
    handleClose();
  };




  const [selectedOption, setSelectedOption] = useState(null);

  const handleCheckboxChange = (option) => {
    setSelectedOption(option);
  };

  const renderPageContent = (page) => {
    switch (page) {
      case 1:
        return (
          <div>
            <h2>What is Your Business</h2>
            <div>
              <label>
                <input
                  type="checkbox"
                  checked={selectedOption === "Option1"}
                  onChange={() => handleCheckboxChange("Option1")}
                />{" "}
                Real Estate
              </label>
            </div>
            <div>
              <label>
                <input
                  type="checkbox"
                  checked={selectedOption === "Option2"}
                  onChange={() => handleCheckboxChange("Option2")}
                />{" "}
                Online Retail
              </label>
            </div>
            <div>
              <label>
                <input
                  type="checkbox"
                  checked={selectedOption === "Option3"}
                  onChange={() => handleCheckboxChange("Option3")}
                />{" "}
                Health and Wellness
              </label>
            </div>
            <div>
              <label>
                <input
                  type="checkbox"
                  checked={selectedOption === "Option4"}
                  onChange={() => handleCheckboxChange("Option4")}
                />{" "}
                Others
              </label>
            </div>
          </div>
        );

        case 2:
          return (
            <div>
              <h2>What is Your Motivation</h2>
              <div>
                <label>
                  <input
                    type="checkbox"
                    checked={selectedOption === "Option5"}
                    onChange={() => handleCheckboxChange("Option5")}
                  />{" "}
                  Passion
                </label>
              </div>
              <div>
                <label>
                  <input
                    type="checkbox"
                    checked={selectedOption === "Option6"}
                    onChange={() => handleCheckboxChange("Option6")}
                  />{" "}
                  Growth
                </label>
              </div>
              <div>
                <label>
                  <input
                    type="checkbox"
                    checked={selectedOption === "Option7"}
                    onChange={() => handleCheckboxChange("Option7")}
                  />{" "}
                  Innovation
                </label>
              </div>
              <div>
                <label>
                  <input
                    type="checkbox"
                    checked={selectedOption === "Option8"}
                    onChange={() => handleCheckboxChange("Option8")}
                  />{" "}
                  All of the Above
                </label>
              </div>
            </div>
          );

          case 3:
            return (
              <div>
                <h2>What Is Your Desired Monthly Income Goal? 🎯💵</h2>
                <div>
                  <label>
                    <input
                      type="checkbox"
                      checked={selectedOption === "Option5"}
                      onChange={() => handleCheckboxChange("Option5")}
                    />{" "}
                    More Than ₱3 Million Per Month
                  </label>
                </div>
                <div>
                  <label>
                    <input
                      type="checkbox"
                      checked={selectedOption === "Option6"}
                      onChange={() => handleCheckboxChange("Option6")}
                    />{" "}
                    ₱1 Million - ₱3 Million Per Month
                  </label>
                </div>
                <div>
                  <label>
                    <input
                      type="checkbox"
                      checked={selectedOption === "Option7"}
                      onChange={() => handleCheckboxChange("Option7")}
                    />{" "}
                    ₱500K - ₱1 Million Per Month
                  </label>
                </div>
                <div>
                  <label>
                    <input
                      type="checkbox"
                      checked={selectedOption === "Option8"}
                      onChange={() => handleCheckboxChange("Option8")}
                    />{" "}
                    ₱100K - ₱500K Per Month
                  </label>
                </div>
              </div>
            );

            case 4:
              return (
                <div>
                  <h2>What will you do when you start earning a lot?🤔</h2>
                  <div>
                    <label>
                      <input
                        type="checkbox"
                        checked={selectedOption === "Option5"}
                        onChange={() => handleCheckboxChange("Option5")}
                      />{" "}
                      🏡🚗I Will Buy My Dream House/Car
                    </label>
                  </div>
                  <div>
                    <label>
                      <input
                        type="checkbox"
                        checked={selectedOption === "Option6"}
                        onChange={() => handleCheckboxChange("Option6")}
                      />{" "}
                      👪I Will Be Able To Provide To My Family
                    </label>
                  </div>
                  <div>
                    <label>
                      <input
                        type="checkbox"
                        checked={selectedOption === "Option7"}
                        onChange={() => handleCheckboxChange("Option7")}
                      />{" "}
                        I Will Enjoy My Time & Financial Freedom
                    </label>
                  </div>
                  <div>
                    <label>
                      <input
                        type="checkbox"
                        checked={selectedOption === "Option8"}
                        onChange={() => handleCheckboxChange("Option8")}
                      />{" "}
                      I Will Quit My Job
                    </label>
                  </div>
                </div>
              );

              case 5:
                return (
                  <div>
                    <h2>To be successful, do you agree that you need to invest time, money, and effort? 👍💯</h2>
                    <textarea
                      type="text"
                      placeholder="Type YES if you are 100% agree!"
                      // value={selectedOption}
                      onChange={(e) => handleInputChange(e.target.value)}
                    />
                  </div>
                );              
        default:
          return null;
      }
    };
    return (
      <Modal open={open} onClose={handleCloseModal}>
        <div className="modal-container">
          <IconButton
            aria-label="close"
            onClick={handleCloseModal}
            style={{ position: "absolute", top: 10, right: 10 }}
          >
            <CloseIcon />
          </IconButton>
          {renderPageContent(activePage)}
  
          <div className="modal-navigation">
            <Button onClick={handlePrevPage} disabled={activePage === 1}>
              Previous
            </Button>
            <span>{activePage} of 6</span>
            <Button onClick={handleNextPage} disabled={activePage === 6}>
              Next
            </Button>
          </div>
        </div>
      </Modal>
    );
  };
  
  function Home() {
    const [backendData, setBackendData] = useState("");
    const [modalOpen, setModalOpen] = useState(false);
  
    useEffect(() => {
      fetchBackendData();
    }, []);
  
    const fetchBackendData = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/data`);
        const data = await response.json();
        setBackendData(data.message);
      } catch (error) {
        console.error("Error fetching data from the backend", error);
      }
    };
  
    const handleOpenModal = () => {
      setModalOpen(true);
    };
  
    const handleCloseModal = () => {
      setModalOpen(false);
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
              Transform Your Business Today with Our Proven Advertising Solution!
            </p>
            <button className="secondary-button" onClick={handleOpenModal}>
              Take Action! <FiArrowRight />
            </button>
            <ValidationModal open={modalOpen} handleClose={handleCloseModal} />
          </div>
          <div className="home-image-section">
            <img src={BannerImage} alt="" />
          </div>
        </div>
      </div>
    );
  }
  
  export default Home;