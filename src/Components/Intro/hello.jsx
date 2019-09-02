import React, {Component} from 'react';


class Hello extends Component {
  constructor() {
    super()
this.state={time:new Date()}
  }

  currentTime()
  {
    this.setState({
      time: new Date()
    })
  }
  componentWillMount()
  {
setInterval(()=>this.currentTime(),1000)
  }

  render() {

    return (
      <div>
        <h1> re-Initroduction </h1>
        <h2>
          The current time is: {this.state.time.toLocaleTimeString()} 
        </h2>
      </div>
    )
  }
}

export default Hello;