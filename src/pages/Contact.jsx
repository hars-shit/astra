import React, { useState } from 'react';
import './Contact.css'; 
import { useSelector } from 'react-redux';

const Contact = () => {
  const darkMode = useSelector((state) => state.theme.darkMode);  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    bio: ''
  });
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsModalOpen(true); // Open the modal on form submission
  };

  const closeModal = () => {
    setIsModalOpen(false); // Close the modal
  };

  return (
    <div className={`contact-container ${darkMode ? "dark":""}`}>
      <div className="contact-image">
        <img src="https://imgs.search.brave.com/Wb21eZN4_scm25M7ZnO-XeJVjjSRLEcWOiUJE6x5dxM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9iZXN0/d3JpdGluZy5jb20v/d3AtY29udGVudC91/cGxvYWRzLzIwMjQv/MDEvZnJlZS1waG90/b3MtZm9yLWJsb2dz/LmpwZw" alt="Contact Us" />
      </div>
      <div className="contact-form">
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="address">Address:</label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="bio">Bio:</label>
            <textarea
              id="bio"
              name="bio"
              value={formData.bio}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit">Send Data</button>
        </form>
      </div>

      {/* Custom Modal for displaying form data */}
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h2>Submitted Data</h2>
            <p><strong>Name:</strong> {formData.name}</p>
            <p><strong>Email:</strong> {formData.email}</p>
            <p><strong>Address:</strong> {formData.address}</p>
            <p><strong>Bio:</strong> {formData.bio}</p>
            <button onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
