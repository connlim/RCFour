import { Card, Stack } from '@mui/material';
import { useEffect, useMemo, useState } from 'react';
import { Marker } from 'react-map-gl';
import { useAppSelector } from '../../features/app/hooks';
import { MapLocation } from '../../features/events/eventsSlice';
import ClickMarker from './ClickMarker';
import CurrentMarker from './CurrentMarker';
import EventMarker from './EventMarker';
import { GeoMap } from './Map';

export default function MainMap() {
	const { events, currLocation } = useAppSelector((state) => state.events);
	const [initFly, setInitFly] = useState<MapLocation>();

	useEffect(() => {
		if (!initFly && currLocation) {
			setInitFly({
				latitude: currLocation.latitude,
				longitude: currLocation.longitude,
			});
		}
	}, [initFly, currLocation]);

	const markers = useMemo(
		() => [
			...events.map((e) => <EventMarker key={e.event_id} event={e} />),
			<ClickMarker key="clickclickclick" />,
			<CurrentMarker key="im_here" />,
		],
		[events],
	);

	return (
		<Stack direction="column" height="100%" alignItems="center">
			<Card
				sx={{
					height: '80%',
					width: '80%',
				}}>
				<GeoMap flyTo={initFly} markers={markers} />
			</Card>
		</Stack>
	);
}
