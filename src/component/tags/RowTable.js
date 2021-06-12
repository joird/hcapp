import React, { useState, useEffect } from 'react';
import { TableRow, TableCell, TextField, } from '@material-ui/core';
import CheckIcon from '@material-ui/icons/Check';
import EditIcon from '@material-ui/icons/Edit';
import BlockIcon from '@material-ui/icons/Block';
import IconButton from '@material-ui/core/IconButton';

export default function RowTable({ row, cellColumns, startEditRow, stopEditRow, handleSaveRow, editID, editable, baja }) {
  const [trow, setTrow] = useState({});
  const ancho = `${1 / cellColumns.length * 100}%`;
  const [num, setNum] = useState(<></>);

  const isVacio = (obj) => {
    for (var i in obj) return false;
    return true;
  }

  const objetoIgual = (a, b) => {
    const keys = Object.keys(a);
    for (let i = 0; i < keys.length; i++) {
      if (a[keys[i]] !== b[keys[i]]) {
        return false;
      }
    }
    return true;
  }

  useEffect(() => {
    const { ...clone } = row;
    setNum(row.code+1);
    setTrow(clone);
  }, [row]);

  useEffect(() => {
    if (!objetoIgual(row, trow) && row.code !== editID && !isVacio(trow)) {
      setTrow(row);
    }
  // eslint-disable-next-line
  }, [editID])

  const handleChange = ({ target }, cell) => {
    setTrow(trow => ({ ...trow, [cell]: target.value }));
  }

  const handleSave = () => {
    stopEditRow(trow);
    handleSaveRow(trow);
  }

  const handleCancel = () => {
    setTrow(row);
    stopEditRow();
  }

  return (
    <TableRow>
      <TableCell>{num}</TableCell>
      {
        cellColumns.map((cell, i) => (
          (editID === trow.code) ?
            <TableCell key={i + row[cell]} style={{ width: ancho }} >
              <TextField style={{ width: '100%' }}
                name={cell}
                value={trow[cell]}
                onChange={(e) => handleChange(e, cell)} />
            </TableCell>
            :
            <TableCell key={i + row[cell]} style={{ width: ancho }} >{row[cell]}</TableCell>
        ))
      }
      {(editable) ?
        <TableCell>
          {(editID === trow.code) ?
            <>
              <IconButton onClick={handleSave}><CheckIcon /></IconButton>
              <IconButton onClick={handleCancel}><BlockIcon /></IconButton>
            </>
            :
            <IconButton onClick={() => startEditRow(trow.code)}><EditIcon /></IconButton>
          }
        </TableCell>
        :
        <></>
      }
      {(baja) ?
        <>baja</>
        :
        <></>
      }
    </TableRow >
  )
}
