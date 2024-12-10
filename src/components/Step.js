import React, { useState, useEffect } from 'react';
import './Step.css';
import Step0 from '../assets/Step0.jpg';
import Step4 from '../assets/Step4.webp';
import Step1 from '../assets/Step1.webp';
import Step2 from '../assets/Step2.jpg';
import Step3 from '../assets/Step3.jpg';

const Step = () => {
    const [currentStep, setCurrentStep] = useState(0);
    const [popupContent, setPopupContent] = useState('');

    const steps = [
        { name: 'Step One : Click on Get Started', description: 'Start by opening the GymFluencer. The intuitive home screen gives you quick access to all features.', image: Step0 },
        { name: 'Step Two : Log Your Exercises', description: 'Easily log your exercises by selecting from a wide range of activities. Track your progress with detailed logs.', image: Step4 },
        { name: 'Step Three : Count Your Reps', description: 'RCount your reps with precision, ensuring every detail is logged. Stay informed on your progress.', image: Step1 },
        { name: 'Step Four : Track Your Progress', description: 'Review your workout stats and progress over time to stay motivated and reach your fitness goals.', image: Step2 },
        { name: 'Step Five : Review Your Progress', description: 'Check your workout summaries and progress over time to stay motivated and achieve your fitness goals.', image: Step3 },
    ];

    useEffect(() => {
        setPopupContent(steps[currentStep].description);
    }, [currentStep]);

    const handleStepClick = (index) => {
        setCurrentStep(index); // Allow clicking any step
        setPopupContent(steps[index].description); // Update popup content based on clicked step
    };

    return (
        <div className="step-container">
            <div className="steps">
                {steps.map((step, index) => (
                    <div
                        key={index}
                        className={`steps__step ${index === currentStep ? 'steps__step--current' : ''} ${index < currentStep ? 'steps__step--done' : ''}`}
                        data-step={index}
                        onClick={() => handleStepClick(index)} // Make step clickable
                    >
                        <div className="steps__step-name">{step.name}</div>
                        {index < currentStep && <div className="steps__connector"></div>}
                        <div className="steps__step-number">{index + 1}</div>
                    </div>
                ))}
            </div>

            {/* Popup Box */}
            {currentStep < steps.length && (
                <div className="popup">
                    <div className="popup-content">
                        <div className="popup-image-container">
                            <img src={steps[currentStep].image} alt={steps[currentStep].name} className="popup-image" />
                        </div>
                        <div className="popup-text-container">
                            <h3>{steps[currentStep].name}</h3>
                            <p>{popupContent}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Step;
