import { Card, CardContent, Divider, Stack, Typography } from '@mui/material';
import UserService from '../../services/UserService';
import AppEvent from '../../types/event.app';

export interface EventStripProps {
	event: AppEvent;
}

const EventStrip = ({ event }: EventStripProps) => {
	return (
		<Card>
			<CardContent>
				<Stack direction="column" spacing={1}>
					<Typography variant="h6">{event.title}</Typography>
					<Stack
						direction="row"
						spacing={1}
						divider={<Divider orientation="vertical" flexItem />}>
						{[event.organiser, event.timestamp].map((s) => (
							<Typography variant="caption">{s}</Typography>
						))}
					</Stack>
				</Stack>
			</CardContent>
		</Card>
	);
};

export default EventStrip;
