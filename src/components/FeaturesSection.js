import React, { useRef } from "react";
import { motion } from "framer-motion";
import "./FeaturesSection.css";
import Features1 from "../assets/Features1.jpg";
import Features2 from "../assets/Features2.jpg";
import Features3 from "../assets/Features3.jpg";
import Features4 from "../assets/Features4.jpg";
import Features5 from "../assets/Features5.png";

const FeaturesSection = () => {
  const featuresGridRef = useRef(null);

  // Function to scroll left
  const scrollLeft = () => {
    if (featuresGridRef.current) {
      featuresGridRef.current.scrollBy({
        left: -300, // Adjust scroll distance here
        behavior: "smooth",
      });
    }
  };

  // Function to scroll right
  const scrollRight = () => {
    if (featuresGridRef.current) {
      featuresGridRef.current.scrollBy({
        left: 300, // Adjust scroll distance here
        behavior: "smooth",
      });
    }
  };

  const features = [
    {
      title: "Effortless Workout Logging",
      description:
        "Easily log your workouts and monitor your progress over time with our intuitive logging feature. Stay organized and track your fitness journey with precision.",
      icon: Features1, // Image path for the icon
    },
    {
      title: "Accurate Rep Counting",
      description:
        "Count your reps accurately with our app, ensuring each workout is tracked effectively. Perfect for maintaining consistency and improving your performance.",
      icon: Features2, // Image path for the icon
    },
    {
      title: "Calorie Calculation Made Easy",
      description:
        "Calculate calories burned during your workouts to help manage your fitness goals. Our app provides precise data to keep you informed and motivated.",
      icon: Features3, // Image path for the icon
    },
    {
      title: "Personalized Workout Plan",
      description:
        "An AI-powered personalized workout plan adapts exercises to your fitness level, goals, and progress, helping you stay motivated and achieve results faster.",
      icon: Features4, // Image path for the icon
    },
    {
      title: "Personalized Diet Plan",
      description:
        "An AI diet plan customizes meals to your health goals, preferences, and lifestyle, offering tailored, nutritious suggestions to support optimal wellness.",
      icon: Features5, // Image path for the icon
    },
  ];

  return (
    <section className="features-section">
      <div className="features-wrapper">
        <button className="scroll-btn left" onClick={scrollLeft}>
          &#8592;
        </button>
        <div className="container">
          <h2 className="features-title">Discover Our App's Key Features</h2>
          <div ref={featuresGridRef} className="features-grid">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="feature-card"
              >
                <div className="feature-icon">
                  <motion.img
                    className="feature-image"
                    src={feature.icon}
                    alt={feature.title}
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  />
                </div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
        <button className="scroll-btn right" onClick={scrollRight}>
          &#8594;
        </button>
      </div>
    </section>
  );
};

export default FeaturesSection;
