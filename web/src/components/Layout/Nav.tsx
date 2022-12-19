import { useState } from 'react';
import { signIn, mySignOut } from '../../firebase/auth';
import { addEvent } from "../../firebase/functions/events/FirebaseEventService";
import { auth } from '../../firebase/init';
import { onAuthStateChanged } from '@firebase/auth';
import { useAppDispatch, useAppSelector } from '../../features/app/hooks';
import { selectUser, setUser } from '../../features/user/userSlice';

const Nav = () => {
	const dispatch = useAppDispatch();
	const user = useAppSelector(selectUser);

	auth.onAuthStateChanged( (user) => {
    console.log("state change")
		dispatch(setUser(user));
		// https://firebase.google.com/docs/reference/js/firebase.User
	});

	return (
		<div>
			Nav Bar
			{user === null ? (
				<button onClick={() => signIn()}>Sign In</button>
			) : (
				<button onClick={() => mySignOut()}>Sign Out</button>
			)}
      <button onClick={() => addEvent()}>Add event</button>
		</div>
	);
};

export default Nav;
