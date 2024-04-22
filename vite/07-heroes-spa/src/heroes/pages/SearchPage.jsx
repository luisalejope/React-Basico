import queryString from "query-string";

import { useLocation, useNavigate } from "react-router-dom";
import { HeroCard } from "../components";
import { getHeroesByName } from "../helpers";
import { useForm } from "../hooks";

export const SearchPage = () => {

  const location = useLocation();
  const navigate = useNavigate();
  const { q = '' } = queryString.parse(location.search)
  const { searchText, onInputChange } = useForm({
    searchText: q
  });
  const heroes = getHeroesByName(q)

  const onSearchHero = (e) => {
    e.preventDefault();

    navigate(`?q=${searchText.toLowerCase()}`);
  }

  return (
    <>
      <h1>Search</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <h4>Searching</h4>
          <hr />

          <form onSubmit={onSearchHero}>
            <input type="text" placeholder="Search a hero" className="form-control" name="searchText" autoComplete="off" value={searchText} onChange={onInputChange} />
            <button className="btn btn-outline-primary mt-2">Search</button>
          </form>

        </div>
        <div className="col-7">
          <h4>Results</h4>
          <hr />


          <div className="alert alert-primary" style={{ display: q === '' ? 'block' : 'none' }}>
            Search a hero
          </div>

          <div className="alert alert-danger" style={{ display: heroes?.length === 0 ? 'block' : 'none' }}>
            No Hero with <b>{q}</b>
          </div>

          {
            heroes?.map(hero => <HeroCard key={hero.id}{...hero} />)
          }

        </div>
      </div>
    </>
  )
}
