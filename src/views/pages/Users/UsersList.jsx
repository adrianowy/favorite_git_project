import React from 'react'

import {
	Grid,
	List,
	Typography,
	ListItem,
    Icon,
    ListItemIcon,
    ListItemText,
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

                props.users.map((user, i) => (
                    <div key={i}>
                        <List>
                            <ListItem>
                                <ListItemIcon><Icon>person</Icon></ListItemIcon>
                                <ListItemText primary={user}/>
                            </ListItem>
                        </List>
                    </div>
                ))

                : <Typography variant="body2" > No Data </Typography>


            }
            
        </Grid>
    )
}