import { Box, Button } from '@mui/material';
import React from 'react';
import { useAppDispatch } from '../../features/app/hooks';
import { pushSnack } from '../../features/snacks/snacksSlice';
import EventCreationButton from '../Creation/EventCreationButton';
import EventBackground from '../Event/EventBackground';
import MapBackground from '../Map/MapBackground';
import MainSnackbar from '../Snackbar/MainSnackbar';

const Footer = () => {
	const dispatch = useAppDispatch();
	return (
		<Box
      sx={{
        height:"100px"
      }}
    >
			<MainSnackbar />
			<MapBackground />
			<EventBackground />
		</Box>
	);
};

export default Footer;
