import React from 'react';
import Header from '../components/Header';
import BestSelling from '../components/Products/BestSelling';
import CustomerReviews from '../components/Products/CustomerReviews';
import SectionHeadline from '../components/Products/SectionHeadline';
import Menu from '../components/util/Menu';
import ReadBlog from '../components/util/ReadBlog';
import SubHeader from '../components/util/SubHeader';
import Footer from '../components/Footer';
import { Box } from '@material-ui/core';
function HomePage() {
	return (
		<>
			<Header />
			<Menu />
			<SubHeader />
			<BestSelling />
			<BestSelling />
			<CustomerReviews />
			<SectionHeadline />
			<ReadBlog />
			<Box>
				<Footer />
			</Box>
		</>
	);
}

export default HomePage;
