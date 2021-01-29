import React from 'react';
import { Link } from 'react-router-dom'

import { ListItem, ListItemIcon, ListItemText, Icon, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  menuLink: {
      textDecoration: 'none',
  }
}));

export default function ListItemMenu(){

  const classes = useStyles();

  const menus = [
    {
      title: "Home",
      icon: "home",
      to: "/"
    },
    {
      title: "Users",
      icon: "people",
      to: "/users"
    }
  ]

  return (
    <>
      {
        menus.map((m, i) => (
          <Link to={m.to} style={{ color: 'inherit', textDecoration: 'none' }} key={i}>
          <ListItem button>
              <ListItemIcon>
                <Icon>{m.icon}</Icon>
              </ListItemIcon>
              <ListItemText primary={m.title} />
          </ListItem>
        </Link>
        ))
      }
      
    </>
  )
}
