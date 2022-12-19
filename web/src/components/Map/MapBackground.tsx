import { useEffect } from 'react';
import { useAppDispatch } from '../../features/app/hooks';
import { setCurrLocation } from '../../features/events/eventsSlice';

/**
 * Some background logic for maps, don't know where to put
 * so it's in Footer.
 * @returns null
 */
export default function MapBackground() {
	const dispatch = useAppDispatch();

	useEffect(() => {
		const id = navigator.geolocation.watchPosition(
			(pos) => {
				const { latitude, longitude } = pos.coords;
				dispatch(setCurrLocation({ latitude, longitude }));
			},
			(err) => {
				console.log(err);
			},
			{ enableHighAccuracy: true, timeout: 5000, maximumAge: 0 },
		);

		return () => navigator.geolocation.clearWatch(id);
	}, [dispatch]);

	return null;
}
