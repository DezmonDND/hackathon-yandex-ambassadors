import "../Tabs/Tabs.css";
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
  Checkbox,
  TableSortLabel,
} from "@mui/material";
import filterIcon from "@mui/icons-material/UnfoldMore";

export default function Ambassodors({
  rowData,
  selected,
  orderDirection,
  handleSortRequestByName,
  handleSortRequestByDate,
  handleCheckboxClick,
  handleSelectAllClick,
}) {
  // STATUSES = ["активный", "уточняется", "на паузе", "не амбассадор"];

  return (
    <TableContainer component={Paper}>
      <Table aria-label="Таблица Амбассадоры">
        <TableHead>
          <TableRow>
            <TableCell className="table__header_cell">
              <Typography>
                <Checkbox
                  indeterminate={
                    selected.length > 0 && selected.length < rowData.length
                  }
                  checked={selected.length === rowData.length}
                  onChange={handleSelectAllClick}
                ></Checkbox>
              </Typography>
            </TableCell>
            <TableCell align="center" className="table__header_cell">
              <Typography className="table__header_cell">Статус</Typography>
            </TableCell>
            <TableCell align="center" className="table__header_cell">
              <Typography className="table__header_cell">ID</Typography>
            </TableCell>
            <TableCell
              align="center"
              onClick={handleSortRequestByDate}
              className="table__header_cell_id table__header_cell"
            >
              <Typography className="table__header_cell">
                <TableSortLabel
                  active={true}
                  direction={orderDirection}
                  IconComponent={filterIcon}
                >
                  Дата
                </TableSortLabel>
              </Typography>
            </TableCell>
            <TableCell
              align="center"
              onClick={handleSortRequestByName}
              className="table__header_cell_id table__header_cell"
            >
              <Typography className="table__header_cell">
                <TableSortLabel
                  active={true}
                  direction={orderDirection}
                  IconComponent={filterIcon}
                >
                  ФИО
                </TableSortLabel>
              </Typography>
            </TableCell>
            <TableCell align="center" className="table__header_cell">
              <Typography className="table__header_cell">Программа</Typography>
            </TableCell>
            <TableCell align="center" className="table__header_cell">
              <Typography className="table__header_cell">Страна</Typography>
            </TableCell>
            <TableCell align="center" className="table__header_cell">
              <Typography className="table__header_cell">Город</Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rowData.map((row, i) => {
            const isItemSelected = selected.indexOf(row.userId) !== -1;
            return (
              <TableRow key={row.userId}>
                <TableCell align="center" padding="checkbox">
                  <Checkbox
                    checked={isItemSelected}
                    onClick={() => handleCheckboxClick(row)}
                  />
                </TableCell>
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
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
