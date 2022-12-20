import { Marker } from 'react-map-gl';
import { useAppSelector } from '../../features/app/hooks';

const ClickMarker = () => {
	const { markLocation } = useAppSelector((state) => state.events);

	return markLocation ? (
		<Marker
			color="green"
			latitude={markLocation.latitude}
			longitude={markLocation.longitude}
		/>
	) : null;
};

export default ClickMarker;
