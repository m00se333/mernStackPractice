import axios from "axios";


export function test(message){

    const hit = axios.post( "/hello", { data: message });


    return (dispatch) => {
      
      hit.then(({data}) => {
                        // this is working, kind of
                        // I want to take the message paramater and pass it down here...
        dispatch({ type: "HIT", payload: message})
        console.log(data);
      });
    };

}


export function nameFunc(name, func){

  const reqInfo = axios.post("/kcc", {data: { name , func }});

  return (dispatch) => {

      // data is the response from the server

    reqInfo.then(({data}) => {

      dispatch({type: "DECLARE_NAME_FUNC", payload: {name, func}})

    });

  };


}