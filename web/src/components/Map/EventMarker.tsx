import { Button, Dialog, DialogActions, DialogContent } from '@mui/material';
import { useMemo, useState } from 'react';
import { Marker } from 'react-map-gl';
import { EventData } from '../../services/EventService';
import EventStrip from '../Event/EventStrip';

export interface EventMarkerProps {
	event: EventData;
}
export default function EventMarker({ event }: EventMarkerProps) {
	const [menuOpen, setMenuOpen] = useState(false);

	const coord = useMemo(() => {
		const { lat: latitude, lng: longitude } = event.location;
		return (latitude ?? false) && (longitude ?? false)
			? { latitude, longitude }
			: null;
	}, [event]);

	const toggleOpen = (open: boolean) => () => {
		setMenuOpen(open);
	};

	return coord ? (
		<>
			<Marker
				anchor="bottom"
				color="orange"
				onClick={toggleOpen(true)}
				{...coord}
			/>
			<Dialog open={menuOpen} onClose={toggleOpen(false)}>
				<DialogContent>
					<EventStrip event={event} />
				</DialogContent>
				<DialogActions>
					<Button onClick={toggleOpen(false)}>Close</Button>
				</DialogActions>
			</Dialog>
		</>
	) : null;
}
