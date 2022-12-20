import React, { useState } from 'react';
import { Box, Button, Grid, Input, TextField, Typography } from '@mui/material';

import { EventCreationData } from '../../services/EventService';
import { auth } from '../../firebase/init';
import FormMap from '../Map/FormMap';
import { useAppDispatch, useAppSelector } from '../../features/app/hooks';
import { pushSnack } from '../../features/snacks/snacksSlice';
import { createEvent } from '../../features/events/eventsSlice';

const EventCreation = () => {
	const dispatch = useAppDispatch();
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const { markLocation } = useAppSelector((state) => state.events);

	const handleTitleChange = (event: any) => {
		const target = event.target;
		setTitle(target.value);
	};

	const handleDescriptionChange = (event: any) => {
		const target = event.target;
		setDescription(target.value);
	};

	const handleEventSubmit = () => {
		const uid = auth.currentUser?.uid;
		if (uid === undefined) {
			dispatch(
				pushSnack({ severity: 'error', message: 'You are not logged in!' }),
			);
			return;
		}
		if (markLocation === undefined) {
			dispatch(
				pushSnack({ severity: 'error', message: 'Please choose a location!' }),
			);
			return;
		}

		// prepare data
		const data: EventCreationData = {
			user_id: uid,
			title: title,
			description: description,
			timestamp: Date.now().toString(),
			location: {
				lat: markLocation.latitude,
				lng: markLocation.longitude,
			},
		};

		dispatch(createEvent(data))
			.then((_) =>
				dispatch(pushSnack({ severity: 'success', message: 'Event created!' })),
			)
			.catch((err) => {
				console.error(err);
				dispatch(
					pushSnack({ severity: 'error', message: 'Error creating event!' }),
				);
			});
	};

	return (
		<Box
			sx={{
				display: 'flex',
				maxWidth: '1200px',
				width: '80%',
				margin: '0 auto',
				flexDirection: 'column',
				alignItems: 'left',
				justifyContent: 'space-between',
				padding: '1rem',
				border: 2,
				gap: '1rem',
			}}>
			<Box>
				<Typography
					sx={{
						alignSelf: 'flex-start',
						fontFamily: 'Roboto',
						fontSize: '18px',
					}}>
					Title
				</Typography>

				<TextField
					onChange={handleTitleChange}
					sx={{
						width: '100%',
					}}
				/>
			</Box>

			<Box>
				<Typography
					sx={{
						alignSelf: 'flex-start',
						fontFamily: 'Roboto',
						fontSize: '18px',
					}}>
					Description
				</Typography>
				<TextField
					onChange={handleDescriptionChange}
					multiline
					minRows={4}
					sx={{
						width: '100%',
					}}
				/>
			</Box>

			<Box>
				<Typography
					sx={{
						alignSelf: 'flex-start',
						fontFamily: 'Roboto',
						fontSize: '18px',
					}}>
					Location
				</Typography>
				<FormMap />
			</Box>

			<Button
				onClick={handleEventSubmit}
				sx={{
					border: 1,
					width: 200,
					alignSelf: 'center',
					// borderRadius: 100,
					borderColor: 'black',
					marginTop: '1rem',
					color: 'black',
					borderRadius: '0',
					marginLeft: '1rem',
					textTransform: 'none',
					fontSize: '1rem',
					fontWeight: '600',
					letterSpacing: '1px',
				}}>
				Create Event
			</Button>
		</Box>
	);
};

export default EventCreation;
