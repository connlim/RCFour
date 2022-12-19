import { Box } from '@mui/system';
import React from 'react';
import EventList from '../components/Event/EventList';
import { GeoMap } from '../components/Map/Map';

const HomePage = () => {
	return (
		<Box
			sx={{
				height: '80vh',
			}}>
			<GeoMap coords={[]} />
			<EventList></EventList>
		</Box>
	);
};

export default HomePage;
