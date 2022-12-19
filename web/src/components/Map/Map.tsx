import * as React from 'react';
import Map, { Marker } from 'react-map-gl';

import 'mapbox-gl/dist/mapbox-gl.css';

const token = 'pk.eyJ1IjoiYnJvc2VwaDAiLCJhIjoiY2twbDFiYWptMWdocDJucDliNHJsNThobiJ9.3w6p_pdYAMBaKnFMhb1SSQ';

type Coor = {
  latitude: number,
  longitude: number
}

type Props = {
  coords: Coor[]
}

export function GeoMap(props: Props) {
  const { coords } = props;
  const [currCoor, setCurrCoor] = React.useState<Coor>({
    longitude: -122.4,
    latitude: 37.8
  });

  React.useEffect(() => {
    const id = navigator.geolocation.watchPosition(
      (pos) => {
        const {latitude, longitude} = pos.coords;
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
    setCurrCoor({latitude, longitude});
  }

  return (
    <Map
      onMove={handleMove}
      initialViewState={{ zoom: 14 }}
      {...currCoor}
      style={{ width: '100%', height: '100%' }}
      mapStyle="mapbox://styles/mapbox/streets-v9"
      mapboxAccessToken={token}
    >
      {
        coords.map(coor => {
          return (
            <Marker
              {...coor}
            />
          )
        })
      }
    </Map>
  );
}