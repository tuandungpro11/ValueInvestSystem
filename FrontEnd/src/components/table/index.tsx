/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { useSelector } from "react-redux";
import TableDetail from "./TableDetail";

export const Row = ({ row }: any) => {
  const [open, setOpen] = React.useState(false);

  const detailRow = useSelector((state: any) =>
    state.stock.listStock?.filter((el: any) => el.ParentID === row.ID)
  );

  console.log(detailRow);

  return (
    <>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          {detailRow?.length !== 0 ? (
            <IconButton
              aria-label="expand row"
              size="small"
              onClick={() => setOpen(!open)}
            >
              {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
          ) : (
            <IconButton>
              <HorizontalRuleIcon />
            </IconButton>
          )}
        </TableCell>
        <TableCell component="th" sx={{ minWidth: "300px" }}>
          {row.Name}
        </TableCell>
        {row.Values.map((r: any, index: number) => (
          <TableCell component="th" key={index}>
            {new Intl.NumberFormat("vi-VN", {
              style: "currency",
              currency: "VND",
            }).format(r.Value)}
          </TableCell>
        ))}
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={7}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1, height: "300px" }}>
              <TableDetail detailRow={detailRow} />
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
};

function TableCollapsible({ id }: any) {
  const listAssets = useSelector((state: any) =>
    state.stock.listStock?.filter((el: any) => el.ParentID === id)
  );
  const [rowPeriod, setRowPeriod] = useState<string[]>([]);
  useEffect(() => {
    setRowPeriod(listAssets[0]?.Values);
  }, []);
  console.log(rowPeriod);
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell sx={{ fontSize: "28px" }}>MỤC</TableCell>
            {rowPeriod?.map((row: any, index: number) => (
              <TableCell
                key={index}
                sx={{ fontSize: "28px", color: "#FF6464" }}
              >
                {row.Period}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {listAssets?.map((row: any) => (
            <Row key={row.ID} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default TableCollapsible;
