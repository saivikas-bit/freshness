import React from 'react';
import CategoryGrid from '../components/Categories/CategoryGrid';
import CategoryHeader from '../components/Categories/CategoryHeader';
import Header from '../components/Header';
import Menu from '../components/util/Menu';
import Footer from '../components/Footer';
function CategoryPage() {
	return (
		<>
			<Header />
			<Menu />
			<CategoryHeader />
			<CategoryGrid />
			<Footer />
		</>
	);
}

export default CategoryPage;
