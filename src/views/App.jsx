import React, { useState } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css'

// Layout Components
import TopBar from '../components/layout/TopBar'
import SideBar from '../components/layout/SideBar'

// Material UI React
import { CssBaseline, makeStyles } from '@material-ui/core';

// Pages
import Home from "./pages/Home/Home";
import Users from "./pages/Users/Users";
import Projects from "./pages/Projects/Projects";
import Favorites from "./pages/Favorites/Favorites";

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  }
}));

export default function App() {

  const classes = useStyles();

  const [open, setOpen] = useState(true);
    
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  
  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className="App">
      <div className={classes.root}>
        <CssBaseline />
        <BrowserRouter>
          <TopBar sideBarStatus={open} handleDrawerOpen={handleDrawerOpen} />
          <SideBar sideBarStatus={open} handleDrawerClose={handleDrawerClose} /> 

          <main className={classes.content}>
            <div className={classes.appBarSpacer} />
              <Route path="/" exact component={Home}/>
              <Route path="/users" component={Users} />
              <Route path="/projects/:userId" component={Projects} />
              <Route path="/favorites" component={Favorites} />
          </main>
          </BrowserRouter>
      </div>
    </div>
  );

}