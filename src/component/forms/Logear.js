import React, { useState } from 'react';
import { IconButton, InputAdornment, Container, makeStyles, Typography, Avatar, Button, TextField, CssBaseline } from '@material-ui/core';
import { LockOutlined, Visibility, VisibilityOff } from '@material-ui/icons';

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
    width: '100%',
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
  textError: {
    color: '#e53935',
    fontSize: '14px',
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

  const [formError, setFormError] = useState('');

  const [passShow, setPassShow] = useState(false);

  const validEmail = new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

  const url = 'http://localhost:4000/api/v1/login';

  const handleChange = ({ target }) => {
    setData(data => ({ ...data, [target.name]: target.value.replace(/\s\s+/g, ' ') }));
    //console.log(target.name + ' : ' + target.value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validar()) {
      const datos = {
        data: {
          [validEmail.test(data.userOrEmail) ? 'email' : 'usuario']: data.userOrEmail,
          pass: data.pass
        }
      }
      console.log(datos);
      await fetch(url,
        {
          method: 'POST',
          body: JSON.stringify(datos),
          headers: {
            "Content-type": "application/json"
          }
        })
        .then(async res => {
          const respuesta = await res.json();
          if(respuesta.usuario){
            console.log(respuesta.usuario);
          } else if(res.status === 403) {
            setFormError(respuesta.message)
          }
        })
        .catch(console.log("ERROR"));
    } else {

    }
  }

  const validar = () => {
    let error = 0;
    setError(isError => ({ ...isError, userOrEmail: false, pass: false }));
    setTextError(textError => ({ ...textError, userOrEmail: '', pass: '' }))
    setFormError('');
    if (data.userOrEmail.length === 0) {
      error++;
      setError(isError => ({ ...isError, userOrEmail: true }));
      setTextError(textError => ({ ...textError, userOrEmail: 'Usuario o email necesario.' }))
    }

    if (data.pass.length === 0) {
      error++;
      setError(isError => ({ ...isError, pass: true }));
      setTextError(textError => ({ ...textError, pass: 'Contrase??a necesaria.' }))
    }

    return error === 0;
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
            margin="normal" id="pass" label="Contrase??a" name="pass" autoComplete="pass" fullWidth
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
          <Typography className={classes.textError}>
            {formError}
          </Typography>
          <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
            Sign In
          </Button>
        </form>
      </div>
    </Container>
  );
}