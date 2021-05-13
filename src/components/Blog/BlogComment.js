import {
	Box,
	Grid,
	Typography,
	TextField,
	FormControlLabel,
	Checkbox,
	Button,
	makeStyles,
} from '@material-ui/core';
import CommentCard from './CommentCard';
import React from 'react';
// import classes from '*.module.css';

const useStyles = makeStyles({
	Info: {
		padding: '0 1rem',
		borderRadius: '8px',
		border: '1px solid #D1D1D1',
		fontSize: '10px !important',
	},
});

function BlogComment() {
	const classes = useStyles();
	return (
		<Box margin="auto" width="30vw">
			<Grid container style={{ paddingTop: '1rem' }}>
				<Grid item>
					<Typography variant="h6" style={{ fontWeight: 'bold' }}>
						Leave a Reply
					</Typography>
				</Grid>
				<Grid item>
					<Typography variant="h6">
						Allrady have an account? Sign in to leave a reply.
					</Typography>
				</Grid>
				<Grid container item spacing={2} style={{ paddingTop: '1rem' }}>
					<Grid item lg={6}>
						<Typography>Name</Typography>
						<TextField
							variant="outlined"
							size="small"
							placeholder="name"
							fullWidth
						/>
					</Grid>
					<Grid item lg={6}>
						<Typography>Email Address</Typography>
						<TextField
							variant="outlined"
							size="small"
							placeholder="name"
							fullWidth
						/>
					</Grid>
				</Grid>
				<Grid item lg={10} style={{ paddingTop: '1rem' }}>
					<Box className={classes.Info}>
						<FormControlLabel
							control={<Checkbox size="small" />}
							label="Save my name and email in this browser for a next time comment."
						/>
					</Box>
				</Grid>
				<Grid item lg={12} style={{ paddingTop: '1rem' }}>
					<Typography>Comment</Typography>
					<TextField multiline rows={4} variant="outlined" fullWidth />
				</Grid>
				<Grid item lg={12} style={{ paddingTop: '1rem' }}>
					<Button
						variant="contained"
						color="primary"
						disableElevation
						size="large"
					>
						Send a Comment
					</Button>
				</Grid>
				<Grid item container lg={12} style={{ paddingTop: '2rem' }}>
					<Grid item>
						<Typography variant="h6">Comments</Typography>
					</Grid>
					<Grid
						item
						container
						direction="column"
						alignItems="flex-end"
						spacing={3}
						style={{ paddingTop: '1rem' }}
					>
						<Grid item lg={12}>
							<CommentCard />
						</Grid>
						<Grid item lg={10}>
							<CommentCard />
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</Box>
	);
}

export default BlogComment;
