import React from "react";
// this is giving only one child props and such. I should be using a spread operator instead I think.


const StoreShell = React.createClass({
  render(){
    return(
        <div className="theBigWrapper">
          {React.cloneElement(this.props.children, this.props)}
        </div>
      )
  }
})

export default StoreShell;