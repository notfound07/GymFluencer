import React, { useState } from "react";
import "./Join.css"; // Assuming you have a CSS file for styling

const Join = () => {
    const [isSignup, setIsSignup] = useState(true);

    const toggleForm = () => {
        setIsSignup(!isSignup);
    };

    const handleSignup = (e) => {
        e.preventDefault();
        // Add signup logic here (e.g., send data to API)
        console.log("Signup form submitted");
    };

    const handleLogin = (e) => {
        e.preventDefault();
        // Add login logic here (e.g., validate credentials)
        console.log("Login form submitted");
    };

    return (
        <div className="join">
            <div className="main">
                <input
                    type="checkbox"
                    id="chk"
                    aria-hidden="true"
                    checked={!isSignup}
                    onChange={toggleForm}
                />
                <div className={`signup ${isSignup ? "active" : ""}`}>
                    <form onSubmit={handleSignup}>
                        <label htmlFor="chk" aria-hidden="true">Sign up</label>
                        <input type="text" name="username" placeholder="User Name" required />
                        <input type="email" name="email" placeholder="Email" required />
                        <input type="tel" name="phone" placeholder="Phone Number" required />
                        <input type="password" name="password" placeholder="Password" required />
                        <button type="submit">Sign up</button>
                    </form>
                </div>

                <div className={`login ${!isSignup ? "active" : ""}`}>
                    <form onSubmit={handleLogin}>
                        <label htmlFor="chk" aria-hidden="true">Login</label>
                        <input type="email" name="email" placeholder="Email" required />
                        <input type="password" name="password" placeholder="Password" required />
                        <button type="submit">Login</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Join;
