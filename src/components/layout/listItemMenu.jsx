
import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import Icon from '@material-ui/core/Icon';

const mainListItems = (
    <>
      <ListItem button>
        <ListItemIcon>
          <Icon>home</Icon>
        </ListItemIcon>
        <ListItemText primary="Home" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <Icon>people</Icon>
        </ListItemIcon>
        <ListItemText primary="Users" />
      </ListItem>
    </>
  );

  export default mainListItems;