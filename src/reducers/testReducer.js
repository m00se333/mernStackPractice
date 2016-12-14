function test(state={}, action){

    switch(action.type){

      case "HIT":

        console.log(action.payload)
        return {...state, test: action.payload}

      case "HAT": 

        

      default: 

        return state;

    }
}

export default test;