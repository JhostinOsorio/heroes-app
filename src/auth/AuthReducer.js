import { types } from "../types/types";

export const AuthReducer = (state = {logged: false}, action) => {
  switch (action.type) {
    case types.login:
      return action.payload
    case types.logout:
      return {
        logged: false
      }
    default:
      return state
  }
}