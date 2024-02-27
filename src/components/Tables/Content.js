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
  handleSortRequestBySendMerch,
  handleSortRequestByName,
  handleSortRequestByTelegram,
  handleSortRequestByFeedback,
  handleSortRequestByHabr,
  handleCheckboxClick,
  handleSelectAllClick,
}) {
  // STATUSES = ["активный", "уточняется", "на паузе", "не амбассадор"];

  return (
    <TableContainer component={Paper}>
      <Table aria-label="Таблица Контент">
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
              <Typography className="table__header_cell">ID</Typography>
            </TableCell>
            <TableCell
              align="center"
              onClick={handleSortRequestBySendMerch}
              className="table__header_cell_id table__header_cell"
            >
              <Typography className="table__header_cell">
                <TableSortLabel
                  active={true}
                  direction={orderDirection}
                  IconComponent={filterIcon}
                >
                  Отправка мерча
                </TableSortLabel>
              </Typography>
            </TableCell>
            <TableCell align="center" className="table__header_cell">
              <Typography className="table__header_cell">Статус</Typography>
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
            <TableCell
              align="center"
              onClick={handleSortRequestByTelegram}
              className="table__header_cell_id table__header_cell"
            >
              <Typography className="table__header_cell">
                <TableSortLabel
                  active={true}
                  direction={orderDirection}
                  IconComponent={filterIcon}
                >
                  Telegram
                </TableSortLabel>
              </Typography>
            </TableCell>
            <TableCell
              align="center"
              onClick={handleSortRequestByFeedback}
              className="table__header_cell_id table__header_cell"
            >
              <Typography className="table__header_cell">
                <TableSortLabel
                  active={true}
                  direction={orderDirection}
                  IconComponent={filterIcon}
                >
                  Отзыв
                </TableSortLabel>
              </Typography>
            </TableCell>
            <TableCell
              align="center"
              onClick={handleSortRequestByHabr}
              className="table__header_cell_id table__header_cell"
            >
              <Typography className="table__header_cell">
                <TableSortLabel
                  active={true}
                  direction={orderDirection}
                  IconComponent={filterIcon}
                >
                  Хабр
                </TableSortLabel>
              </Typography>
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
                        textAlign={"center"}
                      >
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
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
