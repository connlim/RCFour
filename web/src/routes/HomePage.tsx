import { Box } from '@mui/system';
import React from 'react';
import EventList from '../components/Event/EventList';
import MainMap from '../components/Map/MainMap';

const HomePage = () => {
	return (
		<Box
			sx={{
				height: '80vh',
			}}>
			<MainMap />
			<EventList></EventList>
		</Box>
	);
};

export default HomePage;
