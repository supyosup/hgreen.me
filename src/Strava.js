import React from "react";
import bike from "images/bike.jpg";

const Strava = (props) => {
  return (
    <div className={props.hidden ? "center" : "hidden"}>
      <p>
        Cycling is how I clear my head and stay grounded.<br></br>It's also a
        great way to get out and exercise during quarantine.
      </p>
      <div className="center">
        <img src={bike} height="400" width="400"></img>
      </div>
      <div className="bottomPadding">
        <iframe
          height="454"
          width="300"
          frameborder="0"
          allowtransparency="false"
          scrolling="yes"
          src="https://www.strava.com/athletes/24071212/latest-rides/5481a439b3d2501db301ec4ef29babf6a805da5a"
        ></iframe>
      </div>
    </div>
  );
};

export default Strava;
