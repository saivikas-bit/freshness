import {
	Table,
	TableCell,
	TableHead,
	TableRow,
	withStyles,
	TableBody,
} from '@material-ui/core';
import React from 'react';
import { Dish } from '../../models/Dish';

const StyledTableRow = withStyles((theme) => ({
	root: {
		'&:nth-of-type(odd)': {
			backgroundColor: theme.palette.action.hover,
		},
	},
}))(TableRow);

function TableDetail() {
	const vitamins = [
		new Dish({
			vitamins: 'Vitamin A equiv.',
			quantity: '735 μg',
			percentage: '104 %',
		}),
		new Dish({
			vitamins: 'Thiamine (B1',
			quantity: '0.066 mg',
			percentage: '6 %',
		}),
		new Dish({
			vitamins: 'Niacin (B3',
			quantity: '0.983 mg',
			percentage: '7 %',
		}),
		new Dish({
			vitamins: 'Folate (Bg)',
			quantity: '19 μg',
			percentage: '8%',
		}),
		new Dish({
			vitamins: 'Vitamin C',
			quantity: '5mg',
			percentage: '4%',
		}),
		new Dish({
			vitamins: 'Vitamin E',
			quantity: '0.66 mg',
			percentage: '2%',
		}),
		new Dish({
			vitamins: 'Vitamin 5',
			quantity: '0.68 mg',
			percentage: '1%',
		}),
	];

	return (
		<Table>
			<TableHead>
				<TableRow>
					<TableCell>Vitamins</TableCell>
					<TableCell>Quantity</TableCell>
					<TableCell>%Div</TableCell>
				</TableRow>
			</TableHead>
			<TableBody>
				{vitamins.map((vitamin) => (
					<StyledTableRow>
						<TableCell>{vitamin.vitamins}</TableCell>
						<TableCell>{vitamin.quantity}</TableCell>
						<TableCell>{vitamin.percentage}</TableCell>
					</StyledTableRow>
				))}
			</TableBody>
		</Table>
	);
}

export default TableDetail;
