import {
	Avatar,
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	IconButton,
	Tooltip,
} from '@mui/material';
import { orange } from '@mui/material/colors';
import { bgcolor } from '@mui/system';
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
			<Marker anchor="bottom" onClick={handleOpen} {...coord}>
				<Tooltip title={event.title}>
					<IconButton>
						<Avatar
							src={event.profile_url}
							sx={{ boxShadow: 10, bgcolor: orange[800] }}>
							{event.username.length ? event.username[0] : undefined}
						</Avatar>
					</IconButton>
				</Tooltip>
			</Marker>
			<Dialog open={menuOpen} onClose={handleClose} fullWidth>
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
