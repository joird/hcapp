import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

export default function SelectMui({ items, handleSeleccion, handleBuscar }) {
  const classes = useStyles();
  const [seleccion, setSeleccion] = useState('');
  const [open, setOpen] = useState(false);
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    setMenuItems(items);    
  }, [items])

  const handleChange = (event) => {
    setSeleccion(event.target.value);
    handleSeleccion(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label">Parametro</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={seleccion}
          onChange={handleChange}
        >
          <MenuItem value=""><em>Ninguno</em></MenuItem>
          {menuItems.map((item) =>
            <MenuItem key={item} value={item}>{item.charAt(0).toUpperCase() + item.slice(1)}</MenuItem>
          )}
        </Select>
      </FormControl>
    </div>
  );
}