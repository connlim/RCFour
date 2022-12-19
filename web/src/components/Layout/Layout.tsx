import React from 'react';

import Nav from './Nav';
import Footer from './Footer';

type LayoutProps = {
	children: React.ReactNode;
};

const Layout = (props: LayoutProps) => {
	return (
		<div>
			<Nav />
			<main>{props.children}</main>
			<Footer />
		</div>
	);
};

export default Layout;
