import React, { memo } from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles(theme => ({
  slide: props => ({
    display: "inline-block",
    height: "100%",
    width: "100%",
    backgroundImage: `url(${props.img})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  }),
  filter: {
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.5)"
  }
}));

export default memo(({ img }) => {
  const classes = useStyle({ img });
  return (
    <div id="slide" className={classes.slide}>
      <div className={classes.filter} />
    </div>
  );
})