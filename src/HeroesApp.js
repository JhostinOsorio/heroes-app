import React, { useEffect, useReducer } from 'react'
import AuthContext from './auth/AuthContext'
import { AuthReducer } from './auth/AuthReducer'
import AppRouter from './routes/AppRouter'

const init = () => {
  return JSON.parse(localStorage.getItem('user')) || {logged: false}
}

const HeroesApp = () => {

  const [state, dispatch] = useReducer(AuthReducer, {}, init)
  
  useEffect(()=>{
    localStorage.setItem('user', JSON.stringify(state))
  }, [state])

  return (
    <AuthContext.Provider value={{state, dispatch}}>
      <AppRouter />
    </AuthContext.Provider>
  )
}

export default HeroesApp
