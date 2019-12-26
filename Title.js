import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyle = makeStyles(theme => ({
  title: {
    fontFamily:"Times New Roman",
    textAlign: "center",
    color: "white",
    textShadow: "2px 2px 8px #404040",
    textTransform: "uppercase",
    letterSpacing: ".13em",
    paddingTop: theme.spacing(1),
    textRendering: "optimizeLegibility"
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