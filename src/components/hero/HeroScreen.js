import React, { useMemo } from 'react';
import { Redirect } from 'react-router';
import { getHeroById } from '../../selectors/getHeroById';

const HeroScreen = ({ match, history }) => {
  const { heroeId } = match.params;
  const hero = useMemo(() => getHeroById(heroeId), [heroeId]);
  if(!hero) return <Redirect to="/" />

  const {
    superhero, 
    alter_ego, 
    publisher,
    first_appearance, 
    characters
  } = hero;

  const handleReturn = () => {
    history.goBack();
  }

  return (
    <div className="row mt-5">
      <div className="col-4">
        <img src={`/assets/heroes/${heroeId}.jpg`} alt={superhero} className="img-thumbnail animate__animated animate__fadeInLeft" />
      </div>
      <div className="col-8">
        <h3>{superhero}</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item"><b>Alter Ego: {alter_ego}</b></li>
          <li className="list-group-item"><b>Publisher: {publisher}</b></li>
          <li className="list-group-item"><b>First Appearance: {first_appearance}</b></li>
        </ul>
        <h5>Characters</h5>
        <p>{characters}</p>
        <button
          className="btn btn-primary"
          onClick={handleReturn}
        >
          Return
        </button>
      </div>
    </div>
  )
}

export default HeroScreen
