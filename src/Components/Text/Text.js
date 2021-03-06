import React, { memo } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyle = makeStyles(theme => ({
  card: ({ show }) => ({
    width: "60%",
    opacity: show ? 1 : 0,
    transition: "all 1s",
    display: "inline-block",
  }),
  textContainer: {
    borderRadius: "18px",
    textAlign: "justify",
    padding: "20px",
    width: "90%",
    backgroundColor: "rgba(255,255,255,0.4)",
    boxShadow: "0 0 50px #aaa",
    // marginTop: "10%"
  }
}));

export default memo(({ show }) => {
  const classes = useStyle({ show });

  React.useEffect(() => console.log("> TEXT: rendered"));

  return (
    <div className={classes.card}>
      <div className={classes.textContainer}>
        <Typography variant="body1">
          <span style={{ marginLeft: "25px" }}>ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
            dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</span>
      </Typography>
       
      </div>
    </div>
  );
})