import { Avatar, Badge, Tooltip } from '@mui/material';
import { Marker } from 'react-map-gl';
import { useAppSelector } from '../../features/app/hooks';
import { auth } from '../../firebase/init';

const CurrentMarker = () => {
	const { currLocation } = useAppSelector((state) => state.events);

	return currLocation ? (
		<Marker
			anchor="bottom"
			latitude={currLocation.latitude}
			longitude={currLocation.longitude}>
			<Tooltip title="You">
				<Badge
					overlap="circular"
					color="success"
					anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
					variant="dot">
					<Avatar
						src={auth.currentUser?.photoURL ?? undefined}
						sx={{ boxShadow: 10 }}
					/>
				</Badge>
			</Tooltip>
		</Marker>
	) : null;
};

export default CurrentMarker;
