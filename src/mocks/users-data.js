import { Button, Select } from "@mui/material";
import { useGridApiContext } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import "../index.css";
import { randomId } from "@mui/x-data-grid-generator";

function buttonClick() {
  alert("Привет!");
}

export const USERS = [
  {
    id: randomId(),
    userStatus: "активный",
    userId: "1",
    userDate: "Дата 2",
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
    userDate: "Дата 48",
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
    userDate: "Дата",
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
    userDate: "Дата 1",
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
    <Select
      style={{
        color: "#1A1B22",
        backgroundColor: "#E8F2FF",
      }}
      value={value}
      onChange={handleChange}
      size="small"
      sx={{ height: 1 }}
      native
      autoFocus
    >
      <option className="btn_foc" style={{}}>
        активный
      </option>
      <option
        style={{
          color: "black",
        }}
      >
        уточняется
      </option>
      <option
        style={{
          color: "black",
        }}
      >
        на паузе
      </option>
      <option
        style={{
          color: "black",
        }}
      >
        не амбассадор
      </option>
    </Select>
  );
}

const renderSelectEditInputCell = (params) => {
  return <SelectEditInputCell {...params} />;
};

export const PROMOCODES_COLUMNS = [
  {
    field: "userStatus",
    headerName: "Статус",
    width: 140,
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
  },
  {
    field: "userName",
    headerName: "ФИО",
    width: 220,
    editable: true,
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
    width: 200,
  },
  {
    field: "userPromocode",
    headerName: "Промокод",
    headerAlign: "center",
    align: "center",
    sortable: false,
    width: 220,
  },
];

export const AMBASSADORS_COLUMNS = [
  {
    field: "userStatus",
    headerName: "Статус",
    headerAlign: "center",
    align: "center",
    width: 140,
    editable: true,
  },
  {
    field: "id",
    headerName: "ID",
    headerAlign: "center",
    align: "center",
    width: 90,
    type: "number",
    sortable: false,
  },
  {
    field: "userDate",
    headerName: " Дата",
    headerAlign: "center",
    align: "center",
    width: 120,
    editable: true,
  },
  {
    field: "userName",
    headerName: "ФИО",
    headerAlign: "center",
    align: "center",
    width: 220,
    editable: true,
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
    valueOptions: [
      "Дизайнер интерфейсов",
      "Продакт — менеджер для специалистов с опытом",
      "Бизнес-аналитик",
      "Системный аналитик",
    ],
  },
  {
    field: "userCountry",
    headerName: "Страна",
    headerAlign: "center",
    align: "center",
    editable: true,
    width: 120,
  },
  {
    field: "userCity",
    headerName: "Город",
    headerAlign: "center",
    align: "center",
    editable: true,
    width: 120,
  },
];

export const CONTENT_COLUMNS = [
  {
    headerName: "ID",
    headerAlign: "center",
    align: "center",
    field: "userId",
    width: 90,
  },
  {
    headerName: "Отправка мерча",
    headerAlign: "center",
    align: "center",
    field: "userSendMerch",
    width: 162,
    editable: true,
    type: "singleSelect",
    valueOptions: [
      "Доступно",
      "Доступно: 0/2",
      "Доступно: 1/2",
      "Доступно: 2/2",
      "Недоступно",
    ],
  },
  {
    headerName: "Статус",
    headerAlign: "center",
    align: "center",
    field: "userStatus",
    width: 140,
    editable: true,
    renderEditCell: renderSelectEditInputCell,
  },
  {
    headerName: "ФИО",
    headerAlign: "center",
    align: "center",
    field: "userName",
    width: 220,
    editable: true,
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
  },
  {
    headerName: "Отзыв",
    headerAlign: "center",
    align: "center",
    field: "userFeedback",
    width: 214,
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
  },
  {
    headerName: "Размер толстовки",
    field: "userHudiSize",
    width: 195,
    headerAlign: "center",
    align: "center",
  },
  {
    headerName: "Размер носков",
    field: "userSocksSize",
    width: 195,
    headerAlign: "center",
    align: "center",
  },
  {
    headerName: "ФИО",
    field: "userName",
    width: 184,
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
    headerName: "Индекс",
    field: "userIndex",
    width: 103,
    headerAlign: "center",
    align: "center",
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
  },
  {
    headerName: "Январь",
    headerAlign: "center",
    align: "center",
    field: "userJanuare",
    width: 100,
  },
  {
    headerName: "Февраль",
    headerAlign: "center",
    align: "center",
    field: "userFebruare",
    width: 100,
  },
  {
    headerName: "Март",
    headerAlign: "center",
    align: "center",
    field: "userMart",
    width: 100,
  },
  {
    headerName: "Апрель",
    headerAlign: "center",
    align: "center",
    field: "userApril",
    width: 100,
  },
  {
    headerName: "Май",
    headerAlign: "center",
    align: "center",
    field: "userMay",
    width: 100,
  },
  {
    headerName: "Июнь",
    headerAlign: "center",
    align: "center",
    field: "userJune",
    width: 100,
  },
  {
    headerName: "Июль",
    headerAlign: "center",
    align: "center",
    field: "userJuly",
    width: 100,
  },
  {
    headerName: "Август",
    headerAlign: "center",
    align: "center",
    field: "userAugust",
    width: 100,
  },
  {
    headerName: "Сентябрь",
    headerAlign: "center",
    align: "center",
    field: "userSeptember",
    width: 100,
  },
  {
    headerName: "Октябрь",
    headerAlign: "center",
    align: "center",
    field: "userOctober",
    width: 100,
  },
  {
    headerName: "Ноябрь",
    headerAlign: "center",
    align: "center",
    field: "userNovember",
    width: 100,
  },
  {
    headerName: "Декабрь",
    headerAlign: "center",
    align: "center",
    field: "userDecember",
    width: 100,
  },
];

export const BUDGET_PRICE_COLUMN = [
  {
    headerName: "ID",
    headerAlign: "center",
    align: "center",
    field: "userId",
    width: 40,
    sortable: false,
  },
  {
    headerName: "Мерч",
    headerAlign: "center",
    align: "center",
    field: "userMerchName",
    width: 792,
  },
  {
    headerName: "Стоимость",
    headerAlign: "center",
    align: "center",
    field: "userMerchPrice",
    width: 300,
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
  },
  {
    headerName: "Кофе",
    headerAlign: "center",
    align: "center",
    field: "userCoffee",
    width: 110,
  },
  {
    headerName: "Стикеры",
    headerAlign: "center",
    align: "center",
    field: "userSticker",
    width: 110,
  },
  {
    headerName: "Плюс",
    headerAlign: "center",
    align: "center",
    field: "userPlus",
    width: 110,
  },
  {
    headerName: "Арзамас",
    headerAlign: "center",
    align: "center",
    field: "userArzamas",
    width: 110,
  },
  {
    headerName: "Шоппер",
    headerAlign: "center",
    align: "center",
    field: "userShopper",
    width: 110,
  },
  {
    headerName: "Рюкзак",
    headerAlign: "center",
    align: "center",
    field: "userBackpack",
    width: 110,
  },
];
