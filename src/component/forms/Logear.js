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
}));

export default function Logear() {
  const classes = useStyles();
  const [data, setData] = useState({
    nombre: '', apellido: '', usuario: '', email: '', pass: '', dni: '', fechaNacimiento: ''
  });
  const [isError, setError] = useState({
    nombre: false, apellido: false, usuario: false, email: false, pass: false, dni: false, fechaNacimiento: false
  });
  const [textError, setTextError] = useState({
    nombre: '', apellido: '', usuario: '', email: '', pass: '', dni: '', fechaNacimiento: ''
  });
  const [passShow, setPassShow] = useState(false);

  const handleChange = ({ target }) => {
    setData(data => ({ ...data, [target.name]: target.value.replace(/\s\s+/g, ' ') }));
    //console.log(target.name + ' : ' + target.value);
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
        <form className={classes.form} noValidate>
          <TextField variant="outlined" margin="normal" fullWidth id="usermail" 
          label="Usuario o email" name="usermail" autoComplete="usermail"
            autoFocus
          />
          <TextField value={data.pass} onChange={handleChange} helperText={textError.pass}
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