import React, { memo } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TypoGraphy from '@material-ui/core/Typography';
import { Link } from 'react-scroll';

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
    top: "95%",
    left: "49%",
    cursor: "pointer"
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
        <TypoGraphy variant="h4" className={classes.arrow}>
          <Link to="presentation" spy smooth offset={0} duration={500}>
            <Down color="white" />
          </Link>
        </TypoGraphy>
    </div>
  );
})