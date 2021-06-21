import React, { useState } from 'react';
import {IconButton, InputAdornment, Container, makeStyles, Typography, Avatar, Button, TextField, CssBaseline} from '@material-ui/core';
import {LockOutlined, Visibility, VisibilityOff} from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  passButton: {
    position: 'relative',
    right: '-10px',
  },
  textInput: {
    margin: theme.spacing(1, 0, 1, 0),
  },
  textInput2: {
    margin: theme.spacing(0, 0, 0, 0),
  },
}));

export default function Logear() {
  const classes = useStyles();
  const [data, setData] = useState({
    userOrEmail: '', pass: ''
  });
  const [isError, setError] = useState({
    userOrEmail: false, pass: false
  });
  const [textError, setTextError] = useState({
    userOrEmail: '', pass: ''
  });
  const [passShow, setPassShow] = useState(false);

  const handleChange = ({ target }) => {
    setData(data => ({ ...data, [target.name]: target.value.replace(/\s\s+/g, ' ') }));
    //console.log(target.name + ' : ' + target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlined />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit} noValidate>
          <TextField onChange={handleChange} value={data.userOrEmail} helperText={textError.userOrEmail} error={isError.userOrEmail} variant="outlined" margin="normal" fullWidth id="userOrEmail" 
          label="Usuario o email" name="userOrEmail" autoComplete="userOrEmail"
          />
          <TextField onChange={handleChange} value={data.pass} helperText={textError.pass}
            error={isError.pass} type={passShow ? "text" : "password"} variant="outlined"
            margin="normal" id="pass" label="Contraseña" name="pass" autoComplete="pass" size='small' fullWidth
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton className={classes.passButton} onClick={() => setPassShow(passShow => !passShow)}>
                    {passShow ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              )
            }}
            className={isError.pass ? classes.textInput2 : classes.textInput} />
          <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
            Sign In
          </Button>
        </form>
      </div>
    </Container>
  );
}