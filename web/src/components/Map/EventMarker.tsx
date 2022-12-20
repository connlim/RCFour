import { Button, Dialog, DialogActions, DialogContent } from '@mui/material';
import { useMemo, useState } from 'react';
import { MapboxEvent, Marker } from 'react-map-gl';
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

	const handleOpen = (e: MapboxEvent<MouseEvent>) => {
		e.originalEvent.stopPropagation();
		setMenuOpen(true);
	};

	const handleClose = () => {
		setMenuOpen(false);
	};

	return coord ? (
		<>
			<Marker anchor="bottom" color="orange" onClick={handleOpen} {...coord} />
			<Dialog open={menuOpen} onClose={handleClose}>
				<DialogContent>
					<EventStrip event={event} />
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose}>Close</Button>
				</DialogActions>
			</Dialog>
		</>
	) : null;
}
