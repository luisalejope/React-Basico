import React from "react";
import "./styles/HeroCard.css";
import { Link } from "react-router-dom";

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
            <div className="dataContainer">
              <h5>{superhero}</h5>
              <p>{alter_ego}</p>
              {alter_ego !== characters && <p>{characters}</p>}
              <p>
                <small>{first_appearance}</small>
              </p>
              <Link to={`./hero/${id}`}>Details...</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
