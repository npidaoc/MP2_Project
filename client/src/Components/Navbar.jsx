import React, { useState, useEffect } from "react";
import Logo from "../Assets/logo-image.png";
import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import axios from 'axios';

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const [fullNameError, setFullNameError] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState("");
  const [emailError, setEmailError] = useState("");

  const menuOptions = [
    {
      text: "Home",
      icon: <HomeIcon />,
    },
    {
      text: "About",
      icon: <InfoIcon />,
    },
    {
      text: "Contact",
      icon: <PhoneRoundedIcon />,
    },
  ];

  const handleFullNameChange = (e) => {
    const value = e.target.value;
    setFullName(value);
    setFullNameError(value.trim() ? "" : "Full Name is required.");
  };

  const handlePhoneNumberChange = (e) => {
    const value = e.target.value;
    setPhoneNumber(value);
    setPhoneNumberError(value.trim() ? "" : "Phone Number is required.");
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    setEmailError(value.trim() ? "" : "Email is required.");
  };

  const handleRegisterClick = () => {
    setFullNameError("");
    setPhoneNumberError("");
    setEmailError("");
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();

    if (!fullName || !phoneNumber || !email) {
      setFullNameError(!fullName.trim() ? "Full Name is required." : "");
      setPhoneNumberError(!phoneNumber.trim() ? "Phone Number is required." : "");
      setEmailError(!email.trim() ? "Email is required." : "");
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/api/register', {
        fullName,
        phoneNumber,
        email,
      });

      if (response.status === 200) {
        console.log('Registration successful!');
        alert('Registration successful!');
        setOpenModal(false);
      } else {
        console.error('Registration failed:', response.status, response.data);
        alert('Registration failed. Please try again.');
      }
    } catch (error) {
      console.error('Error during registration:', error);
      alert('An error occurred. Please try again.');
    }
  };

  const smoothScrollTo = (target) => {
    const element = document.getElementById(target);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const isTop = scrollY < 10;
      setIsScrolled(!isTop);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar-container ${isScrolled ? "scrolled" : ""}`}>
      <div className="nav-logo-container">
        <img src={Logo} alt="" />
      </div>
      <div className="navbar-links-container">
        <a href="#home" onClick={() => smoothScrollTo("home")}>
          Home
        </a>
        <a href="#about" onClick={() => smoothScrollTo("about")}>
          About
        </a>
        <a href="#contact" onClick={() => smoothScrollTo("contact")}>
          Contact
        </a>
        <button className="primary-button" onClick={handleRegisterClick}>
          Register Now
        </button>
      </div>
      <div className="navbar-menu-container">
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
      </div>
      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <List>
            {menuOptions.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton onClick={() => smoothScrollTo(item.text.toLowerCase())}>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>

      {/* Registration Modal */}
      <Modal open={openModal} onClose={handleCloseModal}>
        <Box sx={{ width: 300, padding: 2 }} className="modal-container">
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <button className="modal-button" onClick={handleCloseModal}>
              X
            </button>
          </div>
          <Typography variant="h6" className="modal-header" id="registration-modal-title">
            Registration Form
          </Typography>
          <form onSubmit={handleRegisterSubmit}>
            <div>
              <label htmlFor="fullName">Full Name:</label>
              <input type="text" id="fullName" className="modal-input" value={fullName} onChange={handleFullNameChange} />
              {fullNameError && <p className="error-message">{fullNameError}</p>}
            </div>
            <div>
              <label htmlFor="phoneNumber">Phone Number:</label>
              <input type="tel" id="phoneNumber" className="modal-input" value={phoneNumber} onChange={handlePhoneNumberChange} />
              {phoneNumberError && <p className="error-message">{phoneNumberError}</p>}
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" className="modal-input" value={email} onChange={handleEmailChange} />
              {emailError && <p className="error-message">{emailError}</p>}
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <button type="submit" className="registration-button">
                Register
              </button>
            </div>
          </form>
        </Box>
      </Modal>
    </nav>
  );
};

export default Navbar;
