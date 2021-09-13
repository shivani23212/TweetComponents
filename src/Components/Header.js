import React from "react";
import twitterLogo from '../twitter-logo.svg';

function Header() {
    return (
        <div className="header-container">
            <img className="header-twitter-logo" src={twitterLogo} alt="Twitter Logo"/>
            <div className="header-username"><h3>Username Here</h3>
                <div className="subtitle-text">25.6K Tweets </div>
            </div>
            <input type="text" className="fa search-box" placeholder="&#xf002;    Search Twitter" /> 
        </div>
    );
    
}

export default Header;