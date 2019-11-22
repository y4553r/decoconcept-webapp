import React from 'react';
import uuid from 'uuid/v4';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import Logo from './Logo/Logo';
import NavItems from './NavItems/NavItems'

const ITEMS = [
  { id: uuid(), title: "home", path: "/" },
  { id: uuid(), title: "who are we?", path: "/infos" },
  { id: uuid(), title: "our products", path: "/products" },
  { id: uuid(), title: "our services", path: "/services" },
  { id: uuid(), title: "contact us", path: "/contact" },
];

const useStyles = makeStyles(theme => ({
  root: {
    height: "8vh",
  },
  appbar: {
    height: "100%",
  },
  toolbar: {
    height: "100%",
  }
}));

export default () => {
  const classes = useStyles();
  return (
    <header className={classes.root}>
      <AppBar className={classes.appbar} color="primary" position="static">
        <Toolbar className={classes.toolbar} >
          <Logo />
          <NavItems items={ITEMS} />
        </Toolbar>
      </AppBar>
    </header>
  );
}