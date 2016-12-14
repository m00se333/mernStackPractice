import React from "react";

class Main extends React.Component{

  constructor(){
    super();
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e){
    e.preventDefault();
    // uses the redux-connected function
    this.props.nameFunc(this.nam.value, this.func.value);
    // resets the forms
    this.nam.value = "";
    this.func.value = "";
  }


  render(){
    return(

      <div className="buisness">
        <h2>What's you name, what's your function?</h2> 

        <form onSubmit={this.handleSubmit}>
          <input ref={(input) => this.nam = input} type="text" placeholder="name" />
          <input ref={(input) => this.func = input} type="text" placeholder="function" />
          <input type="submit" value="click me!"/>
        </form> 

        <button className="testRequest" onClick={this.props.test.bind(null, "kitties!")}>hit the API</button>

        <h2>{this.props.task.name}</h2>
        <h2>{this.props.task.func}</h2>  


      </div>

      )
  }
}

export default Main;