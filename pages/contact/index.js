import React, { useState } from "react";
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';
import { BsArrowRight } from 'react-icons/bs';
import emailjs from 'emailjs-com';
import DOMPurify from 'dompurify';

const Contact = () => {
  const initialState = {
    name: '',
    email: '',
    subject: '',
    message: '',
  };

  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const validateErrors = validateForm();
    if (Object.keys(validateErrors).length > 0) {
      setErrors(validateErrors);
      return;
    }

    setIsLoading(true);

    const { name, email, subject, message } = formData;
    const sanitizedData = {
      name: "Name: " + DOMPurify.sanitize(name),
      email: "Email: " + DOMPurify.sanitize(email),
      subject: "Subject: " + DOMPurify.sanitize(subject),
      message: "Message: " + DOMPurify.sanitize(message),
    };

    const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const userID = process.env.REACT_APP_EMAILJS_USER_ID;

    emailjs
      .send("service_wts6ule", "template_iujqiig", sanitizedData, "IvFttkYpDH3DCsG0R")
      .then((response) => {
        console.log('Email sent successfully', response);
        setFormData(initialState);
        setErrors({});
        setIsSent(true);
        setShowSuccessMessage(true); // Show success message
        setTimeout(() => setShowSuccessMessage(false), 5000); // Hide after 5 seconds
      })
      .catch((error) => {
        console.error('Error sending email:', error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const validateForm = () => {
    const { name, email, subject, message } = formData;
    const errors = {};

    if (!name.trim()) {
      errors.name = "Name is required";
    }

    if (!email.trim()) {
      errors.email = "Email is required";
    } else if (!isValidEmail(email)) {
      errors.email = "Invalid email format";
    }

    if (!subject.trim()) {
      errors.subject = "Subject is required";
    }

    if (!message.trim()) {
      errors.message = "Message is required";
    }

    return errors;
  };

  const isValidEmail = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
  };

  return (
    <div className='h-full bg-primary/30'>
      <div className='container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full'>
        <div className='flex flex-col w-full max-w-[700px]'>
          <motion.h2
            variants={fadeIn('up', 0.2)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='h2 text-center mb-12'>
            Lets <span className='text-accent'>Connect.</span>
          </motion.h2>
          <motion.form
            onSubmit={handleSubmit}
            variants={fadeIn('down', 0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='flex-1 flex flex-col gap-6 w-full mx-auto'>
            <div className='flex gap-x-6 w-full '>
              <input
                type='text'
                name='name'
                placeholder='Name'
                className={`input ${errors.name ? 'error' : ''}`}
                value={formData.name}
                onChange={handleChange}
                disabled={isLoading}
                autoCapitalize='none'
              />
              {errors.name && (
                <span className='error-message'>{errors.name}</span>
              )}
            </div>
            <div className='flex gap-x-6 w-full'>
              <input
                type='email'
                name='email'
                placeholder='Email'
                className={`input ${errors.email ? 'error' : ''}`}
                value={formData.email}
                onChange={handleChange}
                disabled={isLoading}
                autoCapitalize='none'
              />
              {errors.email && (
                <span className='error-message'>{errors.email}</span>
              )}
            </div>
            <input
              type='text'
              name='subject'
              placeholder='Subject'
              className={`input ${errors.subject ? 'error' : ''}`}
              value={formData.subject}
              onChange={handleChange}
              disabled={isLoading}
              autoCapitalize='none'
            />
            {errors.subject && (
              <span className='error-message'>{errors.subject}</span>
            )}
            <textarea
              name='message'
              placeholder='Message'
              className={`textarea ${errors.message ? 'error' : ''}`}
              value={formData.message}
              onChange={handleChange}
              disabled={isLoading}
              autoCapitalize='none'></textarea>
            {errors.message && (
              <span className='error-message'>{errors.message}</span>
            )}
            <button
              type='submit'
              className='btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group'
              disabled={isLoading}>
              <span className='group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500'>
                {isLoading ? 'SENDING...' : 'Connect'}
              </span>
              <BsArrowRight className='-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]' />
            </button>
          </motion.form>
          {showSuccessMessage && (
            <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-lg border border-white/50 text-white py-3 px-6 shadow-lg z-50 bg-gradient-to-l from-transparent via-[#4a22bd] ">
              <p className="mx-auto text-center">SUCCESS!</p>
              <p className="mx-auto text-center">Your message has been successfully sent!</p>
              <button onClick={() => setShowSuccessMessage(false)} className="absolute top-0 right-3 mt-1 mr-2 text-white hover:text-gray-300">
                &times;
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
