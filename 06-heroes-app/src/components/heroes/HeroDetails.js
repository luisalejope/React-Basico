import React from "react";
import "./styles/HeroDetails.css"

export const HeroDetails = ({ hero }) => {
  const { publisher, alter_ego, first_appearance, characters, trailer } = hero;
  return (
    <div className="accordion" id="accordionExample">
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingOne">
          <button
            className="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            About the Character
          </button>
        </h2>
        <div
          id="collapseOne"
          className="accordion-collapse collapse show"
          aria-labelledby="headingOne"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            <p>
              <strong>Alter Ego:</strong> {alter_ego}
            </p>
            <p>
              <strong>Publisher:</strong> {publisher}
            </p>
            <p>
              <strong>First Appearance:</strong> {first_appearance}
            </p>
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingTwo">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseTwo"
            aria-expanded="false"
            aria-controls="collapseTwo"
          >
            Characters
          </button>
        </h2>
        <div
          id="collapseTwo"
          className="accordion-collapse collapse"
          aria-labelledby="headingTwo"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            <p>{characters}</p>
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingThree">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseThree"
            aria-expanded="false"
            aria-controls="collapseThree"
          >
            Last Trailer
          </button>
        </h2>
        <div
          id="collapseThree"
          className="accordion-collapse collapse trailerContainer"
          aria-labelledby="headingThree"
          data-bs-parent="#accordionExample"
        >
          <iframe
            title="hola"
            width="450"
            height="345"
            src={`https://www.youtube.com/embed/${trailer}`}
          ></iframe>
        </div>
      </div>
    </div>
  );
};
