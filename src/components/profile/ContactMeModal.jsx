import React, { useState } from "react";
import styled from 'styled-components'

const ContactMeModal = ({ onSubmit, isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({ name: "", email: "", message: "" });
  };

  if (!isOpen) {
    return null;
  }

  return (
    <ContactMeModalCSS className="modal-overlay">
      <div className="modal">
        <button className="close-btn" onClick={onClose}>
          &times;
        </button>
        <h2>Contact Me</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Message:
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </label>
          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>
      </div>
    </ContactMeModalCSS>
  );
};

export default ContactMeModal;

const ContactMeModalCSS = styled.div `

    .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5); /* Slightly darkened background */
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999; /* Ensures the overlay is above all items on the screen */
    }

    .modal {
    background: #fff;
    border-radius: 8px;
    padding: 20px;
    width: 400px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    position: relative;
    z-index: 10000; /* Ensures the modal stays above the overlay */
    }

    .close-btn {
    position: absolute;
    top: 10px;
    right: 10px;
    background: none;
    border: none;
    font-size: 20px;
    cursor: pointer;
    z-index: 10001; /* Ensures the close button is clickable */
    }

    h2 {
    margin-top: 0;
    font-size: 1.5em;
    }

    form {
    display: flex;
    flex-direction: column;
    }

    label {
    margin-bottom: 10px;
    font-weight: bold;
    }

    input,
    textarea {
    margin-top: 5px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 14px;
    width: 100%;
    resize: none; /* Prevents resizing of the textarea */
    }

    input:focus,
    textarea:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 4px rgba(0, 123, 255, 0.5); /* Adds a subtle glow when focused */
    }

    .submit-btn {
    background: #007bff;
    color: white;
    padding: 10px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 14px;
    margin-top: 10px;
    }

    .submit-btn:hover {
    background: #0056b3;
    }



`