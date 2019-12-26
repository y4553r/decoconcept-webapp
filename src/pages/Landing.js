import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import Slider from '../Components/Slider/Slider';

const useStyle = makeStyles(theme => ({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  }
}));

export default ({ id }) => {
  const classes = useStyle();

  return (
    <div className="scroll_child">
      <div id="home">
        <Slider>
          <Container className={classes.container} />
        </Slider>
      </div>
    </div>
  );
}