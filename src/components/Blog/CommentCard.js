import {
	Avatar,
	Box,
	Card,
	CardContent,
	CardHeader,
	makeStyles,
	Typography,
} from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles({
	card: {
		padding: '0.5rem',
		borderRadius: '10px',
	},
	header: {
		padding: 0,
	},
	cardbody: {
		padding: '0px !important',
		paddingTop: '1rem !important',
	},
	admin: {
		color: 'green',
		marginLeft: '0.5rem',
		background: '#F4F8EC',
		padding: '0.1rem 0.4rem',
		borderRadius: '10px',
	},
	body1: {
		fontSize: '10px',
	},
});

function CommentCard() {
	const classes = useStyles();
	return (
		<Card className={classes.card}>
			<CardHeader
				avatar={
					<Avatar src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" />
				}
				title={
					<Typography variant="caption">
						Author
						<span className={classes.admin}>Admin</span>
					</Typography>
				}
				subheader="22 6 2021"
				className={classes.header}
			/>

			<CardContent className={classes.cardbody}>
				<Typography variant="body1" className={classes.body1}>
					Hi everyone, we have been working hard with the team bringing a new
					articles. It has passed a few months till we released it in case of
					traveling and shooting, hopefully you’ll love it.
				</Typography>
			</CardContent>
		</Card>
	);
}

export default CommentCard;
