import { Avatar, Box, Paper, Typography } from '@material-ui/core';
import React from 'react';

function ReviewCard() {
	return (
		<Paper style={{ margin: '2rem 2rem 2rem 0' }}>
			<Box
				display="flex"
				flexDirection="column"
				position="relative"
				padding="2rem"
				alignItems="center"
				overflow="visible"
			>
				<Box textAlign="center">
					<Typography align="center" variant="caption">
						“ This is an super space for your customers qoute. Don’t worry it
						works smooth as pie. You will get all what you need by writiing a
						text here “
					</Typography>
				</Box>
				<Box padding="0.5rem">
					<Typography variant="caption">Name and Surname</Typography>
				</Box>
				<Box position="absolute" bottom="-10%" left="45%">
					<Avatar src="https://images.unsplash.com/photo-1620736214006-6b0ad171bf48?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
				</Box>
			</Box>
		</Paper>
	);
}

export default ReviewCard;
