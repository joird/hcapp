import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import FreeBreakfastIcon from '@material-ui/icons/FreeBreakfast';
import { Link } from 'react-router-dom';
import LinkUi from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  blanco: {
    color: 'white',
  },
}));

export default function NavBarIndex() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <FreeBreakfastIcon ><Link to='/' /></FreeBreakfastIcon>
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            Hover Catering
          </Typography>

          <Typography className={classes.root}>
            <Link to='/login'>Login</Link>
          </Typography>
          <Typography className={classes.root}>
            <Link to='/registro'>Registro</Link>
          </Typography>
          <Button className={classes.blanco}><Link to='/registro'>Registro</Link></Button>

        </Toolbar>
      </AppBar>
    </div>
  );
}
