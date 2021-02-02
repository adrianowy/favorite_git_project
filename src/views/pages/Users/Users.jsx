import React, { useState, useEffect } from 'react';

// generate uuid
import uuid from './../../../utils/GenerateUuid'

import UsersForm from './UsersForm'
import UsersList from './UsersList'

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

	const [userName, setUserName] = useState("");
	const [error, setError] = useState(false);
	const [users, setUsers] = useState( JSON.parse(localStorage.getItem('users')) || [] );

	const handleAdduser = (e) =>{
		e.preventDefault();

		if( userName.trim().length > 0){
			setUsers([ ...users, {id: uuid(), name: userName.trim(), favorites: [] } ]);
			setError(false);
		}else{
			setError(true);
		}
	}

	useEffect(() => {
		localStorage.setItem('users', JSON.stringify(users));
	}, [users])

	return (
		<Box m={2}>
			<Grid container spacing={2}>
				<Grid item xs={12}>
					<Typography variant="h5" gutterBottom> Users </Typography>
					<Divider />
				</Grid>

				<Grid item xs={12}>
          			<Paper className={classes.paper} elevation={3}>
            			<UsersForm 
							setUserName={setUserName}
							handleAdduser={handleAdduser}
							error={error}
						/>
					</Paper>
				</Grid>

        		<Grid item xs={12}>
          			<Paper className={classes.paper} elevation={3}>
            			<UsersList users={users}/>
					</Paper>
				</Grid>

			</Grid>
		</Box>
  	)

}