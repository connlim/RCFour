import { useState } from 'react';
import { signIn, mySignOut } from '../../firebase/auth';
import { auth } from '../../firebase/init';
import { onAuthStateChanged } from '@firebase/auth';
import { useAppDispatch, useAppSelector } from '../../features/app/hooks';
import { selectUser, setUser } from '../../features/user/userSlice';

const Nav = () => {
	const dispatch = useAppDispatch();
	const user = useAppSelector(selectUser);
	const [uid, setUid] = useState('');
	onAuthStateChanged(auth, (user) => {
		dispatch(setUser(user));
		// https://firebase.google.com/docs/reference/js/firebase.User
	});
	return (
		<div>
			Nav Bar
			{user?.uid === '' ? (
				<button onClick={() => signIn()}>Sign In</button>
			) : (
				<button onClick={() => mySignOut()}>Sign Out</button>
			)}
		</div>
	);
};

export default Nav;
