import React from "react";
import "./styles/HeroCard.css";

export const HeroCard = ({
  id,
  superhero,
  publisher,
  alter_ego,
  first_appearance,
  characters,
}) => {
  return (
    <>
      {/* <div className="heroCard">
        <div className="rowCard">
          <img
            src={`./assets/heroes/${id}.jpg`}
            className="card-img"
            alt={superhero}
          />
        </div>
        <div className="rowCard">
          <h5>{superhero}</h5>
          <p>{alter_ego}</p>
        </div>
      </div> */}
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img
              src={`./assets/heroes/${id}.jpg`}
              className="imgCard"
              alt="Avatar"
            />
          </div>
          <div className="flip-card-back">
            <h5>{superhero}</h5>
            <p>{alter_ego}</p>
          </div>
        </div>
      </div>
    </>
  );
};
