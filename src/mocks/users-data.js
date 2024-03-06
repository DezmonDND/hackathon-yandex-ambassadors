import { Button, FormControl, MenuItem, Select } from "@mui/material";
import { useGridApiContext } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import "../index.css";
import { randomId } from "@mui/x-data-grid-generator";
import { GridActionsCellItem } from "@mui/x-data-grid";
import SaveIcon from "@mui/icons-material/Save";

export function buttonClick() {
  alert("Привет!");
}

export const USERS = [
  {
    id: randomId(),
    userStatus: "активный",
    userId: "1",
    userDate: "01.03.2024",
    userName: "Иванов Иван 1",
    userProgramm: "Продакт — менеджер для специалистов с опытом",
    userCountry: "Россия",
    userCity: "Москва",
    userTelegram: "@tgnickname",
    userPromocode: "samplepromocode13",
    userSendMerch: "Доступно: 2/2",
    userFeedback: "http://www.company.com",
    userHabr: "http://www.company.com",
    userCurator: "Анастасия Борисова",
    userMerch: "Позиция 1, Позиция 3",
    userHudiSize: "S",
    userSocksSize: "M",
    userIndex: "112233",
    userTotal: " 1 200 000",
    userJanuare: "10 000",
    userFebruare: "10 000",
    userMart: "10 000",
    userApril: "10 000",
    userMay: "10 000",
    userJune: "10 000",
    userJuly: "10 000",
    userAugust: "10 000",
    userSeptember: "10 000",
    userOctober: "10 000",
    userNovember: "10 000",
    userDecember: "10 000",
    userMerchName: "Толстовка",
    userMerchPrice: "2500",
    userHudi: "10",
    userCoffee: "10",
    userSticker: "10",
    userPlus: "10",
    userArzamas: "10",
    userShopper: "10",
    userBackpack: "10",
  },
  {
    id: randomId(),
    userStatus: "уточняется",
    userId: "2",
    userDate: "02.03.2024",
    userName: "Иванов Иван Иванович",
    userProgramm: "Продакт — менеджер",
    userCountry: "Россия 1",
    userCity: "Москва 1",
    userTelegram: "@tgnickname 1",
    userPromocode: "samplepromocode13 1",
    userSendMerch: "Недоступно",
    userFeedback: "http://www.company.com 1",
    userHabr: "http://www.company.com 1",
    userCurator: "Анастасия Борисова 1",
    userMerch: "Позиция 1, Позиция 2 1",
    userHudiSize: "S1",
    userSocksSize: "M1",
    userIndex: "11223323",
    userTotal: " 1 200 000",
    userJanuare: "10 0001",
    userFebruare: "10 0001",
    userMart: "10 0001",
    userApril: "10 0001",
    userMay: "10 0001",
    userJune: "10 0001",
    userJuly: "10 0001",
    userAugust: "10 0001",
    userSeptember: "10 0001",
    userOctober: "10 0001",
    userNovember: "10 0001",
    userDecember: "10 0001",
    userMerchName: "Толстовка 11",
    userMerchPrice: "25001",
    userHudi: "101",
    userCoffee: "101",
    userSticker: "101",
    userPlus: "101",
    userArzamas: "101",
    userShopper: "101",
    userBackpack: "101",
  },
  {
    id: randomId(),
    userStatus: "на паузе",
    userId: "3",
    userDate: "03.03.2024",
    userName: "Иванов Иван Иванович",
    userProgramm: "Продакт — менеджер для специалистов с опытом",
    userCountry: "Россия",
    userCity: "Москва",
    userTelegram: "@tgnickname",
    userPromocode: "samplepromocode13",
    userSendMerch: "Доступно: 1/2",
    userFeedback: "http://www.company.com",
    userHabr: "http://www.company.com",
    userCurator: "Анастасия Борисова",
    userMerch: "Позиция 1, Позиция 2",
    userHudiSize: "S",
    userSocksSize: "M",
    userIndex: "112233",
    userTotal: " 1 200 000",
    userJanuare: "10 000",
    userFebruare: "10 000",
    userMart: "10 000",
    userApril: "10 000",
    userMay: "10 000",
    userJune: "10 000",
    userJuly: "10 000",
    userAugust: "10 000",
    userSeptember: "10 000",
    userOctober: "10 000",
    userNovember: "10 000",
    userDecember: "10 000",
    userMerchName: "Толстовка 2",
    userMerchPrice: "2500",
    userHudi: "10",
    userCoffee: "10",
    userSticker: "10",
    userPlus: "10",
    userArzamas: "10",
    userShopper: "10",
    userBackpack: "10",
  },
  {
    id: randomId(),
    userStatus: "не амбассадор",
    userId: "4",
    userDate: "04.03.2024",
    userName: "Иванов Иван Иванович",
    userProgramm: "Продакт — менеджер для специалистов с опытом",
    userCountry: "Россия",
    userCity: "Москва",
    userTelegram: "@tgnickname",
    userPromocode: "samplepromocode13",
    userSendMerch: "Доступно: 0/2",
    userFeedback: "http://www.company.com",
    userHabr: "http://www.company.com",
    userCurator: "Анастасия Борисова",
    userMerch: "Позиция 1, Позиция 2",
    userHudiSize: "S",
    userSocksSize: "M",
    userIndex: "112233",
    userTotal: " 1 200 000",
    userJanuare: "10 000",
    userFebruare: "10 000",
    userMart: "10 000",
    userApril: "10 000",
    userMay: "10 000",
    userJune: "10 000",
    userJuly: "10 000",
    userAugust: "10 000",
    userSeptember: "10 000",
    userOctober: "10 000",
    userNovember: "10 000",
    userDecember: "10 000",
    userMerchName: "Толстовка 3",
    userMerchPrice: "2500",
    userHudi: "10",
    userCoffee: "10",
    userSticker: "10",
    userPlus: "10",
    userArzamas: "10",
    userShopper: "10",
    userBackpack: "10",
  },
];

