import React from 'react'

import CurrentTime from './CurrentTime'
const TopNavBar= () =>{
    return (
    <div className='base'>
       <span className='welcomeleft'>Welcome to Ice Parlour</span>
       <span className='welcomeright'><CurrentTime /></span>
    </div>
    );
  }
  
  export default TopNavBar;