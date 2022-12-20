import { Alert, Slide, SlideProps, Snackbar } from '@mui/material';
import { SyntheticEvent, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../features/app/hooks';
import {
	onSnackEaten,
	Snack,
	takeSnack,
} from '../../features/snacks/snacksSlice';

const MainSnackbar = () => {
	const dispatch = useAppDispatch();
	const { snackInFocus, snacks } = useAppSelector((state) => state.snacks);

	const [open, setOpen] = useState(false);

	useEffect(() => {
		if (snacks.length && !snackInFocus) {
			dispatch(takeSnack());
			setOpen(true);
		} else if (snacks.length && snackInFocus && open) {
			setOpen(false);
		}
	}, [snacks, snackInFocus, open]);

	const handleClose = (event: SyntheticEvent | Event, reason?: string) => {
		if (reason === 'clickaway') return;
		setOpen(false);
	};

	const handleExited = () => {
		dispatch(onSnackEaten());
	};

	return (
		<Snackbar
			open={open}
			autoHideDuration={6000}
			onClose={handleClose}
			anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
			TransitionComponent={SlideTransition}
			TransitionProps={{ onExited: handleExited }}>
			<Alert severity={snackInFocus?.severity} onClose={handleClose}>
				{snackInFocus?.message}
			</Alert>
		</Snackbar>
	);
};

export default MainSnackbar;

function SlideTransition(props: SlideProps) {
	return <Slide {...props} direction="down" />;
}
