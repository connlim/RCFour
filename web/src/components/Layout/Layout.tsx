import React from 'react';

import Nav from './Nav';
import Footer from './Footer';
import { Box, Toolbar } from '@mui/material';

type LayoutProps = {
	children: React.ReactNode;
};

const Layout = (props: LayoutProps) => {
	return (
		<Box
			sx={{
				margin: '0 auto',
				overflowX: 'hidden',
				boxSizing: 'content-box',
			}}>
			<Nav />
			<Toolbar />
			<main>{props.children}</main>
			<Footer />
		</Box>
	);
};

export default Layout;
