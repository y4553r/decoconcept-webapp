import React, { memo } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TypoGraphy from '@material-ui/core/Typography';

import Down from '../../Arrows/down';

const useStyle = makeStyles(() => ({
  text: {
    position: "absolute",
    top: "40%",
    left: "20%",
    color: "white"
  },
  arrow: {
    position: "absolute",
    top: "93%",
    left: "49%",
  }
}));

export default memo(() => {
  const classes = useStyle();
  return (
    <div>
      <div className={classes.text}>
        <TypoGraphy variant="h1" align="center">
          Hello there
        </TypoGraphy>
        <TypoGraphy variant="h5" align="center">
          BenDriss DecoConcept Corporatation
        </TypoGraphy>

      </div>
      <div className={classes.arrow}>
        <Down to="presentation" color="white" />
      </div>
    </div>
  );
})