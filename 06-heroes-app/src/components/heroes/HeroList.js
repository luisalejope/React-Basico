import React from "react";
import { getHeroesByPublisher } from "../../selectors/getHeroesByPublished";
import { HeroCard } from "./HeroCard";
import './styles/HeroList.css'
export const HeroList = ({ publisher }) => {
  const heroes = getHeroesByPublisher(publisher);
  return (
    <div className="gridCards">
      {heroes.map((hero) => {
        return <HeroCard key={hero.id} {...hero} />;
      })}
    </div>
  );
};
