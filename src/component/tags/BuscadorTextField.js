import React from 'react'
import { IconButton, makeStyles, InputAdornment, TextField } from '@material-ui/core';
import { Search } from "@material-ui/icons";

const useStyles = makeStyles(theme => ({
  searchInput: {
    width: '40%'
  }
}))

export default function BuscadorTextField({ setBuscar, handleBuscar }) {
  const classes = useStyles();

  const handleBusqueda = (e) => {
    const valor = e.target.value;
    setBuscar(valor);
    console.log(valor.length);
    if (valor === '' || typeof valor === 'undefined' || valor === null) {   
      handleBuscar();
    } 
  }

  const handleKeyEnter = (e) => {
    if (e.charCode === 13 ) {
      handleBuscar();
    }
  }

  return ( //onChange={(e) => this.setState({brother: e.target.value})}
    <TextField onKeyPress={e => handleKeyEnter(e)} label="Filtrar datos" className={classes.searchInput} onChange={e => handleBusqueda(e)}
      InputProps={{
        endAdornment: (<InputAdornment position="end">
          <IconButton type="button" aria-label="buscar" onClick={() => handleBuscar()}>
            <Search />
          </IconButton>
        </InputAdornment>)
      }}
    />

  )
}
