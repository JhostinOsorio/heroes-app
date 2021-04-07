import { heroes } from "../data/Heroes";

export const getHeroByName = (name) => {
  if(!name) return heroes
  return heroes.filter((hero) => hero.superhero.toLowerCase().includes(name.toLowerCase()))
}