import { Add, ViewList } from '@mui/icons-material';
import {
	Button,
	Card,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
	Fab,
	List,
	ListItemButton,
	Tooltip,
} from '@mui/material';
import { Stack } from '@mui/system';
import { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../features/app/hooks';
import { MapLocation } from '../../features/events/eventsSlice';
import { EventData } from '../../services/EventService';
import EventStrip from '../Event/EventStrip';
import ClickMarker from './ClickMarker';
import CurrentMarker from './CurrentMarker';
import EventMarker from './EventMarker';
import { GeoMap } from './Map';

export default function MainMap() {
	const navigate = useNavigate();
	const { events, currLocation } = useAppSelector((state) => state.events);
	const [initFly, setInitFly] = useState<MapLocation>();
	const [chooserOpen, setChooserOpen] = useState(false);

	useEffect(() => {
		if (!initFly && currLocation) {
			setInitFly({
				latitude: currLocation.latitude,
				longitude: currLocation.longitude,
			});
		}
	}, [initFly, currLocation]);

	const toggleChooserOpen = (open: boolean) => () => {
		setChooserOpen(open);
	};

	const handleEventChoice = (event: EventData) => () => {
		setInitFly({ latitude: event.location.lat, longitude: event.location.lng });
		toggleChooserOpen(false)();
	};

	const markers = useMemo(
		() => [
			...events.map((e) => <EventMarker key={e.event_id} event={e} />),
			<ClickMarker key="clickclickclick" />,
			<CurrentMarker key="im_here" />,
		],
		[events],
	);

	const eventChooser = (
		<Dialog open={chooserOpen} onClose={toggleChooserOpen(false)}>
			<DialogTitle>Choose an event</DialogTitle>
			<DialogContent>
				<List>
					{events.map((e) => (
						<ListItemButton
							key={e.event_id}
							onClick={handleEventChoice(e)}
							sx={{ borderBottom: 1 }}>
							<EventStrip event={e} />
						</ListItemButton>
					))}
				</List>
			</DialogContent>
			<DialogActions>
				<Button onClick={toggleChooserOpen(false)}>Close</Button>
			</DialogActions>
		</Dialog>
	);

	return (
		<Card
			sx={{
				height: '100%',
				width: '100%',
			}}>
			<GeoMap flyTo={initFly} markers={markers}>
				<Stack
					direction="column"
					spacing={2}
					position="absolute"
					left={(theme) => theme.spacing(2)}
					bottom={(theme) => theme.spacing(2)}>
					<Tooltip title="Create event">
						<Fab
							onClick={() => {
								navigate('/create');
							}}>
							<Add />
						</Fab>
					</Tooltip>
					<Tooltip title="All events">
						<Fab onClick={toggleChooserOpen(true)}>
							<ViewList />
						</Fab>
					</Tooltip>
				</Stack>
			</GeoMap>
			{eventChooser}
		</Card>
	);
}
