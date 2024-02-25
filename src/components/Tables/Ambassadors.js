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
import { USERS } from "../utils/constants";

// let USERS = [],
//   STATUSES = ["активный", "уточняется", "на паузе", "не амбассадор"];

const tableHeader = [
  { label: "Статус", data: "userStatus" },
  { label: "ID", data: "userId" },
  { label: "Дата", data: "userDate" },
  { label: "ФИО", data: "userName" },
  { label: "Программа", data: "userProgramm" },
  { label: "Страна", data: "userCountry" },
  { label: "Город", data: "userCity" },
];

export default function Ambassodors(props) {
  const [users, setUsers] = useState(USERS);

  return (
    <TableContainer component={Paper} className="tableContainer">
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            {tableHeader.map((cell) => (
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
                    <Typography
                      className="table__status"
                      style={{
                        padding: "3px 0",
                        width: "128px",
                        backgroundColor:
                          (row.userStatus === "активный" && "#87CC9E") ||
                          (row.userStatus === "уточняется" && "#FFCE92") ||
                          (row.userStatus === "на паузе" && "#7F67D2") ||
                          (row.userStatus === "не амбассадор" && "#EA7E7E"),
                      }}
                    >
                      {row.userStatus}
                    </Typography>
                  </Grid>
                </Grid>
              </TableCell>
              <TableCell>
                <Grid container>
                  <Grid item lg={10}>
                    <Typography
                      textAlign={"center"}
                      style={{
                        width: "40px",
                      }}
                    >
                      {row.userId}
                    </Typography>
                  </Grid>
                </Grid>
              </TableCell>
              <TableCell>
                <Typography textAlign={"center"} style={{ width: "88px" }}>
                  {" "}
                  {row.userDate}
                </Typography>
              </TableCell>
              <TableCell>
                <Typography
                  textAlign={"center"}
                  className="table__user-name"
                  style={{ width: "182px" }}
                >
                  {row.userName}
                </Typography>
              </TableCell>
              <TableCell>
                <Typography
                  textAlign={"center"}
                  className="table__user-programm"
                  style={{
                    width: "400px",
                  }}
                >
                  {row.userProgramm}
                </Typography>
              </TableCell>
              <TableCell>
                <Typography textAlign={"center"} style={{ width: "88px" }}>
                  {row.userCountry}
                </Typography>
              </TableCell>
              <TableCell>
                <Typography textAlign={"center"} style={{ width: "88px" }}>
                  {row.userCity}
                </Typography>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
