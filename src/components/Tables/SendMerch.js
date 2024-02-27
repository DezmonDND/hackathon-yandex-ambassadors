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

export default function SendMerch({
  rowData,
  selected,
  orderDirection,
  handleCheckboxClick,
  handleSelectAllClick,
  handleSortRequestByCurator,
  handleSortRequestByMerch,
  handleSortRequestByHudiSize,
  handleSortRequestBySocksSize,
  handleSortRequestByName,
  handleSortRequestByIndex,
}) {
  // STATUSES = ["активный", "уточняется", "на паузе", "не амбассадор"];

  return (
    <TableContainer component={Paper}>
      <Table aria-label="Таблица Отправка мерча">
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
              onClick={handleSortRequestByCurator}
              className="table__header_cell_id table__header_cell"
            >
              <Typography className="table__header_cell">
                <TableSortLabel
                  active={true}
                  direction={orderDirection}
                  IconComponent={filterIcon}
                >
                  Куратор
                </TableSortLabel>
              </Typography>
            </TableCell>
            <TableCell
              align="center"
              onClick={handleSortRequestByMerch}
              className="table__header_cell_id table__header_cell"
            >
              <Typography className="table__header_cell">
                <TableSortLabel
                  active={true}
                  direction={orderDirection}
                  IconComponent={filterIcon}
                >
                  Мерч
                </TableSortLabel>
              </Typography>
            </TableCell>
            <TableCell
              align="center"
              onClick={handleSortRequestByHudiSize}
              className="table__header_cell_id table__header_cell"
            >
              <Typography className="table__header_cell">
                <TableSortLabel
                  active={true}
                  direction={orderDirection}
                  IconComponent={filterIcon}
                >
                  Размер толстовки
                </TableSortLabel>
              </Typography>
            </TableCell>
            <TableCell
              align="center"
              onClick={handleSortRequestBySocksSize}
              className="table__header_cell_id table__header_cell"
            >
              <Typography className="table__header_cell">
                <TableSortLabel
                  active={true}
                  direction={orderDirection}
                  IconComponent={filterIcon}
                >
                  Размер носков
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
            <TableCell
              align="center"
              onClick={handleSortRequestByIndex}
              className="table__header_cell_id table__header_cell"
            >
              <Typography className="table__header_cell">
                <TableSortLabel
                  active={true}
                  direction={orderDirection}
                  IconComponent={filterIcon}
                >
                  Индекс
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
                        style={{ width: "40px" }}
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
                      width: "190px",
                    }}
                  >
                    {row.userMerch}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography
                    textAlign={"center"}
                    style={{
                      width: "182px",
                    }}
                  >
                    {row.userHudiSize}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography
                    textAlign={"center"}
                    style={{
                      width: "182px",
                    }}
                  >
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
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
