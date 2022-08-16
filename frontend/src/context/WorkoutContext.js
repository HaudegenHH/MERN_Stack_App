import { createContext, useReducer } from "react";

// create a brand new Context
export const WorkoutsContext = createContext();

// ..and provide this context to the components tree, so that the 
// components can access it
// ..and the way to do this is by creating a context provider component
// ..which is jst a regular react component and wraps the rest of the 
// application eventually

export const workoutsReducer = (state, action) => {
  switch(action.type){
    case 'SET_WORKOUTS':
      return {
        workouts: action.payload
      }
    case 'CREATE_WORKOUT':
      return {
        workouts: [action.payload, ...state.workouts]
      }
    case 'DELETE_WORKOUT':
      return {
        workouts: state.workouts.filter(wo => wo._id !== action.payload._id)
    }
    default:
      return state 
  }
}

export const WorkoutsContextProvider = ({children}) => {
  const [state, dispatch] = useReducer(workoutsReducer, {
    workouts: null
  });

  return (
    <WorkoutsContext.Provider value={{ ...state, dispatch }}>
      { children }
    </WorkoutsContext.Provider>
  )
}


