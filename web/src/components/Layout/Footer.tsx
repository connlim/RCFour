import { Button } from '@mui/material';
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
		<div>
			<MainSnackbar />
			<MapBackground />
			<EventBackground />
		</div>
	);
};

export default Footer;
