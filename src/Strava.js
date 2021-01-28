import React from "react";

const Strava = (props) => {
  return (
    <div className={props.hidden ? "center" : "aboutMeHidden"}>
      <div className="bottomPadding">
        <iframe
          height="454"
          width="300"
          frameborder="0"
          allowtransparency="false"
          scrolling="no"
          src="https://www.strava.com/athletes/24071212/latest-rides/5481a439b3d2501db301ec4ef29babf6a805da5a"
        ></iframe>
      </div>
    </div>
  );
};

export default Strava;
