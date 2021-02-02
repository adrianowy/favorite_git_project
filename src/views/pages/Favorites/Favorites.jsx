import React, { useState } from 'react';

import FavoritesList from './FavoritesList'

import {
	Grid,
	Box,
	Typography,
	Divider,
	Paper,
	FormControl,
	InputLabel,
	Select,
	MenuItem,

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
	
	function handleUser(user){
		setActiveUser(user);
	}

	return (
		<Box m={2}>
			<Grid container spacing={2}>
				<Grid item xs={12}>
					<Typography variant="h5" gutterBottom> Favorite Projects </Typography>
					<Divider />
				</Grid>

				<Grid item xs={12}>
          			<Paper className={classes.paper} elevation={3}>
						{
							users.length > 0 ?
							<FormControl variant="outlined">
								<InputLabel id="demo-simple-select-outlined-label">Choose the User</InputLabel>
								<Select
									labelId="demo-simple-select-outlined-label"
									id="demo-simple-select-outlined"
									label="Language"
									name="Language"
									onChange={(e) => handleUser(e.target.value)}
									style={{width: '300px'}}
									>
									{
										users.map(u => (
											<MenuItem key={u.id} value={u}> {u.name.toUpperCase()} </MenuItem>
										))
									}
								</Select>
							</FormControl>
							: <p>NO USERS</p>
						}
					</Paper>
				</Grid>

				<Grid item xs={12}>
					<Paper className={classes.paper} elevation={3}>
						{
							activeUser.favorites && activeUser.favorites.length > 0 ?
							<FavoritesList favorites={activeUser.favorites}/>
							: <p>NO FAVORITE PROJECTS</p>
						}
					</Paper>
				</Grid>

			</Grid>
		</Box>
  	)

}