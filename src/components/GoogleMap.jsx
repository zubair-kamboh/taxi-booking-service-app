import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'
import MyLocationIcon from '@mui/icons-material/MyLocation'

const AnyReactComponent = () => (
  <div>
    <MyLocationIcon color="error" />
  </div>
)

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 40.284409,
      lng: -84.156616,
    },
    zoom: 11,
  }

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%', marginTop: '2rem' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyCxQJiXRp0_v0M3bL-103dsdCStBf6qskE' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={40.284409}
            lng={-84.156616}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    )
  }
}

export default SimpleMap
