import React, { memo } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyle = makeStyles(theme => ({
  card: ({ show }) => ({
    width: "50%",
    opacity: show ? 1 : 0,
    transition: "all 1s",
  }),
  textContainer: {
    borderRadius: "10px",
    textAlign: "justify",
    padding: "20px",
    width: "80%",
    height: "65%",
    backgroundColor: "rgba(255,255,255,0.6)",
    boxShadow: "0 0 50px #aaa",
    marginTop: "13%"
  }
}));

export default memo(({ show }) => {
  const classes = useStyle({ show });

  React.useEffect(() => console.log("> TEXT: rendered"));

  return (
    <div className={classes.card}>
      <div className={classes.textContainer}>
        <Typography variant="body1">
          <span style={{ marginLeft: "25px" }}>Lorem</span> ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </Typography>
        <Typography variant="body1">
          <span style={{ marginLeft: "25px" }}>Lorem</span> ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
            dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </Typography>
        <Typography variant="body1">
          <span style={{ marginLeft: "25px" }}>Lorem</span> ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
      </Typography>
      </div>
    </div>
  );
})