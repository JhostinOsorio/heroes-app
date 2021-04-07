import React from 'react'
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher'

const HeroList = ({ publisher }) => {

  const heroes = getHeroesByPublisher(publisher);

  return (
    <ul>
      {heroes.map(({id, superhero})=><li key={id}>{superhero}</li>)}
    </ul>
  )
}

export default HeroList
