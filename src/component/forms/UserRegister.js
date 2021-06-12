import React from "react";
import { Button, TextField, Avatar, Typography, CssBaseline,
  Card, Grid, makeStyles } from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOpenOutlined";

const useStyle = makeStyles((theme) => ({
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(2, 0, 0),
    fontWeight: "bold",
    padding: "5px 20px 5px 20px"
  },
  card: {
    padding: "20px"
  },
  textError: {
    color: "#e53935",
    fontSize: "14px"
  }
}));

export default function UserRegister() {
  const classes = useStyle();

  const handleChange = () => {};

  const handleSubmit = () => {};

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
          <i class="bi-github" role="img" aria-label="GitHub">a</i>
          <form onSubmit={handleSubmit} className={classes.form} noValidate>
            <Grid container justify="center" spacing={2}>
              <Grid item xs={6}>
                <TextField
                  onChange={handleChange}
                  helperText={""}
                  error={false}
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="rol"
                  label="Rol"
                  name="rol"
                  autoComplete="rol"
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  onChange={handleChange}
                  helperText={""}
                  error={false}
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="rol"
                  label="Rol"
                  name="rol"
                  autoComplete="rol"
                />
              </Grid>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
            </Grid>

            <TextField
              onChange={handleChange}
              helperText={""}
              error={false}
              rows={3}
              multiline
              variant="outlined"
              margin="normal"
              fullWidth
              name="descripcion"
              label="Descripcion"
              id="descripcion"
            />
            <Grid
              container
              direction="column"
              justify="center"
              alignItems="center"
            >
              <Typography className={classes.textError}>{}</Typography>
              <Button
                type="submit"
                width="75%"
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Registrar
              </Button>
            </Grid>
          </form>
        </Card>
      </Grid>
    </Grid>
  );
}