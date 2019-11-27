import React, { memo } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

const useStyle = makeStyles(theme => ({
  card: ({ show }) => ({
    width: "50%",
    opacity: show ? 1 : 0,
    transition: "all 1s",
  }),
  bigAvatar: {
    marginLeft: theme.spacing(28),
    marginTop: theme.spacing(10),
    height: theme.spacing(45),
    width: theme.spacing(45),
    boxShadow: "0 0 0 10px hsl(0, 0%, 50%),0 0 0 15px hsl(0, 0%, 60%),0 0 0 20px hsl(0, 0%, 70%),0 0 0 25px hsl(0, 0%, 80%),0 0 0 30px hsl(0, 0%, 90%)",
    border: "8px white solid",
    display: "flex",
    flexDirection: "column"
  },
  avatar: ({ image }) => ({
    width: "100%",
    height: "100%",
    transition: "transform .5s",
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover',
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "&:hover": {
      transform: "scale(1.1)"
    }
  }),
  nameContainer: {
    textAlign: "center",
    marginTop: '30px',
    marginLeft: '3.5em'
  },
  profession: {
    marginTop: '8px',
    color: "#555",
    fontWeight: "bold"
  },
}));

export default memo(({ image, name, profession, show }) => {
  const classes = useStyle({ image, show });

  React.useEffect(() => console.log("> AVATAR: rendered"));

  return (
    <div className={classes.card}>
      <Avatar className={classes.bigAvatar}>
        <div className={classes.avatar} />
      </Avatar>
      <div className={classes.nameContainer}>
        <Typography variant="h2">{name}</Typography>
        <Typography variant="h4" className={classes.profession}>{profession}</Typography>
      </div>
    </div>
  );
})