function SelectEditInputCell(props) {
  const { id, value, field } = props;
  const apiRef = useGridApiContext();

  const handleChange = async (event) => {
    await apiRef.current.setEditCellValue({
      id,
      field,
      value: event.target.value,
    });
    apiRef.current.stopCellEditMode({ id, field });
  };

  return (
    <div>
      <FormControl sx={{ width: 130, margin: 0 }}>
        <Select
          sx={{
            ".MuiOutlinedInput-input": {
              padding: "6px 6px 6px 6px",
            },
            backgroundColor: "#E8F2FF",
          }}
          value={value}
          autoFocus
          onChange={handleChange}
          autoWidth
        >
          <MenuItem value={"активный"}>активный</MenuItem>
          <MenuItem value={"уточняется"}>уточняется</MenuItem>
          <MenuItem value={"на паузе"}>на паузе</MenuItem>
          <MenuItem value={"не амбассадор"}>не амбассадор</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

export const renderSelectEditInputCell = (params) => {
  return <SelectEditInputCell {...params} />;
};

function SelectEditInputCellProfession(props) {
  const { id, value, field } = props;
  const apiRef = useGridApiContext();

  const handleChange = async (event) => {
    await apiRef.current.setEditCellValue({
      id,
      field,
      value: event.target.value,
    });
    apiRef.current.stopCellEditMode({ id, field });
  };

  return (
    <div>
      <FormControl sx={{ width: 380, margin: 0 }}>
        <Select
          sx={{
            ".MuiOutlinedInput-input": {
              padding: "6px 6px 6px 6px",
            },
            backgroundColor: "#E8F2FF",
          }}
          value={value}
          autoFocus
          onChange={handleChange}
          autoWidth
        >
          <MenuItem value={"Дизайнер интерфейсов"}>
            Дизайнер интерфейсов
          </MenuItem>
          <MenuItem value={"Продакт — менеджер для специалистов с опытом"}>
            Продакт — менеджер для специалистов с опытом
          </MenuItem>
          <MenuItem value={"Бизнес-аналитик"}>Бизнес-аналитик</MenuItem>
          <MenuItem value={"Системный аналитик"}>Системный аналитик</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

export const renderSelectEditInputCellProfession = (params) => {
  return <SelectEditInputCellProfession {...params} />;
};

function SelectEditInputCellMerch(props) {
  const { id, value, field } = props;
  const apiRef = useGridApiContext();

  const handleChange = async (event) => {
    await apiRef.current.setEditCellValue({
      id,
      field,
      value: event.target.value,
    });
    apiRef.current.stopCellEditMode({ id, field });
  };

  return (
    <div>
      <FormControl sx={{ width: 150, margin: 0 }}>
        <Select
          sx={{
            ".MuiOutlinedInput-input": {
              padding: "6px 6px 6px 6px",
            },
            backgroundColor: "#E8F2FF",
          }}
          value={value}
          autoFocus
          onChange={handleChange}
          autoWidth
        >
          <MenuItem value={"Доступно"}>Доступно</MenuItem>
          <MenuItem value={"Доступно: 0/2"}>Доступно: 0/2</MenuItem>
          <MenuItem value={"Доступно: 1/2"}>Доступно: 1/2</MenuItem>
          <MenuItem value={"Доступно: 2/2"}>Доступно: 2/2</MenuItem>
          <MenuItem value={"Недоступно"}>Недоступно</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

export const renderSelectEditInputCellMerch = (params) => {
  return <SelectEditInputCellMerch {...params} />;
};

export const PROMOCODES_COLUMNS = [
  {
    field: "userStatus",
    headerName: "Статус",
    width: 150,
    editable: true,
    sortable: false,
    headerAlign: "center",
    align: "center",
    type: "singleSelect",
    renderEditCell: renderSelectEditInputCell,
  },
  {
    field: "id",
    headerName: "ID",
    width: 90,
    type: "number",
    sortable: false,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "userDate",
    headerName: " Дата",
    width: 120,
    editable: true,
    headerAlign: "center",
    align: "center",
    // type: 'date'
  },
  {
    field: "userName",
    headerName: "ФИО",
    width: 220,
    editable: false,
    headerAlign: "center",
    align: "center",
    renderCell: (cellValues) => {
      return (
        <Button
          style={{
            color: "#1D6BF3",
            textTransform: "none",
            fontWeight: "400",
          }}
          onClick={buttonClick}
        >
          {cellValues.row.userName}
        </Button>
      );
    },
  },
  {
    field: "userTelegram",
    headerName: "Telegram",
    headerAlign: "center",
    align: "center",
    sortable: false,
    editable: true,
    width: 200,
  },
  {
    field: "userPromocode",
    headerName: "Промокод",
    headerAlign: "center",
    align: "center",
    sortable: false,
    editable: true,
    width: 220,
  },
];

export const AMBASSADORS_COLUMNS = [
  {
    field: "userStatus",
    headerName: "Статус",
    headerAlign: "center",
    align: "center",
    width: 150,
    editable: true,
    sortable: false,
    disableColumnMenu: true,
    type: "singleSelect",
    renderEditCell: renderSelectEditInputCell,
  },
  {
    field: "id",
    headerName: "ID",
    headerAlign: "center",
    align: "center",
    width: 90,
    type: "number",
    sortable: false,
    disableColumnMenu: true,
  },
  {
    field: "id",
    type: "actions",
    headerName: "Действия",
    headerAlign: "center",
    align: "center",
    width: 100,
    disableColumnMenu: true,
    getActions: ({ id }) => {
      return (
        <GridActionsCellItem
          icon={<SaveIcon />}
          label="Save"
          sx={{
            color: "primary.main",
          }}
          // onClick={handleSaveClick(id)}
        />
      );
    },
  },
  {
    field: "userDate",
    headerName: " Дата",
    headerAlign: "center",
    align: "center",
    width: 120,
    editable: true,
    disableColumnMenu: true,
  },
  {
    field: "userName",
    headerName: "ФИО",
    headerAlign: "center",
    align: "center",
    width: 220,
    editable: true,
    disableColumnMenu: true,
    renderCell: (cellValues) => {
      return (
        <Button
          style={{
            color: "#1D6BF3",
            textTransform: "none",
            fontWeight: "400",
          }}
          onClick={buttonClick}
        >
          {cellValues.row.userName}
        </Button>
      );
    },
  },
  {
    field: "userProgramm",
    headerName: "Программа",
    headerAlign: "center",
    align: "center",
    editable: true,
    width: 400,
    type: "singleSelect",
    sortable: false,
    // valueOptions: [
    //   "Дизайнер интерфейсов",
    //   "Продакт — менеджер для специалистов с опытом",
    //   "Бизнес-аналитик",
    //   "Системный аналитик",
    // ],
    renderEditCell: renderSelectEditInputCellProfession,
  },
  {
    field: "userCountry",
    headerName: "Страна",
    headerAlign: "center",
    align: "center",
    editable: true,
    width: 120,
    sortable: false,
  },
  {
    field: "userCity",
    headerName: "Город",
    headerAlign: "center",
    align: "center",
    editable: true,
    width: 120,
    sortable: false,
  },
];

export const CONTENT_COLUMNS = [
  {
    headerName: "ID",
    headerAlign: "center",
    align: "center",
    field: "userId",
    sortable: false,
    disableColumnMenu: true,
    width: 90,
  },
  {
    headerName: "Отправка мерча",
    headerAlign: "center",
    align: "center",
    field: "userSendMerch",
    width: 162,
    editable: true,
    disableColumnMenu: true,
    type: "singleSelect",
    renderEditCell: renderSelectEditInputCellMerch,
  },
  {
    headerName: "Статус",
    headerAlign: "center",
    align: "center",
    field: "userStatus",
    width: 140,
    editable: true,
    disableColumnMenu: true,
    renderEditCell: renderSelectEditInputCell,
  },
  {
    headerName: "ФИО",
    headerAlign: "center",
    align: "center",
    field: "userName",
    width: 220,
    editable: false,
    disableColumnMenu: true,
    renderCell: (cellValues) => {
      return (
        <Button
          style={{
            color: "#1D6BF3",
            textTransform: "none",
            fontWeight: "400",
          }}
          onClick={buttonClick}
        >
          {cellValues.row.userName}
        </Button>
      );
    },
  },
  {
    headerName: "Telegram",
    headerAlign: "center",
    align: "center",
    field: "userTelegram",
    width: 164,
    editable: true,
    disableColumnMenu: true,
  },
  {
    headerName: "Отзыв",
    headerAlign: "center",
    align: "center",
    field: "userFeedback",
    width: 214,
    editable: true,
    disableColumnMenu: true,
    renderCell: (cellValues) => {
      return (
        <Link
          style={{ textDecoration: "none", color: "#1D6BF3" }}
          to={cellValues.row.userFeedback}
          target="blank"
        >
          {cellValues.row.userFeedback}
        </Link>
      );
    },
  },
  {
    headerName: "Хабр",
    headerAlign: "center",
    align: "center",
    field: "userHabr",
    width: 214,
    editable: true,
    disableColumnMenu: true,
    renderCell: (cellValues) => {
      return (
        <Link
          style={{ textDecoration: "none", color: "#1D6BF3" }}
          to={cellValues.row.userHabr}
          target="blank"
        >
          {cellValues.row.userHabr}
        </Link>
      );
    },
  },
];

export const SEND_MERCH_COLUMNS = [
  {
    headerName: "ID",
    field: "id",
    width: 60,
    headerAlign: "center",
    align: "center",
    type: "number",
    sortable: false,
  },
  {
    headerName: "Куратор",
    field: "userCurator",
    width: 184,
    headerAlign: "center",
    align: "center",
    editable: false,
    renderCell: (cellValues) => {
      return (
        <Button
          style={{
            color: "#1D6BF3",
            textTransform: "none",
            fontWeight: "400",
          }}
          onClick={buttonClick}
        >
          {cellValues.row.userName}
        </Button>
      );
    },
  },
  {
    headerName: "Мерч",
    field: "userMerch",
    width: 208,
    headerAlign: "center",
    align: "center",
    editable: true,
  },
  {
    headerName: "Размер толстовки",
    field: "userHudiSize",
    width: 195,
    headerAlign: "center",
    align: "center",
    editable: true,
  },
  {
    headerName: "Размер носков",
    field: "userSocksSize",
    width: 195,
    headerAlign: "center",
    align: "center",
    editable: true,
  },
  {
    headerName: "ФИО",
    field: "userName",
    width: 184,
    headerAlign: "center",
    align: "center",
    editable: false,
    renderCell: (cellValues) => {
      return (
        <Button
          style={{
            color: "#1D6BF3",
            textTransform: "none",
            fontWeight: "400",
          }}
          onClick={buttonClick}
        >
          {cellValues.row.userName}
        </Button>
      );
    },
  },
  {
    headerName: "Индекс",
    field: "userIndex",
    width: 103,
    headerAlign: "center",
    align: "center",
    editable: true,
  },
];

export const BUDGET_COLUMN = [
  {
    headerName: "ID",
    headerAlign: "center",
    align: "center",
    field: "userId",
    width: 40,
    sortable: false,
  },
  {
    headerName: "ФИО",
    headerAlign: "center",
    align: "center",
    field: "userName",
    width: 200,
    editable: false,
    renderCell: (cellValues) => {
      return (
        <Button
          style={{
            color: "#1D6BF3",
            textTransform: "none",
            fontWeight: "400",
          }}
          onClick={buttonClick}
        >
          {cellValues.row.userName}
        </Button>
      );
    },
  },
  {
    headerName: "Итог",
    headerAlign: "center",
    align: "center",
    field: "userTotal",
    width: 100,
    editable: true,
  },
  {
    headerName: "Январь",
    headerAlign: "center",
    align: "center",
    field: "userJanuare",
    width: 100,
    editable: true,
  },
  {
    headerName: "Февраль",
    headerAlign: "center",
    align: "center",
    field: "userFebruare",
    width: 100,
    editable: true,
  },
  {
    headerName: "Март",
    headerAlign: "center",
    align: "center",
    field: "userMart",
    width: 100,
    editable: true,
  },
  {
    headerName: "Апрель",
    headerAlign: "center",
    align: "center",
    field: "userApril",
    width: 100,
    editable: true,
  },
  {
    headerName: "Май",
    headerAlign: "center",
    align: "center",
    field: "userMay",
    width: 100,
    editable: true,
  },
  {
    headerName: "Июнь",
    headerAlign: "center",
    align: "center",
    field: "userJune",
    width: 100,
    editable: true,
  },
  {
    headerName: "Июль",
    headerAlign: "center",
    align: "center",
    field: "userJuly",
    width: 100,
    editable: true,
  },
  {
    headerName: "Август",
    headerAlign: "center",
    align: "center",
    field: "userAugust",
    width: 100,
    editable: true,
  },
  {
    headerName: "Сентябрь",
    headerAlign: "center",
    align: "center",
    field: "userSeptember",
    width: 100,
    editable: true,
  },
  {
    headerName: "Октябрь",
    headerAlign: "center",
    align: "center",
    field: "userOctober",
    width: 100,
    editable: true,
  },
  {
    headerName: "Ноябрь",
    headerAlign: "center",
    align: "center",
    field: "userNovember",
    width: 100,
    editable: true,
  },
  {
    headerName: "Декабрь",
    headerAlign: "center",
    align: "center",
    field: "userDecember",
    width: 100,
    editable: true,
  },
];

export const BUDGET_PRICE_COLUMN = [
  {
    headerName: "ID",
    headerAlign: "center",
    align: "center",
    field: "id",
    width: 40,
    sortable: false,
  },
  {
    headerName: "Мерч",
    headerAlign: "center",
    align: "center",
    field: "userMerchName",
    width: 792,
    sortable: false,
    editable: true,
  },
  {
    headerName: "Стоимость",
    headerAlign: "center",
    align: "center",
    field: "userMerchPrice",
    width: 300,
    editable: true,
    sortable: false,
  },
];

export const LOYALTI_PROGRAMM_COLUMN = [
  {
    headerName: "ID",
    headerAlign: "center",
    align: "center",
    field: "userId",
    width: 40,
    sortable: false,
  },
  {
    headerName: "ФИО",
    headerAlign: "center",
    align: "center",
    field: "userName",
    width: 200,
    renderCell: (cellValues) => {
      return (
        <Button
          style={{
            color: "#1D6BF3",
            textTransform: "none",
            fontWeight: "400",
          }}
          onClick={buttonClick}
        >
          {cellValues.row.userName}
        </Button>
      );
    },
  },
  {
    headerName: "Толстовка",
    headerAlign: "center",
    align: "center",
    field: "userHudi",
    width: 120,
    editable: true,
  },
  {
    headerName: "Кофе",
    headerAlign: "center",
    align: "center",
    field: "userCoffee",
    width: 110,
    editable: true,
  },
  {
    headerName: "Стикеры",
    headerAlign: "center",
    align: "center",
    field: "userSticker",
    width: 110,
    editable: true,
  },
  {
    headerName: "Плюс",
    headerAlign: "center",
    align: "center",
    field: "userPlus",
    width: 110,
    editable: true,
  },
  {
    headerName: "Арзамас",
    headerAlign: "center",
    align: "center",
    field: "userArzamas",
    width: 110,
    editable: true,
  },
  {
    headerName: "Шоппер",
    headerAlign: "center",
    align: "center",
    field: "userShopper",
    width: 110,
    editable: true,
  },
  {
    headerName: "Рюкзак",
    headerAlign: "center",
    align: "center",
    field: "userBackpack",
    width: 110,
    editable: true,
  },
];

export const HISTORY = [
  {
    userId: '3',
    userData: '14.02.2024 15:23',
    userIconStatus: '1',
    userSection: 'Амбассадоры',
    userName: 'Иванов Иван Иванович',
    userAction: 'Новый амбассадор'
  },
  {
    userId: '10',
    userData: '14.02.2024 15:23',
    userIconStatus: '2',
    userSection: 'Промокоды',
    userName: 'Иванов НЕИван Иванович',
    userAction: 'Получен промокод ABCDEF12'
  },
  {
    userId: '89',
    userData: '14.02.2024 15:23',
    userIconStatus: '3',
    userSection: 'Контент',
    userName: 'Петров Петрович',
    userAction: 'Добавлен новый контент'
  },
  {
    userId: '7',
    userData: '14.02.2024 15:23',
    userIconStatus: '4',
    userSection: 'Контент',
    userName: 'Петров Петрович',
    userAction: 'Гайд'
  },
]
