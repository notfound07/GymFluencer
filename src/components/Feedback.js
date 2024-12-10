import React, { useEffect } from 'react';
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS CSS
import './Feedback.css';

const Feedback = () => {
  const feedbackData = [
    {
      user: "John Doe",
      comment: "GymFluencer has transformed my fitness journey. The app is easy to use and tracks my progress perfectly!"
    },
    {
      user: "Jane Smith",
      comment: "As a beginner, I found this app incredibly helpful. It guides me through workouts and tracks my calories effectively."
    },
    {
      user: "Michael Johnson",
      comment: "I love the workout logging feature. It keeps me motivated and helps me stay on track with my fitness goals."
    },
  ];

  // Initialize AOS when component mounts
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of animation
      easing: "ease-in-out", // Easing function for smoothness
      once: true, // Ensures animation happens only once
    });
  }, []);

  return (
    <div className="feedback-container">
      <h2 className="feedback-title">What Users Say</h2>
      <div className="feedback-row">
        {feedbackData.map((feedback, index) => (
          <div
            key={index}
            className="feedback-box"
            data-aos="fade-up" // Apply AOS animation
            data-aos-delay={`${index * 100}`} // Add delay based on index
          >
            <p className="feedback-user">{feedback.user}</p>
            <p className="feedback-comment">"{feedback.comment}"</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feedback;
