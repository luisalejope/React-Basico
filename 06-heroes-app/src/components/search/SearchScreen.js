import React, { useMemo } from "react";
import queryString from "query-string";
import { useLocation } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { HeroCard } from "../heroes/HeroCard";
import { getHeroesByName } from "../../selectors/getHeroesByName";
import "./styles/SearchScreen.css";
export const SearchScreen = ({ history }) => {
  const location = useLocation();
  const { q = "" } = queryString.parse(location.search);

  const [values, handleInputChange ] = useForm({
    hero: q,
  });

  const { hero } = values;

  const heroesFiltered = useMemo(() => getHeroesByName(q), [q]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (hero) {
      history.push(`?q=${hero}`);
    }
  };

  return (
    <div>
      <form onSubmit={handleSearch} className="searchContainer">
        <input
          type="text"
          name="hero"
          className="form-control"
          placeholder="Find your hero"
          autoComplete="off"
          value={hero}
          onChange={handleInputChange}
        />
        <button type="submit" className="btn m-1 btn-block btn-outline-primary">
          Search...
        </button>
      </form>
      <div className="row">
        <div className="layoutSearch">
          <hr />
          {q === "" && <div className="alert alert-info">Search a Hero</div>}
          {q !== "" && heroesFiltered.length === 0 && (
            <div className="alert alert-danger">The hero {q} doesn't exist</div>
          )}
          {q !== "" && heroesFiltered.length > 0 && (
            <div className="gridCards animate__animated animate__fadeIn">
              {heroesFiltered &&
                heroesFiltered.map((h) => <HeroCard key={h.id} {...h} />)}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
