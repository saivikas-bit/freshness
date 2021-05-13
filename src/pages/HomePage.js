import React, { useEffect } from 'react';
import Header from '../components/Header';
import BestSelling from '../components/Products/BestSelling';
import CustomerReviews from '../components/Products/CustomerReviews';
import SectionHeadline from '../components/Products/SectionHeadline';
import Menu from '../components/util/Menu';
import ReadBlog from '../components/util/ReadBlog';
import SubHeader from '../components/util/SubHeader';
import Footer from '../components/Footer';
import { fetchData } from '../Store/homepage-actions';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import {
	useBestSelling,
	useFarmerProducts,
	useSectionHeadline,
} from '../Store/ProductReducer';

function HomePage() {
	const dispatch = useDispatch();
	const bestSellingProducts = useSelector(useBestSelling);
	const farmerProducts = useSelector(useFarmerProducts);
	const sectionHeadline = useSelector(useSectionHeadline);

	useEffect(() => {
		dispatch(fetchData());
	}, []);

	return (
		<>
			<Header />
			<Menu />
			<SubHeader />
			<BestSelling products={farmerProducts} />
			<BestSelling products={bestSellingProducts} />
			<CustomerReviews />
			<SectionHeadline products={sectionHeadline} />
			<ReadBlog />
			<Footer />
		</>
	);
}

export default HomePage;
