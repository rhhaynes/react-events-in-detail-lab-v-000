import React from 'react';

export default class CoordinatesButton extends React.Component {
  onClick = function(e){
    const xyCoordinates = [];
    this.props.onReceiveCoordinates(xy);
  }
  render() {
    return (
      <button onClick={this.onClick}>Coordinates</button>
    );
  }
}
