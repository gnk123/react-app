import React from 'react';
class Rater extends React.Component{
  render(){
    return(
      <ul className="rating">
        <li class="filled">{'\u2605'}</li>
        <li class="filled">{'\u2605'}</li>
        <li class="filled">{'\u2605'}</li>
        <li>{'\u2605'}</li>
        <li>{'\u2605'}</li>
 </ul>
    )
  }
}
export default Rater;
