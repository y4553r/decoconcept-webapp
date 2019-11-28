import React, { memo } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-scroll';
import Typography from '@material-ui/core/Typography';

const useStyle = makeStyles(theme => ({
  arrow: {
    cursor: "pointer",
    display: "inline-block",
    transition: "all 0.45s",
    opacity: 0.2,
    "&:hover": {
      transform: "translateY(10px)",
      opacity: 1,
    }
  }
}));

export default memo(({ color, to }) => {
  const classes = useStyle();
  return (
    <Typography variant="h4" className={classes.arrow}>
      <Link to={to} spy smooth offset={0} duration={500}>
        <FontAwesomeIcon icon={faChevronDown} style={{ color: color }} />
      </Link>
    </Typography>
  );
})