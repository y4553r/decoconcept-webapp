import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

import Slide from './Slide/Slide';
import Text from './Text/Text';

import bg1 from '../../assets/img/bg1.jpg';
import bg2 from '../../assets/img/bg2.jpg';
import bg3 from '../../assets/img/bg3.jpg';

const IMAGES = [bg1, bg2, bg3];

const useStyle = makeStyles(theme => ({
  background: {
    height: "100vh",
    color: "white",
    position: "relative",
    whiteSpace: "nowrap",
    overflow: "hidden"
  },
  slideWrapper: state => ({
    transform: `translateX(${state.translateValue}px)`,
    transition: "transform ease-out 1s",
    height: "100%",
    position: "relative"
  }
  )
}));


const Slider = () => {
  const slideWidth = () => {
    return document.querySelector("#slide").clientWidth;
  }

  // current index value
  const [current, setCurrent] = useState(0);
  const [translateValue, setTranslateValue] = useState(0);

  // Handle current index and translate value change
  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrent((current + 1) % 3);
    }, 4000);
    return () => {
      clearTimeout(timer);
    };
  }, [current, translateValue]);

  useEffect(() => {
    if (current === 0)
      setTranslateValue(0);
    else
      setTranslateValue(prev => prev - slideWidth());
  }, [current]);

  const classes = useStyle({ translateValue: translateValue });
  return (
    <>
      <Paper className={classes.background} square>
        <div className={classes.slideWrapper}>
          {IMAGES.map((img, i) => <Slide key={i} img={img} />)}
        </div>
      </Paper>
      <Text />
    </>
  );
}

export default Slider;