// src/PlayersList.js 
import React from "react";
import Playeer from "./Playeer";
import playersData from "./players"; // Import player data
// playerslist component 
const PlayersList = () => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {playersData.map((playeer, index) => (
        <Playeer key={index} {...playeer} />
      ))}
    </div>
  );
};

export default PlayersList;
