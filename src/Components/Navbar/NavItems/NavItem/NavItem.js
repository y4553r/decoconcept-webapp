import React from 'react';
// import { NavLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from "react-scroll";

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
      backgroundColor: "rgba(255,255,255, 0.1)",
      cursor: "pointer"
    }
  },
  activeLink: {
    backgroundColor: "rgba(255,255,255, 0.1)",
  },
}));

export default ({ title, id }) => {
  // React.useEffect(() => console.log("> NAVITEM: rendered"));

  const classes = useStyles();
  return (
    // <NavLink exact to={path} activeClassName={classes.activeLink} className={classes.link}>{title.toUpperCase()}</NavLink>
    <Link
      activeClass={classes.activeLink}
      to={id}
      spy
      smooth
      offset={0}
      duration={500}
      className={classes.link}
    >
      {title.toUpperCase()}
    </Link>
  );
}