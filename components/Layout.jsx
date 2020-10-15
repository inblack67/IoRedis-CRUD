import { Fragment } from 'react';
import Navbar from './Navbar';
import Head from 'next/head';

const Layout = ({ children }) => {
	return (
		<Fragment>
			<Head>
				<meta charset='UTF-8' />
				<meta name='viewport' content='width=device-width, initial-scale=1.0' />
				<link
					rel='stylesheet'
					href='https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css'
				/>

				<script src='https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js' />

				<title>Redis</title>
			</Head>
			<Navbar />
			{children}
		</Fragment>
	);
};

export default Layout;
