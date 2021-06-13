import React, { useState } from 'react';
import { makeStyles, Typography, Grid, Card, Avatar, Button, CssBaseline, TextField } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

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
  }
}));

export default function RolRegistrar({ setUpdate }) {
  const [data, setData] = useState({
    rol: '', descripcion: ''
  });
  const [isError, setError] = useState({
    rol: false, descripcion: false
  });
  const [textError, setTextError] = useState({
    rol: '', descripcion: ''
  });
  const [formError, setFormError] = useState('');
  const classes = useStyles();
  const [actualizar, setActualizar] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError('');
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
    }
  }

  const validar = () => {
    let { rol, descripcion } = data;
    setError(isError => ({ ...isError, rol: false, descripcion: false }));
    setTextError(textError => ({ ...textError, rol: '', descripcion: '' }));
    let errores = 0;
    if (rol.length === 0) {
      setError(isError => ({ ...isError, rol: true }));
      setTextError(textError => ({ ...textError, rol: 'Es obligatorio.' }));
      errores++;
    } else if (rol.length < 2) {
      setError(isError => ({ ...isError, rol: true }));
      setTextError(textError => ({ ...textError, rol: 'Nombre de rol muy corto.' }));
      errores++;
    }
    if (descripcion.length === 0) {
      setError(isError => ({ ...isError, descripcion: true }));
      setTextError(textError => ({ ...textError, descripcion: 'Es obligatorio.' }));
      errores++;
    } else if (descripcion.length < 10) {
      setError(isError => ({ ...isError, descripcion: true }));
      setTextError(textError => ({ ...textError, descripcion: 'Descripcion muy corto.' }));
      errores++;
    }
    return errores === 0;
  }

  const handleChange = ({ target }) => {
    setData(data => ({ ...data, [target.name]: target.value.replace(/\s\s+/g, ' ') }));
    //console.log(target.name + ' : ' + target.value);
  }

  return (
    <Grid container justify="center" spacing={3}>
      <Grid item xs={10} sm={7} md={6} lg={5} xl={4}>
        <Card className={classes.card}>
          <CssBaseline />
          <Grid container direction="row" justify="center" alignItems="center">
            <Typography component="h1" variant="h5">
              Registrar Rol
            </Typography>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
          </Grid>
          <form onSubmit={handleSubmit} className={classes.form} noValidate>
            <TextField value={data.rol} onChange={handleChange} helperText={textError.rol} error={isError.rol} variant="outlined" margin="normal" fullWidth id="rol" label="Rol" name="rol" autoComplete="rol" />
            <TextField value={data.descripcion} onChange={handleChange} helperText={textError.descripcion} error={isError.descripcion} rows={3} multiline variant="outlined" margin="normal" fullWidth name="descripcion" label="Descripcion" id="descripcion" />
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