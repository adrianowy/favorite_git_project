import React from 'react'

import {
	Grid,
	Box,
	Typography,
	Divider,
	Paper,
	makeStyles
} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
	paper:{
		padding: theme.spacing(2)
	}
}));

export default function Home(props){

	const classes = useStyles();

	return (
		<Box m={2}>
			<Grid container spacing={2}>
				<Grid item xs={12}>
					<Typography variant="h5" gutterBottom> Home </Typography>
					<Divider />
				</Grid>
				<Grid item xs={12}>
					<Paper className={classes.paper} elevation={3}>
						<Typography variant="body2">
						Welcome,<br />
						This project was created as a hability test for react.
						</Typography>
					</Paper>
				</Grid>
			</Grid>
		</Box>
  )
}