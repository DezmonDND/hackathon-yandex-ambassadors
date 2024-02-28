// TODO:сюда вставить BudgetTabs
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

import { BUDGET_DATA, USERS } from "../mocks/users-data";

export default function SendMerch({
  rowData,
  selected,
  orderDirection,
  handleSortRequest,
  handleCheckboxClick,
  handleSelectAllClick,
}) {
  const [users, setUsers] = useState(USERS);
  // let USERS = [],
  // STATUSES = ["активный", "уточняется", "на паузе", "не амбассадор"];

  return (
    <TableContainer component={Paper} className="tableContainer">
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            {BUDGET_DATA.map((cell) => (
              <TableCell
                className="table__header_cell"
                align="center"
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
                  textAlign={"center"}
                  style={{
                    color: "#1d6bf3",
                    width: "max-content",
                  }}
                >
                  {row.userName}
                </Typography>
              </TableCell>
              <TableCell>
                <Typography
                  textAlign={"center"}
                  style={{
                    borderBottom: "none",
                    width: "max-content",
                  }}
                >
                  {row.userTotal}
                </Typography>
              </TableCell>
              <TableCell>
                <Typography
                  textAlign={"center"}
                  style={{
                    width: "max-content",
                  }}
                >
                  {row.userJanuare}
                </Typography>
              </TableCell>
              <TableCell>
                <Typography
                  textAlign={"center"}
                  style={{
                    width: "max-content",
                  }}
                >
                  {row.userFebruare}
                </Typography>
              </TableCell>
              <TableCell>
                <Typography
                  textAlign={"center"}
                  style={{
                    width: "max-content",
                  }}
                >
                  {row.userMart}
                </Typography>
              </TableCell>
              <TableCell>
                <Typography
                  textAlign={"center"}
                  style={{
                    width: "max-content",
                  }}
                >
                  {row.userApril}
                </Typography>
              </TableCell>
              <TableCell>
                <Typography
                  textAlign={"center"}
                  style={{
                    width: "max-content",
                  }}
                >
                  {row.userMay}
                </Typography>
              </TableCell>
              <TableCell>
                <Typography
                  textAlign={"center"}
                  style={{
                    width: "max-content",
                  }}
                >
                  {row.userJune}
                </Typography>
              </TableCell>
              <TableCell>
                <Typography
                  textAlign={"center"}
                  style={{
                    width: "max-content",
                  }}
                >
                  {row.userJuly}
                </Typography>
              </TableCell>
              <TableCell>
                <Typography
                  textAlign={"center"}
                  style={{
                    width: "max-content",
                  }}
                >
                  {row.userAugust}
                </Typography>
              </TableCell>
              <TableCell>
                <Typography
                  textAlign={"center"}
                  style={{
                    width: "max-content",
                  }}
                >
                  {row.userSeptember}
                </Typography>
              </TableCell>
              <TableCell>
                <Typography
                  textAlign={"center"}
                  style={{
                    width: "max-content",
                  }}
                >
                  {row.userOctober}
                </Typography>
              </TableCell>
              <TableCell>
                <Typography
                  textAlign={"center"}
                  style={{
                    width: "max-content",
                  }}
                >
                  {row.userNovember}
                </Typography>
              </TableCell>
              <TableCell>
                <Typography
                  textAlign={"center"}
                  style={{
                    width: "max-content",
                  }}
                >
                  {row.userDecember}
                </Typography>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
