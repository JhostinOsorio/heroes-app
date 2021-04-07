import React, { useContext } from 'react'
import { Redirect, Route } from 'react-router'
import AuthContext from '../auth/AuthContext'

const PrivateRouter = ({ component:Component, ...res }) => {

  const { state } = useContext(AuthContext)

  return (
    state.logged 
    ?
    <Route component={Component} {...res} />
    :
    <Redirect to="/login" />
  )
}

export default PrivateRouter
