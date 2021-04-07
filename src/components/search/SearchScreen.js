import React, { useMemo } from 'react';
import useForm from '../../hooks/useForm';
import HeroCard from '../hero/HeroCard';
import { useLocation } from 'react-router-dom';
import { getHeroByName } from '../../selectors/getHeroByName';

const SearchScreen = ({ history }) => {

  const search = useLocation().search;
  const searchName = new URLSearchParams(search).get('hero');
  const [values, handleInputChange] = useForm({
    heroename: searchName ? searchName : ''
  })
  const { heroename } = values
  const heroesFilter = useMemo(()=>{
    return getHeroByName(searchName);
  }, [searchName])

  const handleSearch = (e) => {
    e.preventDefault();
    if (!heroename) {
      history.push('/search')
    }else {
      history.push(`?hero=${heroename}`)
    }
  }

  return (
    <div className="animate__animated animate__fadeIn">
      <h1>SearchScreen</h1>
      <hr />

      <div className="row">
        <div className="col-5">
          <h4>Search Form</h4>
          <hr />

          <form onSubmit={handleSearch}>
            <input 
              autoComplete="off"
              name="heroename"
              className="form-control mb-3"
              type="text" 
              placeholder="Find your hero"
              value={heroename}
              onChange={e=>handleInputChange(e)}
            />
            <button
              type="submit"
              className="btn btn-block btn-primary"
            >
              Search
            </button>
          </form>
        </div>
        <div className="col-7">
          <h4>Results</h4>
          <hr />

          {heroesFilter.map(heroe => 
            <HeroCard
              key={heroe.id}
              {...heroe}
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default SearchScreen
