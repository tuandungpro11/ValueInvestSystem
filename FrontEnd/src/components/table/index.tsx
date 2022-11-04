/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { useSelector } from "react-redux";
import TableDetail from "./TableDetail";
import TableTree from "./TableTree";

export const Row = ({ row }: any) => {
  const [open, setOpen] = React.useState(false);

  const detailRow = useSelector((state: any) =>
    state.stock.listStock?.filter((el: any) => el.ParentID === row.ID)
  );
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
            <Box sx={{ margin: 1 }}>
              <TableDetail detailRow={detailRow} />
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
};

function TableCollapsible({ id, period }: any) {
  const listAssets = useSelector((state: any) =>
    state.stock.listStock?.filter((el: any) => el.ParentID === id)
  );
  console.log(period);
  return (
    <TableTree label="MỤC" rowPeriod={period} listAssets={listAssets} id={id} />
  );
}

export default TableCollapsible;
