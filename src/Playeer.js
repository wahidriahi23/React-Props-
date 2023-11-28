//Playeer.js
import React from "react";
import Card from "react-bootstrap/Card";

const Playeer = ({ name, team, nationality, jerseyNumber, age, imageURL }) => {
  return (   // Card of playeer 
    <div>
      <Card style={{ margin: "50px", }}> 
        <div className="pic">
          <Card.Img className="pic2" variant="top" src={imageURL} style={{ margin: "70px", width: "250px" }} />
          <Card.Body style={{ borderRadius: "10px", width: "285px", height: "200px", marginLeft: "65px", backgroundColor: "rgb(201, 172, 102)", marginTop: "-60px" }} >
            <Card.Title>{name}</Card.Title>
            <Card.Text>
              Team: {team}<br />
              Nationality: {nationality}<br />
              Jersey Number: {jerseyNumber}<br />
              Age: {age}
            </Card.Text>
          </Card.Body>
        </div>
      </Card>
    </div>
  );
};

Playeer.defaultProps = {
  name: "Player Name",
  team: "Team Name",
  nationality: "Nationality",
  jerseyNumber: 0,
  age: 0,
  imageURL: "https://www.fifplay.com/img/fc/24/players/177003.png"
};

export default Playeer;
