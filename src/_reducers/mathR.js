import { actionType } from "../_actions/actionType";

//Isi Dari Func atau

//Init Reducer
const initialState = {
    number: 0,
  }
  
  const mathR = (state = initialState, action) => {
    switch (action.type) {
      case actionType.INCREMENT:
        return {
          number: state.number + 1
        }
      case actionType.DECREMENT:
        return {
          number: state.number - 1
        }
      case actionType.MULTIP:
        return{
          number: state.number * state.number
        }
        case actionType.DIVIS:
          return{
            number: state.number / state.number
          }
      default:
        return state
    }
  }

  export default mathR;