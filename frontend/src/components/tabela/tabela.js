import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData( Nome, Email, NUSP, Tipo, Roles) {
  return { Nome, Email, NUSP, Tipo, Roles};
}

const rows = [
  createData('Paulo da Silva', 'p.silva@usp.br', 10521292, 'Aluno', 'User'),
  createData('Ana Pereira', 'aninhap@usp.br', 9231074, 'Secretária', 'Admin'),
  createData('João Rocha', 'jrock1972@usp.br', 25367412, 'Professor', 'User'),
  createData('Pedro Mota', 'spdr.peter@usp.br', 13678354, 'Limpeza', 'User'),
  createData('Eli Araujo', 'l.araujousp.br', 11966328, 'Aluno', 'User'),
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Nome</TableCell>
            <TableCell align="left">Email</TableCell>
            <TableCell align="left">NUSP</TableCell>
            <TableCell align="left">Tipo</TableCell>
            <TableCell align="left">Roles</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.Nome}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.Nome}
              </TableCell>
              <TableCell align="left">{row.Email}</TableCell>
              <TableCell align="left">{row.NUSP}</TableCell>
              <TableCell align="left">{row.Tipo}</TableCell>
              <TableCell align="left">{row.Roles}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}