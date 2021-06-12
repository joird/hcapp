import React, { useState } from 'react';
import { makeStyles, IconButton, InputAdornment, Typography, Grid, Card, Avatar, Button, CssBaseline, TextField } from '@material-ui/core';
import { Calendar, CardChecklist, Lock, Envelope, Person, CardHeading, CardText } from 'react-bootstrap-icons';
import { AccountBox, Visibility, VisibilityOff } from '@material-ui/icons';
import DatePicker from '@material-ui/lab/DatePicker';

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
  }
}));

export default function RolRegistrar({ setUpdate }) {
  const [data, setData] = useState({
    nombre: '', apellido: '', usuario: '', email: '', pass: '', dni: '', fechaNacimiento: new Date('2014-08-18T21:11:54')
  });
  const [isError, setError] = useState({
    nombre: false, apellido: false, usuario: false, email: false, pass: false, dni: false, fechaNacimiento: false
  });
  const [textError, setTextError] = useState({
    nombre: '', apellido: '', usuario: '', email: '', pass: '', dni: '', fechaNacimiento: ''
  });
  const [formError, setFormError] = useState('');
  const classes = useStyles();
  const [actualizar, setActualizar] = useState(true);
  const [passShow, setPassShow] = useState(false);



  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(data);
    /*     setFormError('');
        const datos = { rol: data.rol.trim(), descripcion: data.descripcion.trim() };
        if (validar()) {
          await fetch('http://localhost:4000/api/v1/rol',
            {
              method: 'POST',
              body: JSON.stringify(datos),
              headers: {
                "Content-type": "application/json"
              }
            })
            .then(async response => {
              if (response.ok) {
                setUpdate(actualizar);
                setActualizar(actualizar => !actualizar);
                setData(data => ({ ...data, rol: '', descripcion: '' }));
                console.log(await response.json());
              } else {
                setFormError('Rol registrado anteriormente.');
              }
            })
            .catch(err => { setFormError('No se ha enviado los datos.'); });
        } else {
          setFormError('Verifique los errores.');
        } */
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

    if (fechaNacimiento) {
      setError(isError => ({ ...isError, fechaNacimiento: true }));
      setTextError(textError => ({ ...textError, fechaNacimiento: 'Fecha es obligatoria.' }));
      errores++;
    }
    return errores === 0;
  }

  const handleChange = ({ target }) => {
    setData(data => ({ ...data, [target.name]: target.value.replace(/\s\s+/g, ' ') }));
    //console.log(target.name + ' : ' + target.value);
  }

  return (
    <Grid container justify="center" spacing={2}>
      <Grid item xs={10} sm={7} md={6} lg={5} xl={4}>
        <Card className={classes.card}>
          <CssBaseline />
          <Grid container direction="row" justify="center" alignItems="center">
            <Typography component="h1" variant="h5">
              Registrar Rol
            </Typography>
            <Avatar className={classes.avatar}>
              <AccountBox />
            </Avatar>
          </Grid>
          <form onSubmit={handleSubmit} className={classes.form} noValidate>
            <Grid container justify="center" alignItems="center" spacing={1}>
              <Grid item xs={1} container justify="flex-end" alignItems="center">
                <CardHeading className={classes.iconsForm} />
              </Grid>
              <Grid item xs={5}>
                <TextField value={data.nombre} onChange={handleChange} helperText={textError.nombre}
                  error={isError.nombre} variant="outlined" margin="normal" id="nombre"
                  label="Nombre" name="Nombre" autoComplete="nombre" size='small' fullWidth />
              </Grid>
              <Grid item xs={1} container justify="flex-end" alignItems="center">
                <CardText className={classes.iconsForm} />
              </Grid>
              <Grid item xs={5}>
                <TextField value={data.apellido} onChange={handleChange} helperText={textError.apellido}
                  error={isError.apellido} variant="outlined" margin="normal" id="apellido"
                  label="Apellido" name="apellido" autoComplete="apellido" size='small' fullWidth />
              </Grid>
            </Grid>

            <Grid container justify="center" alignItems="center" spacing={1}>
              <Grid item xs={1} container justify="flex-end" alignItems="center">
                <Person className={classes.iconsForm} />
              </Grid>
              <Grid item xs={11}>
                <TextField item value={data.usuario} onChange={handleChange} helperText={textError.usuario}
                  error={isError.usuario} variant="outlined" margin="normal" id="usuario"
                  label="Usuario" name="usuario" autoComplete="usuario" size='small' fullWidth />
              </Grid>
              <Grid item xs={1} container justify="flex-end" alignItems="center">
                <Envelope className={classes.iconsForm} />
              </Grid>
              <Grid item xs={11}>
                <TextField value={data.email} onChange={handleChange} helperText={textError.email}
                  error={isError.email} type="email" variant="outlined" margin="normal" id="email"
                  label="Correo" name="email" autoComplete="email" size='small' fullWidth />
              </Grid>
              <Grid item xs={1} container justify="flex-end" alignItems="center">
                <Lock className={classes.iconsForm} />
              </Grid>
              <Grid item xs={11}>
                <TextField value={data.pass} onChange={handleChange} helperText={textError.pass}
                  error={isError.pass} type={passShow ? "text" : "password"} variant="outlined" margin="normal" id="pass"
                  label="Contraseña" name="pass" autoComplete="pass" size='small' fullWidth
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton className={classes.passButton} onClick={() => setPassShow(passShow => !passShow)}>
                          {passShow ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    )
                  }}
                />
              </Grid>
            </Grid>

            <Grid container justify="center" alignItems="center" spacing={1}>
              <Grid item xs={1} container justify="flex-end" alignItems="center">
                <CardChecklist className={classes.iconsForm} />
              </Grid>
              <Grid item xs={5}>
                <TextField value={data.dni} onChange={handleChange} helperText={textError.dni}
                  error={isError.dni} variant="outlined" margin="normal" id="dni"
                  label="DNI" name="dni" autoComplete="dni" size='small' fullWidth />
              </Grid>
              <Grid item xs={1} container justify="flex-end" alignItems="center">
                <Calendar className={classes.iconsForm} />
              </Grid>
              <Grid item xs={5}>
                <DatePicker views={['day']} label="Fecha de Nacimiento" value={data.fechaNacimiento}
                  onChange={valor => setData(valor)} renderInput={(params) => <TextField {...params} helperText={null} />}
                />

              </Grid>
            </Grid>

            <Grid container direction="column" justify="center" alignItems="center">
              <Typography className={classes.textError}>{formError}</Typography>
              <Button type="submit" width="75%" variant="contained" color="primary" className={classes.submit}>Registrar</Button>
            </Grid>

          </form>
        </Card>
      </Grid>
    </Grid>
  );
}

/* <TextField InputLabelProps={{ shrink: true }} format="dd/MM/yyyy" value={data.fechaNacimiento} onChange={handleChange} helperText={textError.fechaNacimiento}
                  error={isError.fechaNacimiento} type="date" variant="outlined" margin="normal" id="fechaNacimiento"
                  label="Fecha de Nacimiento" name="fechaNacimiento" autoComplete="fechaNacimiento" size='small' fullWidth /> */