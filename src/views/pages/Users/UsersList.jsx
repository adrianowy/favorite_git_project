import React from 'react'
import { Link } from 'react-router-dom'

import {
	Grid,
	List,
	Typography,
	ListItem,
    Icon,
    ListItemIcon,
    ListItemText,
    ListItemSecondaryAction,
    IconButton,
	makeStyles
} from '@material-ui/core'

export default function UsersList(props){
    return (
        <Grid item xs={12} md={6}>
            <Typography variant="h6" >
                Users List
            </Typography>
            {
                

                props.users.length > 0 ?

                props.users.map(user => (
                    <div key={user.id}>
                        <List>
                            <ListItem>
                                <ListItemIcon><Icon>person</Icon></ListItemIcon>
                                <ListItemText primary={user.name+' ('+user.favorites.length+')'}/>
                                <Link to={"/projects/"+user.id} style={{ color: 'inherit', textDecoration: 'none' }} params={{ id: 'asd' }} >
                                    <ListItemSecondaryAction>
                                        <IconButton edge="end" aria-label="link" title="Choose the Favorite Projects">
                                            <Icon>launch</Icon>
                                        </IconButton>
                                    </ListItemSecondaryAction>
                                </Link>
                            </ListItem>
                        </List>
                    </div>
                ))

                : <Typography variant="body2" > No Data </Typography>


            }
            
        </Grid>
    )
}