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
import "../Tabs/Tabs.css";

export default function BudgetPrice({
  rowData,
  selected,
  orderDirection,
  handleSortRequest,
  handleCheckboxClick,
  handleSelectAllClick,
}) {
  // let USERS = [],
  // STATUSES = ["активный", "уточняется", "на паузе", "не амбассадор"];

  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="table__header_cell" padding="ckeckbox">
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
            <TableCell
              align="center"
              className="table__header_cell_id table__header_cell"
            >
              <Typography className="table__header_cell">ID</Typography>
            </TableCell>
            <TableCell
              onClick={handleSortRequest}
              className="table__header_cell_id table__header_cell"
            >
              <Typography className="table__header_cell">
                <TableSortLabel
                  direction={orderDirection}
                  IconComponent={filterIcon}
                >
                  Мерч
                </TableSortLabel>
              </Typography>
            </TableCell>
            <TableCell className="table__header_cell_id table__header_cell">
              <Typography className="table__header_cell">
                <TableSortLabel IconComponent={filterIcon}>
                  Стоимость
                </TableSortLabel>
              </Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rowData.map((row, i) => {
            const isItemSelected = selected.indexOf(row.userId) !== -1;
            return (
              <TableRow key={row.id}>
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
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
