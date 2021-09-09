import React from 'react';
import {
  Typography,
  Table,
  TableContainer,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from '@material-ui/core';
import { useStyles } from './style';

export const RevenueDetails = ({columnData, rowData}) => {
  const classes = useStyles();

  return (
    <>
      <Typography variant='h6'>Revenue Details</Typography>
      <TableContainer className={classes.tableContainer}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              {
                columnData && columnData.map(column => <TableCell className={classes.tableHead} key={column}>{column}</TableCell>)
              }
            </TableRow>
          </TableHead>
          <TableBody>
            {
              rowData && rowData.map(row => (
                <TableRow key={row.id}>
                  <TableCell>{row.invoice}</TableCell>
                  <TableCell>{row.customer}</TableCell>
                  <TableCell>{row.invoiceDate.toLocaleDateString()}</TableCell>
                  <TableCell>{row.revenue}</TableCell>
                  <TableCell>{row.costOfGoods}</TableCell>
                  <TableCell>{row.grossMargin}</TableCell>
                </TableRow>
              ))
            }
          </TableBody>
        </Table>
      </TableContainer></>
  );
};