import React from 'react'

class Footer extends React.Component {
    render() {
      return React.createElement(
        "div",
        { style: { backgroundColor: "aqua" ,textAlign: 'center',padding: '20px',width: '100%',position:'fixed',bottom:'0'} },
        `Thanks for visiting us`
      );
    }
  }


export default Footer