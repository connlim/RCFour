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

interface Props extends MapProps {
	markers?: (JSX.Element | Element | null)[];
	flyTo?: Coor;
}

export function GeoMap({ markers, flyTo }: Props) {
	const dispatch = useAppDispatch();
	const { dragLocation } = useAppSelector((state) => state.events);
	const ref = React.useRef<MapRef | null>(null);

	React.useEffect(() => {
		if (flyTo) {
			ref.current?.flyTo({
				center: [flyTo.longitude, flyTo.latitude],
				duration: 2000,
				zoom: 14,
			});
		}
	}, [flyTo]);

	const handleMove = (e: ViewStateChangeEvent) => {
		const { latitude, longitude, zoom } = e.viewState;
		dispatch(setDragLocation({ latitude, longitude, zoom }));
	};

	const handleClick = (e: MapLayerMouseEvent) => {
		const { lng, lat } = e.lngLat;
		dispatch(setMarkLocation({ latitude: lat, longitude: lng }));
	};

	return (
		<Map
			ref={ref}
			onMove={handleMove}
			onClick={handleClick}
			initialViewState={{ zoom: 14 }}
			{...(dragLocation ?? defaultCoor)}
			mapStyle="mapbox://styles/mapbox/streets-v9"
			mapboxAccessToken={token}>
			{markers}
		</Map>
	);
}
