import React from 'react';
import '../App.css';

function SignUpBox() {
    return (
        <div className="signup-container">
            <p className="signup-header">New to Twitter?</p>
            <p className="signup-subheading">Sign up now to get your own personalized timeline!</p>
            <div className="signup-options">
                <button className="google signup-button">Sign up with Google</button>
                <button className="apple signup-button">Sign up with Apple</button>
                <button className="no-image signup-button">Sign up with phone or email</button>
            </div>
            <div className="signup-footer">
                By signing up, you agree to the <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>, including <a href="#">Cookie Use</a>.</div>
        </div>
    )
}

export default SignUpBox;