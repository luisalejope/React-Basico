import React, { useMemo } from "react";
import { Redirect, useParams } from "react-router-dom";
import { HeroDetails } from "../../components/heroes/HeroDetails";
import { getHeroesById } from "../../selectors/getHeroById";
import "./styles/HeroScreen.css";
export const HeroScreen = ({ history }) => {
  const { heroeId } = useParams();

  const hero = useMemo(() => getHeroesById(heroeId), [heroeId])
  if (!hero) {
    return <Redirect to="/" />;
  }

  const handleReturn = () => {
    if (history.length <= 2) {
      history.push("/");
    } else {
      history.goBack();
    }
  };

  return (
    <div className="heroContainer animate__animated animate__fadeIn">
      <div className="headerContainer">
        <button className="btn btn-outline-primary" onClick={handleReturn}>
          ← Return
        </button>
        <h1>{hero.superhero}</h1>
      </div>
      <div className="heroGrid">
        <div>
          <img
            src={`../assets/heroes/${heroeId}.jpg`}
            alt={hero.superhero}
            className="img-thumbnail"
          />
        </div>

        <HeroDetails hero={hero} />
      </div>
    </div>
  );
};
