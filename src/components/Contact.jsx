import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import React, { useRef, useState } from "react";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setForm({
      ...form,
      [id]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        'service_cault2f',
        'template_8zuhrkg',
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
          to_name: "Akansha",
          to_email: "akansha14092002@gmail.com",
        },
        'p0Uike02537l7kuqF'
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");
          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div className="border-b border-neutral-900 pb-20">
      <motion.h1 
       whileInView={{ opacity: 1, y: 0 }}
       initial={{ opacity: 0, y: -100 }}
       transition={{ duration: 0.5 }}
       className="my-10 text-center text-4xl">Get in Touch</motion.h1>
      <div className="flex justify-center">
        <motion.div 
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.5 }}
          className="bg-[#1c1c24] shadow-lg rounded-lg p-8 w-full max-w-md"
        >
          <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col">
            <div className="mb-6">
              <label htmlFor="name" className="text-white block text-sm mb-2 font-medium">
                Your name
              </label>
              <input
                type="text"
                id="name"
                value={form.name}
                onChange={handleChange}
                required
                className="bg-[#2a2a35] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5 focus:border-purple-500 focus:outline-none"
                placeholder="John Doe"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="text-white block text-sm mb-2 font-medium">
                Your email
              </label>
              <input
                type="email"
                id="email"
                value={form.email}
                onChange={handleChange}
                required
                className="bg-[#2a2a35] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5 focus:border-purple-500 focus:outline-none"
                placeholder="example@gmail.com"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="text-white block text-sm mb-2 font-medium">
                Message
              </label>
              <textarea
                id="message"
                value={form.message}
                onChange={handleChange}
                required
                className="bg-[#2a2a35] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5 focus:border-purple-500 focus:outline-none"
                placeholder="Let's talk about..."
              />
            </div>
            <button
              type="submit"
              className="bg-gradient-to-r from-purple-700 to-purple-900 hover:from-purple-600 hover:to-purple-800 text-white font-medium py-2.5 px-5 rounded-lg transition duration-200"
              aria-live="polite"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}

export default Contact;






