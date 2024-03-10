import React, { useState } from "react";

function Contact() {
  const [email, setEmail] = useState("");
  const [question, setQuestion] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleQuestionChange = (event) => {
    setQuestion(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Prepare the data to send to the backend
    const formData = {
      email: email,
      question: question,
    };

    try {
      // Make a POST request to your backend endpoint
      const response = await fetch("your-backend-endpoint", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      // Check if the request was successful
      if (response.ok) {
        alert("Form submitted successfully!"); // Success alert
        // Reset the form fields after successful submission
        setEmail("");
        setQuestion("");
      } else {
        // Handle errors here
        alert("Error submitting the form. Please try again.");
      }
    } catch (error) {
      // Handle network or other errors
      console.error("Error:", error);
      alert("An error occurred. Please try again later.");
    }
  };

  return (
    <div id="contact" className="contact-page-wrapper">
      <h1 className="primary-heading">Have a Question in Mind?</h1>
      <h1 className="primary-heading">Let Us Help You</h1>
      <form onSubmit={handleSubmit} className="contact-form-container">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
        />
        <textarea
          placeholder="Your Question"
          value={question}
          onChange={handleQuestionChange}
        ></textarea>
        <button type="submit" className="secondary-button">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contact;
