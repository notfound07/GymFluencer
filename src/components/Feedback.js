import React from 'react';
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

  return (
    <div className="feedback-container">
      <h2 className="feedback-title">What Users Say</h2>
      <div className="feedback-row">
        {feedbackData.map((feedback, index) => (
          <div key={index} className="feedback-box">
            <p className="feedback-user">{feedback.user}</p>
            <p className="feedback-comment">"{feedback.comment}"</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feedback;
