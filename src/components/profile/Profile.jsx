import React, { useState } from "react";
import ContactMeModal from "./ContactMeModal.jsx";

const Profile = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleFormSubmit = (formData) => {
    console.log("Form submitted:", formData);
    setIsModalOpen(false); // Close the modal after submission
  };

  return (
    <div>
      <div> Portfolio </div>

      <button onClick={handleOpenModal}>Contact Me</button>
      <ContactMeModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSubmit={handleFormSubmit}
      />
    </div>
  );
};

export default Profile;