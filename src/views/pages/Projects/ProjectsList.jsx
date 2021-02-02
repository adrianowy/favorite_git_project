/* eslint-disable react/jsx-no-target-blank */
import React from 'react'

import {
    Grid,
    List,
    ListItem,
    ListItemAvatar,
    ListItemSecondaryAction,
    ListItemText,
    Avatar,
    Icon,
    IconButton
} from '@material-ui/core'

export default function ProjectsList(props){


    return (
        <Grid item xs={12} md={6}>
          <div>
            <List>

                {
                    props.repositories.map(repo => (
                        <ListItem key={repo.id}>
                            <ListItemAvatar>
                                <Avatar><Icon>folder</Icon></Avatar>
                            </ListItemAvatar>
                                <ListItemText primary={repo.project} />
                            <ListItemSecondaryAction>
                                <a href={repo.reference} target="_blank" title='Link to Repository'>
                                    <IconButton edge="end" aria-label="link-github">
                                        <Icon>launch</Icon>
                                    </IconButton>
                                </a>
                                <IconButton edge="end" aria-label="favorite" title='Clock to favorite this project' onClick={() => props.handleFavorite(repo)}>
                                    <Icon color={repo.favorite ? 'primary' : 'action'} >star</Icon>
                                </IconButton>
                            </ListItemSecondaryAction>
                        </ListItem>       
                    ))
                }

            </List>
          </div>
        </Grid>
    )
}