import { Stack, Typography } from '@mui/material';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../features/app/hooks';
import { getEvents } from '../../features/events/eventsSlice';
import EventStrip from './EventStrip';

const EventList = () => {
	const dispatch = useAppDispatch();
	const { events } = useAppSelector((state) => state.events);

	return (
		<Stack direction="column" spacing={1}>
			{events.length ? (
				events.map((e) => <EventStrip event={e} />)
			) : (
				<Typography>No events.</Typography>
			)}
		</Stack>
	);
};

export default EventList;
