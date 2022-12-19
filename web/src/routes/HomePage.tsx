import { Box } from '@mui/system';
import React from 'react';
import EventList from '../components/Event/EventList';
import ClickMarker from '../components/Map/ClickMarker';
import CurrentMarker from '../components/Map/CurrentMarker';
import MainMap from '../components/Map/MainMap';
import { GeoMap } from '../components/Map/Map';

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
