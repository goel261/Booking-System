import React from "react";
import "./Scrolling.css";
import scrollFirst from './Media/mainPage.jpg'

function Scrolling() {
  return (
    <div className="scrolling">
      
      <div className="scrolling__firstPage">
        <div className="scrollFirstImage">
        {/* <img src={scrollFirst} alt="main page image" /> */}
        </div>
      </div> 

      <div className="scrolling__secondPage">
        <h2>
          Best place to hold any event!
        </h2>       
      </div>

      <div className="scrolling__thirdPage">
      <h2>
          There are more than 24 different kinds of halls for different kinds of events. Contact Now for Bookings!
        </h2>
      </div>

      <div className="scrolling__fourthPage">
        <h2>
        Text3
        </h2>
      </div>
    </div>
  );
}

export default Scrolling;
