import React, { useState, useEffect } from 'react';
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS CSS
import './Faqs.css';

const Faqs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How do I log my workouts?",
      answer: "You can easily log your workouts by selecting the exercise, entering the duration, and tracking your reps."
    },
    {
      question: "Can I track my calories burned?",
      answer: "Yes, you can track calories burned through the application integrated tracking features."
    },
    {
      question: "Is this application suitable for beginners?",
      answer: "Absolutely! GymFluencer is designed to be user-friendly and suitable for all fitness levels."
    },
    {
      question: "What features does the application offer?",
      answer: "The app offers workout logging, rep counting, calorie tracking, and progress reviews."
    },
    {
      question: "How can I reset my password?",
      answer: "You can reset your password by going to the login screen and selecting 'Forgot Password.'"
    }
  ];

  const toggleAnswer = (index) => {
    if (openIndex === index) {
      setOpenIndex(null);  // Close the answer if it's already open
    } else {
      setOpenIndex(index);  // Open the clicked answer
    }
  };

  useEffect(() => {
    AOS.init({ duration: 1000, easing: 'ease-in-out', once: true });
  }, []);

  return (
    <div className="faqs-container">
      <h1 className='faqs-heading'>FAQs</h1>
      <h2 className='faqs-title'>Find answers to your questions about the GymFluencer application, designed to enhance your fitness journey.</h2>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="faq-item"
            data-aos="fade-up" // AOS fade-up animation
            data-aos-delay={`${index * 100}`} // Stagger delay for each item
          >
            <div className="faq-question" onClick={() => toggleAnswer(index)}>
              {faq.question}
              <i className={`faq-icon ${openIndex === index ? 'fa-caret-up' : 'fa-caret-down'}`}></i>
            </div>
            {openIndex === index && <p className="faq-answer">{faq.answer}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Faqs;
