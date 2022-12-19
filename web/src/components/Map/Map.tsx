import * as React from 'react';
import Map, {
	MapLayerMouseEvent,
	Marker,
	ViewStateChangeEvent,
} from 'react-map-gl';

import 'mapbox-gl/dist/mapbox-gl.css';
import { Box, Card, Stack } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../features/app/hooks';
import {
	setCurrLocation,
	setDragLocation,
	setMarkLocation,
} from '../../features/events/eventsSlice';
import CurrentMarker from './CurrentMarker';

const token =
	'pk.eyJ1IjoiYnJvc2VwaDAiLCJhIjoiY2twbDFiYWptMWdocDJucDliNHJsNThobiJ9.3w6p_pdYAMBaKnFMhb1SSQ';

const defaultCoor: Coor = {
	longitude: -122.4,
	latitude: 37.8,
};

type Coor = {
	latitude: number;
	longitude: number;
};

type Props = {
	coords?: Coor[];
};

export function GeoMap(props: Props) {
	const { coords } = props;
	const dispatch = useAppDispatch();
	const { dragLocation, markLocation } = useAppSelector(
		(state) => state.events,
	);

	React.useEffect(() => {
		const id = navigator.geolocation.watchPosition(
			(pos) => {
				const { latitude, longitude } = pos.coords;
				dispatch(setCurrLocation({ latitude, longitude }));
			},
			(err) => console.log(err),
			{
				enableHighAccuracy: true,
				timeout: 5000,
				maximumAge: 0,
			},
		);
		return () => navigator.geolocation.clearWatch(id);
	}, []);

	const handleMove = (e: ViewStateChangeEvent) => {
		const { latitude, longitude, zoom } = e.viewState;
		dispatch(setDragLocation({ latitude, longitude, zoom }));
	};

	const handleClick = (e: MapLayerMouseEvent) => {
		const { lng, lat } = e.lngLat;
		dispatch(setMarkLocation({ latitude: lat, longitude: lng }));
	};

	const ClickMarker = () =>
		markLocation ? (
			<Marker
				color="green"
				latitude={markLocation.latitude}
				longitude={markLocation.longitude}
			/>
		) : null;

	return (
		<Stack direction="column" height="100%" alignItems="center">
			<Card
				sx={{
					height: '80%',
					width: '80%',
				}}>
				<Map
					onMove={handleMove}
					onClick={handleClick}
					initialViewState={{ zoom: 14 }}
					{...(dragLocation ?? defaultCoor)}
					mapStyle="mapbox://styles/mapbox/streets-v9"
					mapboxAccessToken={token}>
					{coords !== undefined &&
						coords.map((coor) => {
							return <Marker color="red" {...coor} />;
						})}
					<CurrentMarker />
					<ClickMarker />
				</Map>
			</Card>
		</Stack>
	);
}
