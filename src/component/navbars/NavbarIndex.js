import React, { useContext } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import FreeBreakfastIcon from '@material-ui/icons/FreeBreakfast';
import { Link } from 'react-router-dom';
import LinkUi from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import UserContext from '../../context/user/UserContext';

const useStyles = makeStyles((theme) => ({

  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  blanco: {
    textDecoration: 'none',
    color: 'white',
  },
}));

export default function NavBarIndex() {
  const { isLogin } = useContext(UserContext);
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
          {isLogin ?
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="open drawer"
            >
              <FreeBreakfastIcon ><Link to='/' /></FreeBreakfastIcon>
            </IconButton>
            :
            <>
              <Button ><Link className={classes.blanco} to='/login'>Login</Link></Button>
              <Button ><Link className={classes.blanco} to='/registro'>Registro</Link></Button>
            </>
          }
        </Toolbar>
      </AppBar >
    </div >
  );
}
