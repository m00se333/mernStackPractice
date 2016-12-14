function task(state={}, action){


  switch(action.type){

    case "DECLARE_NAME_FUNC":

    console.log(action)
    return {...state, name: action.payload.name, func: action.payload.func}

    case "SET_NAME_FUNC":

    console.log(action);

    
    default:
      return state;
  }
}

export default task;