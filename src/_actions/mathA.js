import { actionType } from "./actionType"

// Declare Func Global

//Make Action
export const actionINC = () => {
    return {
      type: actionType.INCREMENT,
      payload: null
    }
}

export const actionMULTIP = () => {
  return {
    type: actionType.MULTIP,
    payload: null
  }
}

export const actionDIVIS = () => {
  return {
    type: actionType.DIVIS,
    payload: null
  }
}
export const actionDEC = () => {
  return {
    type: actionType.DECREMENT,
    payload: null
  }
}


