import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyle = makeStyles(theme => ({
  title: {
    textAlign: "center",
    textTransform: "uppercase",
    letterSpacing: ".15em",
    paddingTop: theme.spacing(3),
    textRendering: "optimizeLegibility",
    color: "#2c2c2c",
    textShadow: "4px 4px 0px #d5d5d5, 7px 7px 0px rgba(0, 0, 0, 0.2)",
  },  
}));

export default ({ title }) => {
  const classes = useStyle();
  return (
  <div>
    <Typography variant="h1" className={classes.title}>
      {title}
    </Typography>
  </div>
  );
}