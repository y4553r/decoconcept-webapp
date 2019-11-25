import React, { memo } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TypoGraphy from '@material-ui/core/Typography';

const useStyle = makeStyles(() => ({
  text: {
    position: "absolute",
    top: "40%",
    left: "20%",
    color: "white"
  },
}));

export default memo(() => {
  const classes = useStyle();
  return (
    <div className={classes.text}>
      <TypoGraphy variant="h1" align="center">
        Hello there
        </TypoGraphy>
      <TypoGraphy variant="h5" align="center">
        BenDriss DecoConcept Corporatation
        </TypoGraphy>
    </div>
  );
})