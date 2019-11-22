import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TypoGraphy from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(5),
    height: "100%",
    display: "flex",
    alignItems: "center"
  }
}));

export default () => {
  const classes = useStyles();
  return (
    <TypoGraphy variant="h6" className={classes.icon}>
      BenDriss DecoConcept
    </TypoGraphy>
  )
};