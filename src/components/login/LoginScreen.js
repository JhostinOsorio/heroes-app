import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import AuthContext from '../../auth/AuthContext';
import { types } from '../../types/types';

const LoginScreen = () => {

  const history = useHistory();
  const {dispatch } = useContext(AuthContext)

  const handleLogin = () => {
    dispatch({
      type: types.login,
      payload: {
        name: 'Jhostin',
        logged: true
      }
    })
    history.replace('/');
  }

  return (
    <div className="container mt-5">
      <h1>Login Screen</h1>
      <hr />

      <button
        className="btn btn-primary"
        onClick={handleLogin}
      >
        Login
      </button>
    </div>
  )
}

export default LoginScreen
