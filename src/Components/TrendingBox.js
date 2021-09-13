import React from 'react';
import '../App.css';

function TrendingBox() {
    const trends = [{trendCategory:"Web-Technology", trendName:"#CSS", trendTweets: "15.5K Tweets"},
    {trendCategory:"Web-Technology", trendName:"#HTML", trendTweets: "11.4K Tweets"}, 
    {trendCategory:"Artists", trendName:"#ari", trendTweets: "9.1K Tweets"}, 
    {trendCategory:"Trending in the UK", trendName:"#londonBridge", trendTweets: "7.3K Tweets"}, 
    {trendCategory:"Technology", trendName:"#newPhoneLaunch", trendTweets: "5.0K Tweets"}];

    return (
        <div className="trending-box-container">
        <div className="trending-box-header">Trends for You <hr className="trend-line-seperator" /></div>  
            {trends.map((trend) => (
                <div className="trending-box-trend">
                    <p className="trend-category">{trend.trendCategory}</p>
                    <p className="trend-name">{trend.trendName}</p>
                    <p className="trend-tweets">{trend.trendTweets}</p>
                    <hr className="trend-line-seperator" />
                </div>
            ))}
            <div className="trending-box-footer"><a href="#">Show More</a></div>
        </div>
    )

}

export default TrendingBox;