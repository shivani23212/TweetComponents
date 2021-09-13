import React from "react";
import Tweet from './Components/tweet';
import Header from './Components/Header';
import TrendingBox from "./Components/TrendingBox";
import SignUpBox from "./Components/SignUpBox";
import Counter from "./Counter";

function App() {
  const tweets = [{name:"user1", message:"Bonbon dragée chocolate pie tart shortbread cake sweet roll. Pie sweet apple pie cupcake powder gummi bears."}, 
    {name:"user2", message:"Shortbread brownie tart wafer donut tootsie roll croissant bear claw. Toffee chocolate sweet macaroon wafer."}, 
    {name:"user3", message:"Brownie chocolate toffee candy candy. Cheesecake tart jelly beans chocolate jujubes caramels tart."}, 
    {name:"user4", message:"Brownie chocolate toffee candy candy. Cheesecake tart jelly beans chocolate jujubes caramels tart."}, 
    {name:"user4", message:"Brownie chocolate toffee candy candy. Cheesecake tart jelly beans chocolate jujubes caramels tart."}];


  return (
    <div className="app">
      <Header/>
      <div className="main-container">
        <div className="blank-space"></div>
        <div className="tweets-container">
          {tweets.map((tweet) => (
            <Tweet name={tweet.name} message={tweet.message}/>
          ))}
        </div>
        <div className="trending-box-section">
          <SignUpBox/>
          <TrendingBox/>
        </div>
      </div>
    </div>
  );
}

export default App;