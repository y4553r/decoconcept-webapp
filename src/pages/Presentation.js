import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from "react-scroll";

import Title from '../Components/Title/Title';
import Avatar from '../Components/Avatar/Avatar';
import Text from '../Components/Text/Text';
import Up from '../Components/Arrows/up';
import Down from '../Components/Arrows/down';

import avatar from '../assets/img/avatar.jpg';
import bg from '../assets/img/bg.svg';
import { Typography } from '@material-ui/core';

const useStyle = makeStyles(theme => ({
  root: {
    height: '100vh',
    backgroundImage: `url(${bg})`,
    /* background by SVGBackgrounds.com */
  },
  container: {
    display: "flex"
  },
  goUp: {
    marginTop: theme.spacing(2),
    cursor: "pointer"
  }
}));

export default ({ id }) => {
  useEffect(() => console.log("> PRESENTATION: rendered"));
  const classes = useStyle();

  const [showAvatar, setShowAvatar] = useState(false);
  const [showText, setShowText] = useState(false);
  const [showTitle, setShowTitle] = useState(false);

  useEffect(() => {
    let timerAvatar, timerText, timerTitle;

    if (true) {
      timerTitle = setTimeout(() => {
        setShowTitle(true);
      }, 500);
      timerAvatar = setTimeout(() => {
        setShowAvatar(true);
      }, 700);
      timerText = setTimeout(() => {
        setShowText(true);
      }, 900);
    }
    return () => {
      clearTimeout(timerTitle);
      clearTimeout(timerAvatar);
      clearTimeout(timerText);
    }
  });

  return (
    <div className={classes.root} id={id}>
      <div style={{ opacity: showTitle ? 1 : 0, transition: "all 1s" }}>
        <Typography align="center" variant="h4">
          <Link className={classes.goUp} to="home" spy smooth offset={0} duration={500}>
            <Up />
          </Link>
        </Typography>
        <Title title="Presentation" show={showTitle} />
      </div>
      {/* CONTENT */}
      <div className={classes.container}>
        <Avatar image={avatar} name="Abougueni Yasser" profession="OWNER" show={showAvatar} />
        <Text show={showText} />
      </div>
        <Typography align="center" variant="h4">
          <Link className={classes.goUp} to="home" spy smooth offset={0} duration={500}>
            <Down />
          </Link>
        </Typography>
    </div>
  );
}