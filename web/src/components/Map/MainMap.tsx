import { Card, Stack } from '@mui/material';
import { Marker } from 'react-map-gl';
import { useAppSelector } from '../../features/app/hooks';
import ClickMarker from './ClickMarker';
import CurrentMarker from './CurrentMarker';
import { GeoMap } from './Map';

export default function MainMap() {
	const { events } = useAppSelector((state) => state.events);

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
					markers={[...eventMarkers, <ClickMarker />, <CurrentMarker />]}
				/>
			</Card>
		</Stack>
	);
}
