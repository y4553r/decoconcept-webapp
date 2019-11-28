import React, { memo } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-scroll';
import Typography from '@material-ui/core/Typography';

const useStyle = makeStyles(theme => ({
  arrow: {
    cursor: "pointer",
    paddingTop: "15px",
    display: "inline-block",
    transition: "all 0.45s",
    opacity: 0.2,
    "&:hover": {
      transform: "translateY(-10px)",
      opacity: 1,
    }
  }
}));

export default memo(({ color, to }) => {
  const classes = useStyle();
  return (
    <Link to={to} spy smooth offset={0} duration={500}>
      <Typography className={classes.arrow} variant="h4">
        <FontAwesomeIcon icon={faChevronUp} style={{ color: color }} />
      </Typography>
    </Link>
  );
})