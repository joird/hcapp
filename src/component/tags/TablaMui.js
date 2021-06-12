import React, { useState, useEffect } from 'react';
import { Toolbar, TableContainer, Table, TableHead, TableRow, TableCell, makeStyles, TablePagination, TableSortLabel, Paper, TableBody } from '@material-ui/core';
import SelectMui from './SelectMui.js';
import BuscadorTextField from './BuscadorTextField.js';
import RowTable from './RowTable.js';

const useStyles = makeStyles(theme => ({
  table: {
    marginTop: theme.spacing(3),
    '& thead th': {
      fontWeight: '600',
      color: theme.palette.primary.main,
      backgroundColor: theme.palette.primary.light,
    },
    '& tbody td': {
      fontWeight: '300',
    },
    '& tbody tr:hover': {
      backgroundColor: '#fffbf2',
      cursor: 'pointer',
    },
  },
  pageContent: {
    margin: theme.spacing(5),
    padding: theme.spacing(3)
  },
  colorVerde: {
    color: 'green',
  },
  colorRojo: {
    color: 'red',
  },
  colorNegro: {
    color: 'black',
  }
}))

export default function TablaMui({ data, cellColumns, editable, baja, save }) {
  const classes = useStyles();

  const pages = [3, 5, 10, 25]
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(pages[page])
  const [order, setOrder] = useState('desc')
  const [orderBy, setOrderBy] = useState(true)
  const [active, setActive] = useState(false);
  const [datos, setDatos] = useState([]);
  const [rows, setRows] = useState([]); 
  const [editID, setEditID] = useState(-1);
  const [editableRow, setEditableRow] = useState(<></>);
  const [bajaRow, setBajaRow] = useState(<></>);
  const [seleccion, setSeleccion] = useState();
  const [busqueda, setBusqueda] = useState('');

  useEffect(() => {
    if(typeof data !== 'undefined'){
      const indexado = data.map((dato, i) => {
        dato['code'] = i
        return dato;
      });
      setDatos(indexado);
    }
  }, [data])

  useEffect(() => {
    if(typeof datos !== 'undefined'){     
      setRows(datos);
    }    
  }, [datos])

  useEffect(() => {
    if (editable) {
      setEditableRow(<TableCell style={{ width: 50 }}></TableCell>);
    }
  }, [editable])

  useEffect(() => {
    if (baja) {
      setBajaRow(<TableCell style={{ width: 50 }}></TableCell>);
    }
  }, [baja])

  const handleSeleccion = (selecionado) => {
    setSeleccion(selecionado);
  }

  const startEditRow = (code) => {
    setEditID(code);
  }

  const stopEditRow = () => {
    setEditID(-1);
  }

  const handleSaveRow = (trow) => {
    let rol;
    const newRows = datos.map(row => {
      if (row._id === trow._id) {
        rol = trow;
        return trow;
      }
      return row;
    })
    setDatos(newRows);
    save(rol);
  }

  const handleSortRequest = (cellColumn) => {
    //stopEditRow();
    setOrder(!orderBy ? 'desc' : 'asc');
    setOrderBy(!orderBy)
    stopEditRow();
    return rows.sort(compareValues(cellColumn.toLowerCase(), order));
  }

  const compareValues = (key, order) => {
    return function innerSort(a, b) {
      if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
        return 0;
      }
      const varA = typeof a[key] === "string" ? a[key].toUpperCase() : a[key];
      const varB = typeof b[key] === "string" ? b[key].toUpperCase() : b[key];
      let comparison = 0;
      if (varA > varB) {
        comparison = 1;
      } else if (varA < varB) {
        comparison = -1;
      }
      return order === "desc" ? comparison * -1 : comparison;
    };
  };

  const handleChangePage = (event, newPage) => {
    stopEditRow();
    setPage(newPage);
  }

  const handleChangeRowsPerPage = event => {
    stopEditRow();
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0);
  }

  const setBuscar = (buscar) => {
    setBusqueda(buscar);
  }

  const handleBuscar = () => {
    if (busqueda === '' || typeof busqueda === 'undefined') {
      if (datos !== rows) {
        setRows(datos);
      }
    } else {
      let filtrado = datos.filter(row => filtros(row, busqueda));
      setRows(filtrado);
    }
  }

  const filtros = (row, busqueda) => {
    if (seleccion === undefined || seleccion === '') {
      return Object.values(row).toString().toLowerCase().includes(busqueda.toLowerCase());
    } else if (busqueda !== '') {
      return row[seleccion].toString().toLowerCase().includes(busqueda.toLowerCase());
    }
  }

  return (
    <Paper className={classes.pageContent}>
      <Toolbar>
        <SelectMui items={cellColumns} handleSeleccion={handleSeleccion} handleBuscar={handleBuscar} />
        <BuscadorTextField handleBuscar={handleBuscar} setBuscar={setBuscar}/>
      </Toolbar>
      <TableContainer>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell><TableSortLabel
                onMouseEnter={() => setActive(true)}
                onMouseLeave={() => setActive(false)}
                active={active}
                direction={order}
                onClick={() => { handleSortRequest('code') }}>
                #
              </TableSortLabel></TableCell>
              {
                cellColumns.map((cellColumn, index) => (
                  <TableCell key={index} sortDirection={'asc'}>
                    {cellColumn.disableSorting ? cellColumn :
                      <TableSortLabel
                        onMouseEnter={() => setActive(true)}
                        onMouseLeave={() => setActive(false)}
                        active={active}
                        direction={order}
                        onClick={() => { handleSortRequest(cellColumn) }}>
                        {cellColumn}
                      </TableSortLabel>
                    }
                  </TableCell>))
              }
              {editableRow}
              {bajaRow}
            </TableRow>
          </TableHead>
          <TableBody>
            {
              rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(row => (
                <RowTable
                  key={row.code}
                  row={row}
                  cellColumns={cellColumns}
                  startEditRow={startEditRow}
                  stopEditRow={stopEditRow}
                  handleSaveRow={handleSaveRow}
                  editID={editID}
                  editable={editable}
                  baja={baja}
                />
              ))
            }
          </TableBody>
        </Table>
        <TablePagination
          component="div"
          page={page}
          rowsPerPageOptions={pages}
          rowsPerPage={rowsPerPage}
          count={rows.length}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </TableContainer>
    </Paper>
  )
}
