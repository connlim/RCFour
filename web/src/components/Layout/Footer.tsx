import { Button } from '@mui/material';
import React from 'react';
import { useAppDispatch } from '../../features/app/hooks';
import { pushSnack } from '../../features/snacks/snacksSlice';
import MainSnackbar from '../Snackbar/MainSnackbar';

const Footer = () => {
	const dispatch = useAppDispatch();
	return (
		<div>
			Footer
			<MainSnackbar />
		</div>
	);
};

export default Footer;
