import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Grid,
} from "@mui/material";
import { useState } from "react";
import "../Tabs/Tabs.css";
import { BUDGET_PRICE, USERS } from "../utils/constants";

export default function BudgetPrice(props) {
  const [users, setUsers] = useState(USERS);
  // let USERS = [],
  // STATUSES = ["активный", "уточняется", "на паузе", "не амбассадор"];

  return (
    <TableContainer component={Paper} className="tableContainer">
      {" "}
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            {BUDGET_PRICE.map((cell) => (
              <TableCell
                className="table__header_cell_id table__header_cell"
                key={cell.data}
              >
                <Typography className="table__header_cell">
                  {cell.label}
                </Typography>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((row, i) => (
            <TableRow key={row.id}>
              <TableCell>
                <Grid container>
                  <Grid item lg={10}>
                    <Typography textAlign={"center"} style={{ width: "40px" }}>
                      {row.userId}
                    </Typography>
                  </Grid>
                </Grid>
              </TableCell>
              <TableCell>
                <Typography
                  textAlign={"left"}
                  style={{
                    color: "#1d6bf3",
                    width: "792px",
                  }}
                >
                  {row.userMerchName}
                </Typography>
              </TableCell>
              <TableCell>
                <Typography
                  textAlign={"left"}
                  style={{
                    borderBottom: "none",
                    width: "340px",
                  }}
                >
                  {row.userMerchPrice}
                </Typography>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
