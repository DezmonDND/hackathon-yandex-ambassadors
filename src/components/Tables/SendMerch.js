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
import { SEND_MERCH_DATA, USERS } from "../utils/constants";

export default function SendMerch(props) {
  const [users, setUsers] = useState(USERS);
  // let USERS = [],
  //   STATUSES = ["активный", "уточняется", "на паузе", "не амбассадор"];

  return (
    <TableContainer component={Paper} className="tableContainer">
      {" "}
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            {SEND_MERCH_DATA.map((cell) => (
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
                    width: "182px",
                  }}
                >
                  {row.userCurator}
                </Typography>
              </TableCell>
              <TableCell>
                <Typography
                  textAlign={"center"}
                  style={{
                    borderBottom: "none",
                  }}
                >
                  {row.userMerch}
                </Typography>
              </TableCell>
              <TableCell>
                <Typography textAlign={"center"}>{row.userHudiSize}</Typography>
              </TableCell>
              <TableCell>
                <Typography textAlign={"center"}>
                  {row.userSocksSize}
                </Typography>
              </TableCell>
              <TableCell>
                <Typography
                  textAlign={"center"}
                  style={{
                    color: "#1d6bf3",
                    width: "182px",
                  }}
                >
                  {row.userName}
                </Typography>
              </TableCell>
              <TableCell>
                <Typography
                  textAlign={"center"}
                  style={{
                    width: "182px",
                  }}
                >
                  {row.userIndex}
                </Typography>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
