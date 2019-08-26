import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Map from "./Map";
import { connect } from "react-redux";
import haversineSum from "./haversineSum";
// or "const mapboxgl = require('mapbox-gl');"

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>{haversineSum(this.props.markers)}</h1>
        <Map />
      </div>
    );
  }
}

function msp(state) {
  return {
    markers: state.markers
  };
}
export default connect(
  msp,
  null
)(App);
