import React, {useState} from 'react';
import '../App.css';
import twitterLogo from '../twitter-logo.svg';

function Tweet(props) {

    const [heartClicked, setHeartClick] = useState(false);

    const heartClick = () => {
        setHeartClick(!heartClicked);
    }

    return (
            <div className="tweetBox">
                <div className="header">
                    <div className="profile-pic"></div>
                    <div className="user-info">
                        <h1 className="username">{props.name}</h1>
                        <h2 className="handle">@{props.name}</h2>
                    </div>
                    <img className="twitter-logo" src={twitterLogo} alt="twitter logo" />
                </div>
                <p className="message">{props.message}
                </p>
                <div className="date-time">
                    <p className="date-time-text">18:35 PM &middot; August 29, 2021</p>
                </div>
                <hr className="tweet-line-seperator" />
                <div className="tweet-info">
                    <i onClick = {heartClick} id={heartClicked ? "clickable-heart" : " "} className={heartClicked ? "fa fa-heart" : "fa fa-heart-o" }></i>
                    <p>Likes</p>
                    <i className="fa fa-comment-o"></i>
                    <p>Retweets</p>
                    <i className="fa fa-link fa-flip-vertical"></i>
                    <p>Copy link to Tweet</p>
                </div>
            </div>
    )
}

export default Tweet;







