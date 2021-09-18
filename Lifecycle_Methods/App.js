import React from "react";

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={Count:0}
  }

  componentDidMount()
  {
    console.log("componentDidMount");
  }

  handleClick=(num)=>{
    if(num==="+")this.setState((prev)=>{return{Count: prev.Count+1}})
    else if(num==="-")this.setState((prev)=>{return{Count: prev.Count-1}})
    else this.setState({Count: 0})
  }

  shouldComponentUpdate()
  {
    console.log("shouldMount")
    return true
  }
  componentDidUpdate()
  {
    console.log("componentDidUpdate")
  }
  componentWillUnmount()
  {
    console.log("componentWillUnmount")
  }

  render(){
    return(
      <>
      <h1>Here's</h1>
      <h2>Count: {this.state.Count}</h2>
      {/* using function */}
      <button onClick={()=>this.handleClick("+")}>Increament</button>
      {/* using bind */}
      <button onClick={this.handleClick.bind(this,"-")}>Decreament</button>
      <button onClick={this.handleClick("")}>Reset</button>
      <button onClick={()=>this.forceUpdate()}>forceUpdate()</button>
      </>
    )
  }
}

export default App;