import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./HeroSection.css";
import herobg from "../assets/herobg.jpg";

const HeroSection = () => {
    
    return (
        <section className="hero-section">
            
            {/* Hero Content */}
            <div className="hero-bg">
                <img className="hero-image" src={herobg} alt="Hero Background" />
            </div>
            <div className="hero-content">
                <motion.h1
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="hero-title"
                >
                    Track Your Fitness Journey With GymFluencer
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="hero-subtitle"
                >
                    Discover the ultimate fitness companion with GymFluencer. Effortlessly log your workouts, count reps, and track calories burned. Stay motivated and achieve your goals with our user-friendly interface.
                </motion.p>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                >
                    <div className="hero-buttons">
                        <a href="#Get-Started" className="hero-button1">
                            Get Started
                        </a>
                        <Link to="/join" className="hero-button"> {/* Use Link to navigate */}
                            Join Now
                        </Link>
                    </div>
                </motion.div>
            </div>
            <div className="scroll-arrow">
                <span>&#8595;</span>
            </div>
        </section>
    );
};

export default HeroSection;
