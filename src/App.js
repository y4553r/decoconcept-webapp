import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseLine from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

import Navbar from './Components/Navbar/Navbar';
import Slider from './Components/Slider/Slider';

const useStyle = makeStyles(theme => ({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100%"
  }
}));

function App() {
  const classes = useStyle();

  return (
    <>
      <CssBaseLine />
      <Navbar />
      <Slider>
        <Container className={classes.container} />
      </Slider>
    </>
  );
}

export default App;
