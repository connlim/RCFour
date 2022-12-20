import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../features/app/hooks';
import { getEvents } from '../../features/events/eventsSlice';

/**
 * Background fetching for events, can be found in Footer.
 * @returns null
 */
export default function EventBackground() {
	const dispatch = useAppDispatch();
	const { lifecycleStatus } = useAppSelector((state) => state.events);

	useEffect(() => {
		if (lifecycleStatus === 'initial') {
			dispatch(getEvents());
		}
	}, [lifecycleStatus]);

	return null;
}
