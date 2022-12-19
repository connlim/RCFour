import { Card, Stack } from '@mui/material';
import { useEffect, useState } from 'react';
import { Marker } from 'react-map-gl';
import { useAppSelector } from '../../features/app/hooks';
import { MapLocation } from '../../features/events/eventsSlice';
import ClickMarker from './ClickMarker';
import CurrentMarker from './CurrentMarker';
import { GeoMap } from './Map';

export default function MainMap() {
	const { events, currLocation } = useAppSelector((state) => state.events);
	const [initFly, setInitFly] = useState<MapLocation>();

	useEffect(() => {
		console.log(initFly);
		if (!initFly && currLocation) {
			setInitFly({
				latitude: currLocation.latitude,
				longitude: currLocation.longitude,
			});
		}
	}, [initFly, currLocation]);

	const eventMarkers = events.map((e) => {
		const { lat: latitude, lng: longitude } = e.location;
		return (latitude ?? false) && (longitude ?? false) ? (
			<Marker
				key={e.event_id}
				anchor="bottom"
				color="orange"
				latitude={latitude}
				longitude={longitude}
			/>
		) : null;
	});

	return (
		<Stack direction="column" height="100%" alignItems="center">
			<Card
				sx={{
					height: '80%',
					width: '80%',
				}}>
				<GeoMap
					flyTo={initFly}
					markers={[
						...eventMarkers,
						<ClickMarker key="clickclickclick" />,
						<CurrentMarker key="im_here" />,
					]}
				/>
			</Card>
		</Stack>
	);
}
