import { Box, Button, Grid } from '@material-ui/core';
import { ArrowDropDown } from '@material-ui/icons';
import React from 'react';

function Menu() {
	return (
		<Box>
			<Grid
				container
				justify="space-evenly"
				style={{ background: 'rgb(0,0,0)', color: '#fff', padding: '0.5rem' }}
			>
				<Grid item>
					<Button style={{ color: '#fff' }}>
						Bakery <ArrowDropDown />
					</Button>
				</Grid>
				<Grid item>
					<Button style={{ color: '#fff' }}>
						Fruits and vegitables <ArrowDropDown />
					</Button>
				</Grid>
				<Grid item>
					<Button style={{ color: '#fff' }}>
						Meat and Fish <ArrowDropDown />
					</Button>
				</Grid>
				<Grid item>
					<Button style={{ color: '#fff' }}>
						Drinks <ArrowDropDown />
					</Button>
				</Grid>
				<Grid item>
					<Button style={{ color: '#fff' }}>
						Kitchen <ArrowDropDown />
					</Button>
				</Grid>
				<Grid item>
					<Button style={{ color: '#fff' }}>
						Special Nutrition <ArrowDropDown />
					</Button>
				</Grid>
				<Grid item>
					<Button style={{ color: '#fff' }}>
						Baby <ArrowDropDown />
					</Button>
				</Grid>
				<Grid item>
					<Button style={{ color: '#fff' }}>
						Pharmacy <ArrowDropDown />
					</Button>
				</Grid>
			</Grid>
		</Box>
	);
}

export default Menu;
