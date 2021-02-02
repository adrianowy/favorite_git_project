import React, { useState } from 'react';

import FavoriteForm from './FavoriteForm'
import FavoritesList from './FavoritesList'

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

export default function Users(props){

	const classes = useStyles();

	const [users, setUsers] = useState( JSON.parse(localStorage.getItem('users')) || [] );
    const [activeUser, setActiveUser] = useState([]);

	return (
		<Box m={2}>
			<Grid container spacing={2}>
				<Grid item xs={12}>
					<Typography variant="h5" gutterBottom> Favorite Projects </Typography>
					<Divider />
				</Grid>

				<Grid item xs={12}>
          			<Paper className={classes.paper} elevation={3}>
            			<FavoriteForm users={users}/>
					</Paper>
				</Grid>

        		<Grid item xs={12}>
          			<Paper className={classes.paper} elevation={3}>
            			<FavoritesList favorites={activeUser.favorites}/>
					</Paper>
				</Grid>

			</Grid>
		</Box>
  	)

}