import React, { PureComponent } from 'react';

//pure component
class CurrentTime extends PureComponent {
  constructor() {
    super()
    var today = new Date(),
    date = ` ${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()} at ${today.getHours()%12}:${today.getMinutes()}`;
   
    this.state = {
      currentDate: date
    }
  }
   
  render() {
    return (
      <div>
        <p>
          Logged In on { this.state.currentDate }
        </p>
      </div>
    );
  }
}
export default CurrentTime