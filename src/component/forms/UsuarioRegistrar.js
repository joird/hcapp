import React, { useState } from 'react';
import { makeStyles, IconButton, InputAdornment, Typography, Grid, Card, Avatar, Button, CssBaseline, TextField } from '@material-ui/core';
import { CardChecklist, Envelope, Person, CardHeading, CardText } from 'react-bootstrap-icons';
import { AccountBox, Visibility, VisibilityOff } from '@material-ui/icons';
import axios from 'axios';
const useStyles = makeStyles((theme) => ({
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(2, 0, 0),
    fontWeight: 'bold',
    padding: '5px 20px 5px 20px',
  },
  card: {
    padding: '20px',
  },
  textError: {
    color: '#e53935',
    fontSize: '14px',
  },
  iconsForm: {
    color: '#333333',
    fontSize: '30px',
    position: 'relative',
    top: '5px',
  },
  passButton: {
    position: 'relative',
    right: '-10px',
  },
  rojo: {
    color: '#e53935',
  },
  textInput: {
    margin: theme.spacing(1, 0, 1, 0),
  },
  textInput2: {
    margin: theme.spacing(0, 0, 0, 0),
  },
}));

export default function UsuarioRegistrar({ setUpdate }) {
  const fecha = new Date();
  const fechaMin = (fecha.getFullYear() - 80) + "-01-01";
  const fechaMax = (fecha.getFullYear() - 1) + "-01-01";
  const [data, setData] = useState({
    nombre: '', apellido: '', usuario: '', email: '', pass: '', dni: '', fechaNacimiento: ''
  });
  const [isError, setError] = useState({
    nombre: false, apellido: false, usuario: false, email: false, pass: false, dni: false, fechaNacimiento: false
  });
  const [textError, setTextError] = useState({
    nombre: '', apellido: '', usuario: '', email: '', pass: '', dni: '', fechaNacimiento: ''
  });
  const [formError, setFormError] = useState('');
  const classes = useStyles();
  /* const [actualizar, setActualizar] = useState(true); */
  const [passShow, setPassShow] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(data);
    if (validar()) {
      setFormError('');
      await axios.post("http://localhost:4000/api/v1/usuario", data)
      .then(res => {
        if(res.ok){
          console.log(res)
          setData(data => ({ ...data, nombre: '', apellido: '', usuario: '', email: '', pass: '', dni: '', fechaNacimiento: ''}));
        } else {
          console.log(res)
        }
      })
      .catch(err => console.log(err+'error'));
    } else {
      setFormError('Revise los errores');
    }
  }

  const validar = () => {
    let { nombre, apellido, usuario, email, pass, dni, fechaNacimiento } = data;
    setError(isError => ({ ...isError, nombre: false, apellido: false, usuario: false, email: false, pass: false, dni: false, fechaNacimiento: false }));
    setTextError(textError => ({ ...textError, nombre: '', apellido: '', usuario: '', email: '', pass: '', dni: '', fechaNacimiento: '' }));
    let errores = 0;
    if (nombre.length === 0) {
      setError(isError => ({ ...isError, nombre: true }));
      setTextError(textError => ({ ...textError, nombre: 'Es obligatorio.' }));
      errores++;
    } else if (nombre.length < 2) {
      setError(isError => ({ ...isError, nombre: true }));
      setTextError(textError => ({ ...textError, nombre: 'Nombre muy corto.' }));
      errores++;
    }

    if (apellido.length === 0) {
      setError(isError => ({ ...isError, apellido: true }));
      setTextError(textError => ({ ...textError, apellido: 'Es obligatorio.' }));
      errores++;
    } else if (apellido.length < 2) {
      setError(isError => ({ ...isError, apellido: true }));
      setTextError(textError => ({ ...textError, apellido: 'Apellido muy corto.' }));
      errores++;
    }

    if (usuario.length === 0) {
      setError(isError => ({ ...isError, usuario: true }));
      setTextError(textError => ({ ...textError, usuario: 'Es obligatorio.' }));
      errores++;
    } else if (usuario.length < 2) {
      setError(isError => ({ ...isError, usuario: true }));
      setTextError(textError => ({ ...textError, usuario: 'Usuario muy corto.' }));
      errores++;
    }

    if (email.length === 0) {
      setError(isError => ({ ...isError, email: true }));
      setTextError(textError => ({ ...textError, email: 'Es obligatorio.' }));
      errores++;
    } else if (email.length < 5) {
      setError(isError => ({ ...isError, email: true }));
      setTextError(textError => ({ ...textError, email: 'Email muy corto.' }));
      errores++;
    } else if (email) {

    }

    if (pass.length === 0) {
      setError(isError => ({ ...isError, pass: true }));
      setTextError(textError => ({ ...textError, pass: 'Es obligatorio.' }));
      errores++;
    } else if (pass.length < 8) {
      setError(isError => ({ ...isError, pass: true }));
      setTextError(textError => ({ ...textError, pass: 'Contraseña 8 caracteres al menos.' }));
      errores++;
    }

    if (dni.length === 0) {
      setError(isError => ({ ...isError, dni: true }));
      setTextError(textError => ({ ...textError, dni: 'Es obligatorio.' }));
      errores++;
    } else if (dni.length < 8) {
      setError(isError => ({ ...isError, dni: true }));
      setTextError(textError => ({ ...textError, dni: 'Contraseña 8 caracteres al menos.' }));
      errores++;
    }

    if (fechaNacimiento.length === 0) {
      setError(isError => ({ ...isError, fechaNacimiento: true }));
      setTextError(textError => ({ ...textError, fechaNacimiento: 'Fecha es obligatoria.' }));
      errores++;
    } else if (validarEdad(new Date(fechaNacimiento), fecha)) {
      setError(isError => ({ ...isError, fechaNacimiento: true }));
      setTextError(textError => ({ ...textError, fechaNacimiento: 'Debe ser mayor a 18 años.' }));
      errores++;
    }
    return errores === 0;
  }

  const validarEdad = (nacimiento, fecha) => {
    if ((fecha.getFullYear() - nacimiento.getFullYear()) < 18) {
      return true;
    } else {
      if (fecha.getMonth() < nacimiento.getMonth()) {
        return true;
      } else if (fecha.getMonth() === nacimiento.getMonth()) {
        if (fecha.getDate() <= nacimiento.getDate()) {
          return true;
        }
      }
    }
    return false;
  }

  const handleChange = ({ target }) => {
    setData(data => ({ ...data, [target.name]: target.value.replace(/\s\s+/g, ' ') }));
    /* console.log(target.name + ' : ' + target.value); */

  }

  const handleChangeFecha = ({ target }) => {

    if (target.value.length <= 10 && new Date(target.value).getFullYear() <= fecha.getFullYear()) {
      setData(data => ({ ...data, [target.name]: target.value }));
    }

  }

  return (
    <Grid container justify="center" spacing={2}>
      <Grid item xs={10} sm={7} md={6} lg={5} xl={4}>
        <Card className={classes.card}>
          <CssBaseline />
          <Grid container direction="row" justify="center" alignItems="center">
            <Typography component="h1" variant="h5">
              Registrate
            </Typography>
            <Avatar className={classes.avatar}>
              <AccountBox />
            </Avatar>
          </Grid>
          <form onSubmit={handleSubmit} className={classes.form} noValidate>
            <Grid container justify="center" alignItems="center" spacing={1}>
              <Grid item xs={6}>
                <TextField value={data.nombre} onChange={handleChange} helperText={textError.nombre}
                  error={isError.nombre} variant="outlined" margin="normal" id="nombre" label="Nombre"
                  name="nombre" autoComplete="nombre" size='small' fullWidth
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <CardHeading className={isError.nombre ? classes.rojo : null} />
                      </InputAdornment>
                    ),
                  }}
                  className={isError.nombre ? classes.textInput2 : classes.textInput} />
              </Grid>
              <Grid item xs={6} >
                <TextField value={data.apellido} onChange={handleChange} helperText={textError.apellido}
                  error={isError.apellido} variant="outlined" margin="normal" id="apellido" label="Apellido"
                  name="apellido" autoComplete="apellido" size='small' fullWidth
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <CardText className={isError.apellido ? classes.rojo : null} />
                      </InputAdornment>
                    ),
                  }}
                  className={isError.nombre ? classes.textInput2 : classes.textInput} />
              </Grid>
              <Grid item xs={12}>
                <TextField value={data.usuario} onChange={handleChange} helperText={textError.usuario}
                  error={isError.usuario} variant="outlined" margin="normal" id="usuario" label="Usuario"
                  name="usuario" autoComplete="usuario" size='small' fullWidth
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <Person className={isError.usuario ? classes.rojo : null} />
                      </InputAdornment>
                    ),
                  }}
                  className={isError.nombre ? classes.textInput2 : classes.textInput} />
              </Grid>
              <Grid item xs={12}>
                <TextField value={data.email} onChange={handleChange} helperText={textError.email}
                  error={isError.email} type="email" variant="outlined" margin="normal" id="email"
                  label="Correo" name="email" autoComplete="email" size='small' fullWidth
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <Envelope className={isError.email ? classes.rojo : null} />
                      </InputAdornment>
                    ),
                  }}
                  className={isError.nombre ? classes.textInput2 : classes.textInput} />
              </Grid>
              <Grid item xs={12}>
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
                  className={isError.nombre ? classes.textInput2 : classes.textInput} />
              </Grid>
              <Grid item xs={6}>
                <TextField value={data.dni} onChange={handleChange} helperText={textError.dni}
                  error={isError.dni} variant="outlined" margin="normal" id="dni"
                  label="DNI" name="dni" autoComplete="dni" size='small' fullWidth
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <CardChecklist className={isError.dni ? classes.rojo : null} />
                      </InputAdornment>
                    ),
                  }}
                  className={isError.nombre ? classes.textInput2 : classes.textInput} />
              </Grid>
              <Grid item xs={6}>
                <TextField InputProps={{ inputProps: { min: fechaMin, max: fechaMax, className: isError.fechaNacimiento ? classes.rojo : null } }} InputLabelProps={{ shrink: true }}
                  format="dd/MM/yyyy" onChange={handleChangeFecha} helperText={textError.fechaNacimiento}
                  error={isError.fechaNacimiento} type="date" variant="outlined" margin="normal"
                  id="fechaNacimiento" label="Fecha de Nacimiento" name="fechaNacimiento"
                  autoComplete="fechaNacimiento" size='small' fullWidth 
                  className={isError.nombre ? classes.textInput2 : classes.textInput} />
              </Grid>
              <Grid container direction="column" justify="center" alignItems="center">
                <Typography className={classes.textError}>{formError}</Typography>
                <Button type="submit" width="75%" variant="contained" color="primary" className={classes.submit}>Registrar</Button>
              </Grid>
            </Grid>
          </form>
        </Card>
      </Grid>
    </Grid>

  );
}