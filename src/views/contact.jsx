import React, { useRef, useState } from 'react';
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';

export const ContactUs = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  console.log('This form will direct send me an email. Upon receiving, i will get back right to you!');

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.sendForm('service_75exmfy', 'template_slkka6p', form.current, 'bQIU52wz8bE7SMb3-')
      .then((result) => {
          console.log(result.text);
          setLoading(false);
          alert('Thank you for your message. I will get back to you as soon as possible.');
          form.current.reset();
      }, (error) => {
          setLoading(false);
          alert('Something went wrong');
          console.log(error.text);
      });
  };

  return (
    <div className={`duration-200 h-[110vh] -translate-y-7 flex justify-center items-center ${isFocused ? 'backdrop-blur-md' : ''}`}>
      <motion.div
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className="bg-gray-900 p-6 rounded-md border-2 border-yellow-400 focus-within:border-4 transform  w-4/5 md:w-2/3 lg:w-1/2 xl:w-1/3 2xl:w-1/4 transition-all -mt-36"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100 }}
      >
        <form ref={form} onSubmit={sendEmail} className="text-white">
          <label className="block mb-2 font-bold text-lg">Name</label>
          <input type="text" name="user_name" className="bg-gray-800 p-2 rounded w-full mb-4" />

          <label className="block mb-2 font-bold text-lg">Email</label>
          <input type="email" name="user_email" className="bg-gray-800 p-2 rounded w-full mb-4" />

          <label className="block mb-2 font-bold text-lg">Message</label>
          <textarea name="message" className="bg-gray-800 p-2 rounded w-full mb-4 h-32"></textarea>

          <button onClick={sendEmail} className="bg-red-700 py-2 px-4 rounded text-white hover:bg-red-600 transition duration-300 ease-in-out">
            {loading ? 'Sending...' : 'Send'}
          </button>
        </form>
      </motion.div>
    </div>
  );
};
