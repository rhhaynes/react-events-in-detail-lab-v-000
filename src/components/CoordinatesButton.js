import React from 'react';

export default class CoordinatesButton extends React.Component {
  onClick = function(e){
    const xyCoordinates = [];
    return this.props.onReceiveCoordinates()
  }
  render() {
    return (
      <button onClick={this.onClick}>Coordinates</button>
    );
  }
}
