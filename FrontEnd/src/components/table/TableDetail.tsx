import TableTree from "./TableTree";
import { Box } from "@mui/material";
function TableDetail({ detailRow }: any) {
  console.log(detailRow[0].Values);
  return (
    <Box
      sx={{
        padding: "8px 12px 0 12px",
        border: "1px solid",
      }}
    >
      <TableTree
        label={"Chit Tiết"}
        listAssets={detailRow}
        rowPeriod={detailRow[0].Values}
      />
    </Box>
  );
}

export default TableDetail;
