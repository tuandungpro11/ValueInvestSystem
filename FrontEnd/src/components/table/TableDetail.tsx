import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";

function TableDetail({ detailRow }: any) {
  return (
    <Box sx={{ margin: 1 }}>
      <Typography variant="h6" gutterBottom component="div">
        Chi tiết
      </Typography>
      <Table size="small" aria-label="purchases">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            {/* {detailRow.Values?.map((row: any, index: number) => (
              <TableCell
                key={index}
                sx={{ fontSize: "28px", color: "#FF6464" }}
              >
                {row.Period}
              </TableCell>
            ))} */}
          </TableRow>
        </TableHead>
        <TableBody>
          {detailRow?.map((Row: any) => (
            <TableRow key={Row.ID}>
              <TableCell component="th" scope="row">
                {Row.Name}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
}

export default TableDetail;
