import React, { useState, useEffect } from "react";
import FeaturesSection from "./FeaturesSection";
import HeroSection from "./HeroSection";
import Step from "./Step";
import Faqs from "./Faqs";
import "./Home.css";
import logo from "../assets/logo.png";
import Plan0 from "../assets/Plan0.jpeg";
import Plan1 from "../assets/Plan1.jpg";
import Plan2 from "../assets/Plan2.jpeg";
import Plan3 from "../assets/Plan3.jpg";
import Plan4 from "../assets/Plan4.jpg";
import Plan5 from "../assets/Plan5.jpg";
import Plan6 from "../assets/Plan6.jpeg";
import Plan7 from "../assets/Plan7.jpeg";
import Plan8 from "../assets/Plan8.jpeg";
import WPlan0 from "../assets/WPlan0.jpeg";
import WPlan1 from "../assets/WPlan1.jpeg";
import WPlan2 from "../assets/WPlan2.webp";
import WPlan3 from "../assets/WPlan3.webp";
import Feedback from "./Feedback";
import Footer from "./Footer";
const Home = () => {
    const [showNavbar, setShowNavbar] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 0) {
            setShowNavbar(true);
        } else {
            setShowNavbar(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return (
        <div>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" integrity="sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
            {/* Navbar */}
            <div className={`navbar ${showNavbar ? "navbar-visible" : ""}`}>
                <div className="navbar-container">
                    <a href="/" className="navbar-logo">
                        <img src={logo} alt="Logo" />
                    </a>
                    <div className="navbar-links">
                        <div className="navbar-dropdown">
                            <a href="#diet-plan" className="navbar-link">
                                Diet Plan <i className="fa-solid fa-caret-down"></i>
                            </a>
                            <div className="dropdown-content">
                                <a href="#Personalized-Diet-Plan">
                                    <img src={Plan0} alt="Personalized Diet Plan" className="dropdown-image" />
                                    <span className="dropdown-title">Personalized Diet Plan</span>
                                </a>
                                <a href="#Weight Loss Diet Plan">
                                    <img src={Plan1} alt="Plan 2" className="dropdown-image" />
                                    <span className="dropdown-title">Weight Loss Diet Plan</span>
                                </a>
                                <a href="#dMuscle Building (Hypertrophy) Diet Plan">
                                    <img src={Plan2} alt="Plan 3" className="dropdown-image" />
                                    <span className="dropdown-title">Muscle Building (Hypertrophy) Diet Plan</span>
                                </a>
                                <a href="#Cutting Diet Plan">
                                    <img src={Plan3} alt="Personalized Diet Plan" className="dropdown-image" />
                                    <span className="dropdown-title">Cutting Diet Plan</span>
                                </a>
                                <a href="#Endurance/Performance Diet Plan">
                                    <img src={Plan4} alt="Plan 2" className="dropdown-image" />
                                    <span className="dropdown-title">Endurance/Performance Diet Plan</span>
                                </a>
                                <a href="#Keto Diet (Ketogenic)">
                                    <img src={Plan5} alt="Plan 3" className="dropdown-image" />
                                    <span className="dropdown-title">Keto Diet (Ketogenic)</span>
                                </a>
                                <a href="#Vegetarian/Vegan Diet Plan">
                                    <img src={Plan6} alt="Personalized Diet Plan" className="dropdown-image" />
                                    <span className="dropdown-title">Vegetarian/Vegan Diet Plan</span>
                                </a>
                                <a href="#Intermittent Fasting Diet Plan">
                                    <img src={Plan7} alt="Plan 2" className="dropdown-image" />
                                    <span className="dropdown-title">Intermittent Fasting Diet Plan</span>
                                </a>
                                <a href="#Paleo Diet Plan">
                                    <img src={Plan8} alt="Plan 3" className="dropdown-image" />
                                    <span className="dropdown-title">Paleo Diet Plan</span>
                                </a>
                            </div>
                        </div>

                        <div className="navbar-dropdown">
                            <a href="#workout-plans" className="navbar-link">
                                Workout Plans <i className="fa-solid fa-caret-down"></i>
                            </a>
                            <div className="dropdown-content">
                                <a href="#Workout Plan">
                                    <img src={WPlan0} alt="Plan A" className="dropdown-image" />
                                    <span className="dropdown-title">Beginner Workout Plan</span>
                                </a>
                                <a href="#Workout Plan">
                                    <img src={WPlan1} alt="Plan B" className="dropdown-image" />
                                    <span className="dropdown-title">Intermediate Workout Plan</span>
                                </a>
                                <a href="#Workout Plan">
                                    <img src={WPlan2} alt="Plan C" className="dropdown-image" />
                                    <span className="dropdown-title"> Advanced Workout Plan</span>
                                </a>
                                <a href="#Workout Plan">
                                    <img src={WPlan3} alt="Plan C" className="dropdown-image" />
                                    <span className="dropdown-title">Personalized Workout Plan</span>
                                </a>
                            </div>
                        </div>
                        <a href="#blog" className="navbar-link">Blog</a>
                        <a href="#faqs" className="navbar-link">FAQs</a>
                        <a href="#contact-us" className="navbar-link">Contact Us</a>
                    </div>
                </div>
            </div>
            <section className="hero-section">
                <HeroSection /> 
            </section>
            <section className="features-section">
                <FeaturesSection />
            </section>
            <section>
                <div className="step-container">
                    <Step />
                </div>
            </section>
            <section>
                <div className="workout-plan-container">
                    <Feedback />
                </div>
            </section>
            <section id="faqs">
                <div className="faqs-container">
                    <Faqs />
                </div>
            </section>
            <section id="contact-us">
                <div className="contact-container">
                    <Footer />
                </div>
            </section>
        </div>
    );
};

export default Home;