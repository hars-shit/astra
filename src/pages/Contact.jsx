import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './Contact.css'; 

const Contact = () => {
  const darkMode = useSelector((state) => state.theme.darkMode);  
  const [isModalOpen, setIsModalOpen] = useState(false); 
  const [submittedData, setSubmittedData] = useState({});

  // Yup validation schema
  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email format').required('Email is required'),
    address: Yup.string().required('Address is required'),
    bio: Yup.string().required('Bio is required'),
  });

  const handleSubmit = (values) => {
    setSubmittedData(values);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false); 
  };

  return (
    <div className={`contact-container ${darkMode ? "dark" : ""}`}>
      <div className="contact-image">
        <img src="https://imgs.search.brave.com/Wb21eZN4_scm25M7ZnO-XeJVjjSRLEcWOiUJE6x5dxM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9iZXN0/d3JpdGluZy5jb20v/d3AtY29udGVudC91/cGxvYWRzLzIwMjQv/MDEvZnJlZS1waG90/b3MtZm9yLWJsb2dz/LmpwZw" alt="Contact Us" />
      </div>
      <div className="contact-form">
        <h2>Contact Us</h2>
        <Formik
          initialValues={{
            name: '',
            email: '',
            address: '',
            bio: '',
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <Field type="text" id="name" name="name" required />
                <ErrorMessage name="name" component="div" className="error" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <Field type="email" id="email" name="email" required />
                <ErrorMessage name="email" component="div" className="error" />
              </div>
              <div className="form-group">
                <label htmlFor="address">Address:</label>
                <Field type="text" id="address" name="address" required />
                <ErrorMessage name="address" component="div" className="error" />
              </div>
              <div className="form-group">
                <label htmlFor="bio">Bio:</label>
                <Field as="textarea" id="bio" name="bio" required />
                <ErrorMessage name="bio" component="div" className="error" />
              </div>
              <button type="submit" disabled={isSubmitting}>Send Data</button>
            </Form>
          )}
        </Formik>
      </div>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h2>Submitted Data</h2>
            <p><strong>Name:</strong> {submittedData.name}</p>
            <p><strong>Email:</strong> {submittedData.email}</p>
            <p><strong>Address:</strong> {submittedData.address}</p>
            <p><strong>Bio:</strong> {submittedData.bio}</p>
            <button onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
