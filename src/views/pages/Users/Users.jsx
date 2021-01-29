import React, { useState } from 'react';

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

  const [users, setUsers] = useState([]
    
    );

  const handleAdduser = (e) =>{
    e.preventDefault();
    setUsers([...users, userName]);

    console.log(users);
    console.log(userName);
  }

	return (
		<Box m={2}>
			<Grid container spacing={2}>
				<Grid item xs={12}>
					<Typography variant="h5" gutterBottom> Users </Typography>
					<Divider />
				</Grid>
				<Grid item xs={12}>
          <Paper className={classes.paper} elevation={3}>
            <UsersForm handleAdduser={handleAdduser} setUserName={setUserName} />
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