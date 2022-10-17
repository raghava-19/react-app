import React, { Component } from 'react';

// Use React Component
class Parlour extends Component {

  state = {
    count: 0,
  }
  add = () => {
    this.setState({
      count: this.state.count + 1
    })
  }
  remove = ()=>{
    this.setState({
      count: this.state.count - 1
    })
  }

  render() {
    return(
      <div className='wrapper'>
        <div className='p-20'>
          Ice Creams Selected: {this.state.count}.
        </div>
        <div className='buttonWrapper'>
        <button  onClick={this.add}>Add 🍦</button> 
        <button disabled={this.state.count === 0} onClick={this.remove}>Remove 🍦</button>
        </div>
        
      </div>
    )
  }
}

export default Parlour