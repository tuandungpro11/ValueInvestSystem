import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useSelector } from "react-redux";
import { Row } from ".";

function TableTree({ rowPeriod, listAssets, id, label }: any) {
  const singleRow = useSelector((state: any) =>
    state.stock.listStock.filter((e: any) => e.ID === id)
  );
  console.log(rowPeriod);
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell sx={{ fontSize: "28px" }}>{label}</TableCell>
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
          {listAssets.length !== 0
            ? listAssets?.map((row: any) => <Row key={row.ID} row={row} />)
            : singleRow?.map((row: any) => <Row key={row.ID} row={row} />)}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default TableTree;
