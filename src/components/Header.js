import {
	Badge,
	Box,
	Divider,
	FormControl,
	IconButton,
	InputAdornment,
	TextField,
	Typography,
} from '@material-ui/core';
import {
	PersonOutline,
	Search,
	ShoppingBasketOutlined,
	ShoppingCartOutlined,
} from '@material-ui/icons';
import React from 'react';

function Header() {
	return (
		<>
			<Box
				display="flex"
				padding="0.5rem 1rem"
				justifyContent="space-between"
				style={{ textTransform: 'capitalize' }}
			>
				<Box>
					<Typography
						variant="caption"
						color="primary"
						style={{ marginRight: '1rem' }}
					>
						chat with us
					</Typography>
					<Typography variant="caption" style={{ marginRight: '1rem' }}>
						+919398983602
					</Typography>
					<Typography variant="caption" style={{ marginRight: '1rem' }}>
						saivikas12345@gmail.com
					</Typography>
				</Box>
				<Box>
					<Typography
						variant="caption"
						color="primary"
						style={{ marginRight: '1rem' }}
					>
						blog
					</Typography>
					<Typography
						variant="caption"
						color="primary"
						style={{ marginRight: '1rem' }}
					>
						About us
					</Typography>
					<Typography
						variant="caption"
						color="primary"
						style={{ marginRight: '1rem' }}
					>
						Carrers
					</Typography>
				</Box>
			</Box>
			<Divider variant="middle" />
			<Box
				display="flex"
				padding="1.5rem 1rem"
				paddingRight="1.5rem"
				justifyContent="space-between"
				alignItems="center"
				style={{ textTransform: 'capitalize' }}
			>
				<Box>
					<img src="/images/logo.png" alt="logo" style={{ height: '1rem' }} />
				</Box>
				<Box>
					<FormControl>
						<TextField
							variant="outlined"
							size="small"
							InputProps={{
								endAdornment: (
									<InputAdornment position="start">
										<Search />
									</InputAdornment>
								),
							}}
						/>
					</FormControl>
				</Box>
				<Box>
					<IconButton style={{ marginRight: '1rem' }}>
						<PersonOutline />
					</IconButton>
					<IconButton>
						<Badge badgeContent={2} color="secondary">
							<ShoppingCartOutlined />
						</Badge>
					</IconButton>
				</Box>
			</Box>
		</>
	);
}

export default Header;
