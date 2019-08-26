import React, { Component } from "react";
import ReactMapGL, { Marker } from "react-map-gl";
import PolylineOverlay from "./PolylineOverlay";
import { connect } from "react-redux";

class Map extends Component {
  state = {
    viewport: {
      width: "100%",
      height: 400,
      latitude: 40.6708,
      longitude: -73.9645,
      zoom: 8
    }
  };

  render() {
    console.log(this.props);
    const markerComps = this.props.markers.map(latLong => (
      <Marker
        longitude={latLong[0]}
        latitude={latLong[1]}
        offsetLeft={-10}
        offsetTop={-10}
      >
        <img
          width="20px"
          height="20px"
          src="https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678111-map-marker-512.png"
        />
      </Marker>
    ));
    return (
      <ReactMapGL
        {...this.state.viewport}
        onClick={e => {
          console.log(e);
          this.props.addMarker(e.lngLat);
        }}
        mapOptions={{ style: "mapbox://styles/mapbox/streets-v10" }}
        onViewportChange={viewport => this.setState({ viewport })}
        mapboxApiAccessToken="pk.eyJ1IjoiZXNjaGVjaHRlciIsImEiOiJjanpzbHB3aTYwMDB5M2NyeHl0Ynh0ZGR3In0.VhFc44BAm0OCOP0CusW1Wg"
      >
        {markerComps}
        <PolylineOverlay points={this.props.markers} />
      </ReactMapGL>
    );
  }
}

function mdp(dispatch) {
  return {
    addMarker: latLong =>
      dispatch({
        type: "ADD-MARKER",
        payload: latLong
      })
  };
}

function msp(state) {
  return {
    markers: state.markers
  };
}

export default connect(
  msp,
  mdp
)(Map);
