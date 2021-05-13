import { Box, Grid, Typography } from '@material-ui/core';
import React from 'react';
import Slider from 'react-slick';
import ReviewCard from './ReviewCard';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Left = (props) => {
	const { className, style, onClick } = props;
	return (
		<div className={className} onClick={onClick} style={{ top: '34%' }}>
			<img src="/images/arrowleft.png" alt="" />
		</div>
	);
};
const Right = (props) => {
	const { className, style, onClick } = props;
	return (
		<div
			className={className}
			style={{ left: '-34px', top: '34%' }}
			onClick={onClick}
		>
			<img src="/images/arrowright.png" alt="" />
		</div>
	);
};

function CustomerReviews() {
	const settings = {
		className: 'center',
		centerMode: true,
		infinite: true,
		centerPadding: '200px',
		slidesToShow: 3,
		speed: 500,
		// dots: true,
		nextArrow: <Left />,
		prevArrow: <Right />,
		// arrows: true,
	};
	return (
		<Box>
			<Grid container direction="column">
				<Grid item container>
					<Box padding="2rem 2.2rem" width="99.6%">
						<Box display="flex" justifyContent="space-between">
							<Typography
								variant="subtitle1"
								style={{ fontWeight: 'bold', marginLeft: '2rem' }}
							>
								Our Customer Reviews
							</Typography>
						</Box>
						<Slider {...settings}>
							<ReviewCard />
							<ReviewCard />
							<ReviewCard />
							<ReviewCard />
							<ReviewCard />
							<ReviewCard />
							<ReviewCard />
						</Slider>
					</Box>
				</Grid>
			</Grid>
		</Box>
	);
}

export default CustomerReviews;
