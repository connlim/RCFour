import { ViewList } from '@mui/icons-material';
import { Box, Button, Grid, TextField } from '@mui/material';
import { useEffect, useMemo, useState } from 'react';
import { useAppSelector } from '../../features/app/hooks';
import { MapLocation } from '../../features/events/eventsSlice';
import ClickMarker from './ClickMarker';
import CurrentMarker from './CurrentMarker';
import { GeoMap } from './Map';

export default function FormMap() {
	const { currLocation } = useAppSelector((state) => state.events);
	const [initFly, setInitFly] = useState<MapLocation>();

	useEffect(() => {
		if (!initFly && currLocation) {
			setInitFly({
				latitude: currLocation.latitude,
				longitude: currLocation.longitude,
			});
		}
	}, [initFly, currLocation]);

	const markers = [
    <ClickMarker key="clickclickclick" />,
		<CurrentMarker key="im_here" />
  ];

	const handleLocationSearch = (e: any) => {
		console.log(e);
	}

	return (
		<>
			<Grid container spacing={0}>
				<Grid item xs={11}>
					<TextField 
						sx={{ 
							justifySelf: "start",
							width: "100%"
						}}
					/>
				</Grid>
				<Grid item xs={1}>
				<Button
					onClick={handleLocationSearch}
					sx={{
						border: 1,
						height: "100%",
						width: "100%",
						alignSelf: "start",
						borderColor: "black",
						color: "black",
						borderRadius: "0",
						textTransform: "none",
						fontSize: "1rem",
						fontWeight: "600",
						letterSpacing: "1px"

					}}
				>
					Search
				</Button>
				</Grid>
			</Grid>
			<Box height="400px" alignItems="center">
				<GeoMap flyTo={initFly} markers={markers} />
			</Box>
		</>
	);
}
