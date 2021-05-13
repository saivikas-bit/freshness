import { Box, Card, Typography } from '@material-ui/core';
import React from 'react';

function BlogListCard() {
	return (
		<Box display="flex" justifyContent="space-between" alignItems="flex-start">
			<Box
				display="flex"
				flexDirection="column"
				justifyContent="space-between"
				height="90px"
				width="60%"
			>
				<Typography variant="subtitle2" style={{ fontWeight: 'bold' }}>
					Space for your heding is here, write what you need
				</Typography>
				<Typography variant="caption">
					Author<span style={{ marginLeft: '0.5rem' }}>30 2 2021</span>
				</Typography>
			</Box>
			<Box>
				<img
					src="https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGZvb2R8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
					alt=""
					style={{ height: '96px', width: '125px', borderRadius: '10px' }}
				/>
			</Box>
		</Box>
	);
}

export default BlogListCard;
