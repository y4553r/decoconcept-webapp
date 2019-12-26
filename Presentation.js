import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import Title from '../Components/Title/Title';
import Avatar from '../Components/Avatar/Avatar';
import Text from '../Components/Text/Text';
import Up from '../Components/Arrows/up';
import Down from '../Components/Arrows/down';

import avatar from '../assets/img/avatar.jpg';
import wv from '../assets/img/wv.svg';

const useStyle = makeStyles(theme => ({
  root: {
    height: '100vh',
    backgroundImage: `url(${wv})`,
  },
  container: {
    display: "flex",
    alignItems: "center",
  },
  arrow: {
    textAlign: "center",
    marginBottom: "15px"
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
    <div className={`${classes.root} scroll_child`}>
      <Container id={id} maxWidth="lg" style={{height: "100vh", display: "flex", flexDirection: "column", justifyContent: "space-between"}}>
        <div style={{ opacity: showTitle ? 1 : 0, transition: "all 1s" }}>

          <div className={classes.arrow}>
            <Up to="home" color="white" />
          </div>

          <Title title="Presentation" show={showTitle} />
        </div>

        <div className={classes.container}>
          <Avatar image={avatar} name="Abougueni Yasser" profession="OWNER" show={showAvatar} />
          <Text show={showText} />
        </div>

        <div className={classes.arrow}>
          <Down to="" color="white" />
        </div>
      </Container>
    </div>
  );
}