import React from 'react';
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  link: {
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
    color: "white",
    textDecoration: "none",
    height: "100%",
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
    "&:hover": {
      backgroundColor: "rgba(0,0,255, 0.2)",
    }
  },
  activeLink: {
    backgroundColor: "rgba(0,0,255, 0.2)",
  },
}));

export default ({ title, path }) => {
  const classes = useStyles();
  return (
    <NavLink exact to={path} activeClassName={classes.activeLink} className={classes.link}>{title.toUpperCase()}</NavLink>
  );
}