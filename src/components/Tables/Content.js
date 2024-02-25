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
import { CONTENT_DATA, USERS } from "../utils/constants";

export default function Ambassodors(props) {
  const [users, setUsers] = useState(USERS);
  // let USERS = [],
  //   STATUSES = ["активный", "уточняется", "на паузе", "не амбассадор"];

  return (
    <TableContainer component={Paper} className="tableContainer">
      {" "}
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            {CONTENT_DATA.map((cell) => (
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
                    width: "162px",
                  }}
                >
                  {row.userSendMerch}
                </Typography>
              </TableCell>
              <TableCell>
                <Grid container>
                  <Grid item lg={9}>
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
                <Typography
                  textAlign={"center"}
                  className="table__user-name"
                  style={{
                    width: "182px",
                    borderBottom: "none",
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
                  {row.userTelegram}
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
                  {row.userFeedback}
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
                  {row.userHabr}
                </Typography>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
