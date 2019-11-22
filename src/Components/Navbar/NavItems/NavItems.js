import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import NavItem from './NavItem/NavItem';

const useStyles = makeStyles(theme => ({
  links: {
    height: "100%",
    display: "flex",
    margin: "0 auto"
  }
}));

export default ({ items }) => {
  const classes = useStyles();
  return (
    <div className={classes.links}>
      {items.map(item => <NavItem key={item.id} {...item} />)}
    </div>
  );
}