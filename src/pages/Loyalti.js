
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

export default function Loyalti({
  rowData,
  selected,
  orderDirection,
  handleSortRequestByName,
  handleSortRequestByHudi,
  handleSortRequestByCoffee,
  handleSortRequestBySticker,
  handleSortRequestByPlus,
  handleSortRequestByArzamas,
  handleSortRequestByShopper,
  handleSortRequestByBackpack,
  handleCheckboxClick,
  handleSelectAllClick,
}) {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="Таблица Программа лояльности">
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
              onClick={handleSortRequestByHudi}
              className="table__header_cell_id table__header_cell"
            >
              <Typography className="table__header_cell">
                <TableSortLabel
                  active={true}
                  direction={orderDirection}
                  IconComponent={filterIcon}
                >
                  Толстовка
                </TableSortLabel>
              </Typography>
            </TableCell>
            <TableCell
              align="center"
              onClick={handleSortRequestByCoffee}
              className="table__header_cell_id table__header_cell"
            >
              <Typography className="table__header_cell">
                <TableSortLabel
                  active={true}
                  direction={orderDirection}
                  IconComponent={filterIcon}
                >
                  Кофе
                </TableSortLabel>
              </Typography>
            </TableCell>
            <TableCell
              align="center"
              onClick={handleSortRequestBySticker}
              className="table__header_cell_id table__header_cell"
            >
              <Typography className="table__header_cell">
                <TableSortLabel
                  active={true}
                  direction={orderDirection}
                  IconComponent={filterIcon}
                >
                  Стикеры
                </TableSortLabel>
              </Typography>
            </TableCell>
            <TableCell
              align="center"
              onClick={handleSortRequestByPlus}
              className="table__header_cell_id table__header_cell"
            >
              <Typography className="table__header_cell">
                <TableSortLabel
                  active={true}
                  direction={orderDirection}
                  IconComponent={filterIcon}
                >
                  Плюс
                </TableSortLabel>
              </Typography>
            </TableCell>
            <TableCell
              align="center"
              onClick={handleSortRequestByArzamas}
              className="table__header_cell_id table__header_cell"
            >
              <Typography className="table__header_cell">
                <TableSortLabel
                  active={true}
                  direction={orderDirection}
                  IconComponent={filterIcon}
                >
                  Арзамас
                </TableSortLabel>
              </Typography>
            </TableCell>
            <TableCell
              align="center"
              onClick={handleSortRequestByShopper}
              className="table__header_cell_id table__header_cell"
            >
              <Typography className="table__header_cell">
                <TableSortLabel
                  active={true}
                  direction={orderDirection}
                  IconComponent={filterIcon}
                >
                  Шоппер
                </TableSortLabel>
              </Typography>
            </TableCell>
            <TableCell
              align="center"
              onClick={handleSortRequestByBackpack}
              className="table__header_cell_id table__header_cell"
            >
              <Typography className="table__header_cell">
                <TableSortLabel
                  active={true}
                  direction={orderDirection}
                  IconComponent={filterIcon}
                >
                  Рюкзак
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
                      <Typography>{row.userId}</Typography>
                    </Grid>
                  </Grid>
                </TableCell>
                <TableCell>
                  <Typography
                    style={{
                      color: "#1d6bf3",
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
                    }}
                  >
                    {row.userHudi}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography textAlign={"center"}>{row.userCoffee}</Typography>
                </TableCell>
                <TableCell>
                  <Typography textAlign={"center"}>
                    {row.userSticker}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography textAlign={"center"}>{row.userPlus}</Typography>
                </TableCell>
                <TableCell>
                  <Typography textAlign={"center"}>
                    {row.userArzamas}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography textAlign={"center"}>
                    {row.userShopper}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography textAlign={"center"}>
                    {row.userBackpack}
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
