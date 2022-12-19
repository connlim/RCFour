import * as React from 'react';
import Map, { Marker } from 'react-map-gl';

import 'mapbox-gl/dist/mapbox-gl.css';

const token = 'pk.eyJ1IjoiYnJvc2VwaDAiLCJhIjoiY2twbDFiYWptMWdocDJucDliNHJsNThobiJ9.3w6p_pdYAMBaKnFMhb1SSQ';

const defaultCoor: Coor = {
  longitude: -122.4,
  latitude: 37.8
}

type Coor = {
  latitude: number,
  longitude: number
}

type Props = {
  coords?: Coor[];
  pinCoord: Coor|null;
  updatePin?: (lat: number, long: number) => void;
}

export function GeoMap(props: Props) {
  const { coords, pinCoord, updatePin } = props;
  const [currCoor, setCurrCoor] = React.useState<Coor|null>(null)
  const [centerCoor, setCenterCoor] = React.useState<Coor>(defaultCoor);

  React.useEffect(() => {
    const id = navigator.geolocation.watchPosition(
      (pos) => {
        const {latitude, longitude} = pos.coords;
        if (currCoor == null) setCenterCoor({latitude, longitude}); 
        setCurrCoor({latitude, longitude});
      },
      (err) => console.log(err),
      {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
      }
    )
    return () => navigator.geolocation.clearWatch(id);
  }, [])

  const handleMove = (e: any) => {
    const {longitude, latitude} = e.viewState;
    setCenterCoor({latitude, longitude});
  }

  const handleClick = (e: any) => {
    const {lng, lat} = e.lngLat;
    if (updatePin) updatePin(lat, lng);
  }

  return (
    <Map
      onMove={handleMove}
      onClick={handleClick}
      initialViewState={{ zoom: 14 }}
      {...centerCoor}
      style={{ width: '100%', height: '100%' }}
      mapStyle="mapbox://styles/mapbox/streets-v9"
      mapboxAccessToken={token}
    >
      {
        coords !== undefined && 
        coords.map(coor => {
          return (
            <Marker
              color='red'
              {...coor}
            />
          )
        })
      }
      <Marker
        color='gold'
        {...currCoor}
      />
      {
        pinCoord &&
        <Marker
          color='green'
          {...pinCoord}
        />
      }
      
    </Map>
  );
}
