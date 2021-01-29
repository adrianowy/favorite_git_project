import React from 'react';
import { Link } from 'react-router-dom'

import { ListItem, ListItemIcon, ListItemText, Icon } from '@material-ui/core';

const ListItemMenu = (
    <>
      <Link to="/">
        <ListItem button>
            <ListItemIcon>
              <Icon>home</Icon>
            </ListItemIcon>
            <ListItemText primary="Home" />
        </ListItem>
      </Link>

      <Link to="/users">
        <ListItem button>
          <ListItemIcon>
            <Icon>people</Icon>
          </ListItemIcon>
          <ListItemText primary="Users" />
        </ListItem>
      </Link>
    </>
  );

  export default ListItemMenu;