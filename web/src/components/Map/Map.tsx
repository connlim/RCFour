import * as React from 'react';
import Map, {
	MapLayerMouseEvent,
	MapProps,
	MapRef,
	Marker,
	ViewStateChangeEvent,
} from 'react-map-gl';

import 'mapbox-gl/dist/mapbox-gl.css';
import { useAppDispatch, useAppSelector } from '../../features/app/hooks';
import {
	setDragLocation,
	setMarkLocation,
} from '../../features/events/eventsSlice';
import { Fab } from '@mui/material';
import { NearMe } from '@mui/icons-material';
import { pushSnack } from '../../features/snacks/snacksSlice';

const token =
	'pk.eyJ1IjoiYnJvc2VwaDAiLCJhIjoiY2twbDFiYWptMWdocDJucDliNHJsNThobiJ9.3w6p_pdYAMBaKnFMhb1SSQ';

const defaultCoor: Coor = {
	longitude: -122.4,
	latitude: 37.8,
};

const FLY_DURATION = 1000;
const DEFAULT_ZOOM = 15;

type Coor = {
	latitude: number;
	longitude: number;
};

interface Props extends React.PropsWithChildren {
	markers?: (JSX.Element | Element | null)[];
	flyTo?: Coor;
}

export function GeoMap({ markers, flyTo, children }: Props) {
	const dispatch = useAppDispatch();
	const { dragLocation, currLocation } = useAppSelector(
		(state) => state.events,
	);
	const ref = React.useRef<MapRef | null>(null);

	React.useEffect(() => {
		if (flyTo?.latitude != null && flyTo?.longitude != null) {
			ref.current?.flyTo({
				center: [flyTo.longitude, flyTo.latitude],
				duration: FLY_DURATION,
				zoom: DEFAULT_ZOOM,
			});
		} else if (flyTo) {
			dispatch(
				pushSnack({
					severity: 'error',
					message: 'Invalid coordinates!',
				}),
			);
		}
	}, [dispatch, flyTo]);

	const handleMove = (e: ViewStateChangeEvent) => {
		const { latitude, longitude, zoom } = e.viewState;
		dispatch(setDragLocation({ latitude, longitude, zoom }));
	};

	const handleClick = (e: MapLayerMouseEvent) => {
		const { lng, lat } = e.lngLat;
		dispatch(setMarkLocation({ latitude: lat, longitude: lng }));
	};

	const handleFlyToCurrent = () => {
		if (currLocation) {
			ref.current?.flyTo({
				center: [currLocation.longitude, currLocation.latitude],
				duration: FLY_DURATION,
				zoom: DEFAULT_ZOOM,
			});
		}
	};

	return (
		<Map
			ref={ref}
			onMove={handleMove}
			onClick={handleClick}
			{...(dragLocation ?? defaultCoor)}
			mapStyle="mapbox://styles/mapbox/streets-v9"
			mapboxAccessToken={token}>
			{markers}
			{children}
			<Fab
				disabled={!currLocation}
				onClick={handleFlyToCurrent}
				sx={{
					position: 'absolute',
					right: (theme) => theme.spacing(2),
					bottom: (theme) => theme.spacing(2),
				}}>
				<NearMe />
			</Fab>
		</Map>
	);
}
