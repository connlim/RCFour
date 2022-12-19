import { Marker } from 'react-map-gl';
import { useAppSelector } from '../../features/app/hooks';

const CurrentMarker = () => {
	const { currLocation } = useAppSelector((state) => state.events);

	return currLocation ? (
		<Marker
			anchor="bottom"
			color="red"
			latitude={currLocation.latitude}
			longitude={currLocation.longitude}
		/>
	) : null;
};

export default CurrentMarker;
