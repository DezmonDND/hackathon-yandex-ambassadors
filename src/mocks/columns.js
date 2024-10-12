import { Button, FormControl, MenuItem, Select } from "@mui/material";
import { useGridApiContext } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import "../index.css";
import Checkbox from "@mui/material/Checkbox";
import {
  CheckBoxIcon,
  CheckBoxOutlineBlankIcon,
} from "../components/Buttons/Buttons";

export function buttonClick() {
  alert("Привет!");
}

export function SelectEditInputCell(props) {
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
  if (value !== 0) {
    return <Link to={"/"}></Link>;
  }
}

export const renderSelectEditInputCellMerch = (params) => {
  return <SelectEditInputCellMerch {...params} />;
};

export const BUDGET_COLUMN = [
  {
    headerName: "ID",
    headerAlign: "center",
    align: "center",
    field: "id",
    width: 40,
    sortable: false,
  },
  {
    headerName: "ФИО",
    headerAlign: "center",
    align: "center",
    field: "name",
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
          {cellValues.row.name}
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

export const LOYALTI_PROGRAMM_COLUMN = [
  {
    headerName: "ID",
    headerAlign: "center",
    align: "center",
    field: "id",
    width: 40,
    sortable: false,
  },
  {
    headerName: "ФИО",
    headerAlign: "center",
    align: "center",
    field: "name",
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
          {cellValues.row.name}
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

export const AMBASSADORS_COLUMNS = (onClick, renderActions) => [
  {
    field: "status",
    headerName: "Статус",
    headerAlign: "center",
    align: "center",
    width: 150,
    editable: false,
    sortable: false,
    disableColumnMenu: true,
    type: "singleSelect",
    valueGetter: (params) => params?.row?.status?.name,
    renderEditCell: renderSelectEditInputCell,
  },
  {
    field: "id",
    headerName: "ID",
    headerAlign: "center",
    align: "center",
    width: 90,
    sortable: false,
    editable: false,
    disableColumnMenu: true,
  },
  {
    field: "actions",
    type: "actions",
    cellClassName: "actions",
    headerName: "Действия",
    headerAlign: "center",
    editable: false,
    align: "center",
    width: 100,
    disableColumnMenu: true,
    renderCell: renderActions,
  },
  {
    field: "created",
    headerName: " Дата",
    headerAlign: "center",
    align: "center",
    width: 120,
    editable: false,
    disableColumnMenu: true,
    valueFormatter: (params) => new Date(params?.value).toLocaleDateString(),
  },
  {
    field: "name",
    headerName: "ФИО",
    headerAlign: "center",
    align: "center",
    width: 220,
    editable: true,
    disableColumnMenu: true,
    renderCell: (cellValues) => {
      const handleClick = () => {
        const id = cellValues.row.id;
        onClick(id);
      };
      return (
        <Button
          style={{
            color: "#1D6BF3",
            textTransform: "none",
            fontWeight: "400",
          }}
          onClick={handleClick}
        >
          {cellValues?.row?.name}
        </Button>
      );
    },
  },
  {
    field: "gender",
    headerName: "Пол",
    headerAlign: "center",
    align: "center",
    editable: true,
    width: 80,
    sortable: false,
  },
  {
    field: "onboarding_status",
    headerName: "Онбординг",
    headerAlign: "center",
    align: "center",
    editable: true,
    width: 120,
    sortable: false,
    renderCell: (value) => {
      return (
        <Checkbox
          icon={<CheckBoxOutlineBlankIcon />}
          checkedIcon={<CheckBoxIcon />}
          checked={value.formattedValue === true ? true : false}
        />
      );
    },
  },
  {
    field: "program",
    headerName: "Программа",
    headerAlign: "center",
    align: "center",
    editable: true,
    width: 400,
    type: "singleSelect",
    sortable: false,
    valueGetter: (params) => params?.row?.program?.name,
    renderEditCell: renderSelectEditInputCellProfession,
  },
  {
    field: "country",
    headerName: "Страна",
    headerAlign: "center",
    align: "center",
    editable: true,
    width: 120,
    sortable: false,
    valueGetter: (params) => params?.row?.address?.country,
  },
  {
    field: "city",
    headerName: "Город",
    headerAlign: "center",
    align: "center",
    editable: true,
    width: 120,
    sortable: false,
    valueGetter: (params) => params?.row?.address?.city,
  },
  {
    field: "postal_code",
    headerName: "Почтовый код",
    headerAlign: "center",
    align: "center",
    editable: true,
    width: 120,
    sortable: false,
    valueGetter: (params) => params?.row?.address?.postal_code,
  },
  {
    field: "street",
    headerName: "Улица",
    headerAlign: "center",
    align: "center",
    editable: true,
    width: 200,
    sortable: false,
    valueGetter: (params) => params?.row?.address?.street,
  },
  {
    field: "clothing_size",
    headerName: "Размер одежды",
    headerAlign: "center",
    align: "center",
    editable: true,
    width: 200,
    sortable: false,
  },
  {
    field: "shoe_size",
    headerName: "Размер обуви",
    headerAlign: "center",
    align: "center",
    editable: true,
    width: 200,
    sortable: false,
  },
  {
    field: "email",
    headerName: "E-mail",
    headerAlign: "center",
    align: "center",
    editable: true,
    width: 141,
    sortable: false,
  },
  {
    field: "phone_number",
    headerName: "Телефон",
    headerAlign: "center",
    align: "center",
    editable: true,
    width: 136,
    sortable: false,
  },
  {
    field: "telegram_id",
    headerName: "Telegram",
    headerAlign: "center",
    align: "center",
    editable: true,
    width: 122,
    sortable: false,
  },
  {
    field: "education",
    headerName: "Образование",
    headerAlign: "center",
    align: "center",
    editable: true,
    width: 219,
    sortable: false,
  },
  {
    field: "job",
    headerName: "Место работы/должность",
    headerAlign: "center",
    align: "center",
    editable: true,
    width: 272,
    sortable: false,
  },
  {
    field: "purpose",
    headerName: "Цель в Практикуме",
    headerAlign: "center",
    align: "center",
    editable: true,
    width: 462,
    sortable: false,
    valueGetter: (params) => params?.row?.purpose?.name,
  },
  {
    field: "activity",
    headerName: "Цель амбассадорства",
    headerAlign: "center",
    align: "center",
    editable: false,
    minWidth: 462,
    sortable: false,
    renderCell: (params) => {
      if (params.row.activity.length !== 0) {
        return (
          <ul
            style={{
              display: "flex",
              overflow: "scroll",
              scrollbarWidth: "none",
            }}
          >
            {params.value.map((activity, index) => (
              <li style={{ marginRight: "5px" }} key={index}>
                {activity.name}
              </li>
            ))}
          </ul>
        );
      }
    },

    type: "string",
  },
];

export const CONTENT_COLUMNS = (onClick, renderActions, REGEX_URL) => [
  {
    headerName: "ID",
    headerAlign: "center",
    align: "center",
    field: "id",
    sortable: false,
    disableColumnMenu: true,
    width: 90,
  },
  {
    field: "actions",
    type: "actions",
    cellClassName: "actions",
    headerName: "Действия",
    headerAlign: "center",
    editable: false,
    align: "center",
    width: 100,
    disableColumnMenu: true,
    renderCell: renderActions,
  },
  {
    headerName: "Отправка мерча",
    headerAlign: "center",
    align: "center",
    field: "sending_merch",
    width: 162,
    editable: false,
    disableColumnMenu: true,
    type: "singleSelect",
    valueGetter: (cellValues) => {
      return `Доступно: ${cellValues.value}/2`;
    },
    renderCell: (cellValues) => {
      if (cellValues.value !== "Доступно: 0/2") {
        return (
          <Link
            style={{
              backgroundColor: "#5A9BFF",
              color: "#FFFFFF",
              textDecoration: "none",
              padding: "10px 23px 10px 23px",
              borderRadius: "4px",
            }}
            to={"/send-merch"}
          >
            {cellValues.value}
          </Link>
        );
      }
    },
  },
  {
    headerName: "Статус",
    headerAlign: "center",
    align: "center",
    field: "status",
    width: 140,
    editable: false,
    disableColumnMenu: true,
    renderEditCell: renderSelectEditInputCell,
  },
  {
    headerName: "ФИО",
    headerAlign: "center",
    align: "center",
    field: "name",
    width: 220,
    editable: true,
    disableColumnMenu: true,
    renderCell: (cellValues) => {
      const handleClick = () => {
        const id = cellValues.row.id;
        onClick(id);
      };
      return (
        <Button
          style={{
            color: "#1D6BF3",
            textTransform: "none",
            fontWeight: "400",
          }}
          onClick={handleClick}
        >
          {cellValues.row.name}
        </Button>
      );
    },
  },
  {
    headerName: "Telegram",
    headerAlign: "center",
    align: "center",
    field: "telegram_id",
    width: 164,
    editable: true,
    disableColumnMenu: true,
  },
  {
    headerName: "Отзыв",
    headerAlign: "center",
    align: "center",
    field: "review",
    width: 214,
    editable: false,
    disableColumnMenu: true,
    renderCell: (cellValues) => {
      if (REGEX_URL.test(cellValues.value)) {
        return (
          <Link
            style={{
              textDecoration: "none",
              color: "#1D6BF3",
              overflow: "hidden",
            }}
            to={cellValues.row.review}
            target="blank"
          >
            {cellValues.row.review}
          </Link>
        );
      }
    },
  },
  {
    headerName: "Хабр",
    headerAlign: "center",
    align: "center",
    field: "content",
    width: 214,
    editable: false,
    disableColumnMenu: true,
    renderCell: (cellValues) => {
      if (REGEX_URL.test(cellValues.value)) {
        return (
          <Link
            style={{
              textDecoration: "none",
              color: "#1D6BF3",
              overflow: "hidden",
            }}
            to={cellValues.row.content}
            target="blank"
          >
            {cellValues.row.content}
          </Link>
        );
      }
    },
  },
  {
    headerName: "Комментарий",
    headerAlign: "center",
    align: "center",
    field: "comment",
    width: 300,
    editable: true,
    disableColumnMenu: true,
  },
];

export const SEND_MERCH_COLUMNS = (onClick) => [
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
    field: "tutor",
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
          {cellValues?.row?.tutor?.full_name}
        </Button>
      );
    },
  },
  {
    headerName: "Мерч",
    field: "merch",
    width: 208,
    headerAlign: "center",
    align: "center",
    editable: true,
    valueGetter: (params) => params?.row?.merch?.name,
  },
  {
    headerName: "Размер толстовки",
    field: "name_and_size",
    width: 195,
    headerAlign: "center",
    align: "center",
    editable: true,
    valueGetter: (params) => params?.row?.ambassador?.clothing_size,
  },
  {
    headerName: "Размер носков",
    field: "clothing_size",
    width: 195,
    headerAlign: "center",
    align: "center",
    editable: true,
    valueGetter: (params) => params?.row?.ambassador?.shoe_size,
  },
  {
    headerName: "ФИО",
    field: "name",
    width: 184,
    headerAlign: "center",
    align: "center",
    editable: false,
    renderCell: (cellValues) => {
      const handleClick = () => {
        const id = cellValues.row.ambassador.id;
        onClick(id);
      };
      return (
        <Button
          style={{
            color: "#1D6BF3",
            textTransform: "none",
            fontWeight: "400",
          }}
          onClick={handleClick}
        >
          {cellValues?.row?.ambassador?.name}
        </Button>
      );
    },
  },
  {
    headerName: "Индекс",
    field: "postal_code",
    width: 103,
    headerAlign: "center",
    align: "center",
    editable: true,
    valueGetter: (params) => params?.row?.ambassador?.address?.postal_code,
  },
  {
    headerName: "Страна",
    field: "country",
    width: 103,
    headerAlign: "center",
    align: "center",
    editable: true,
    valueGetter: (params) => params?.row?.ambassador?.address?.country,
  },
  {
    headerName: "Город",
    field: "city",
    width: 103,
    headerAlign: "center",
    align: "center",
    editable: true,
    valueGetter: (params) => params?.row?.ambassador?.address?.city,
  },
  {
    headerName: "Улица, дом, квартира",
    field: "street",
    width: 194,
    headerAlign: "center",
    align: "center",
    editable: true,
    valueGetter: (params) => params?.row?.ambassador?.address?.street,
  },
  {
    headerName: "Телефон",
    field: "application_number",
    width: 108,
    headerAlign: "center",
    align: "center",
    editable: true,
  },
  {
    headerName: "Месяц отправки",
    field: "created",
    width: 173,
    headerAlign: "center",
    align: "center",
    editable: false,
    valueFormatter: (params) =>
      new Date(params?.value).toLocaleString("default", { month: "long" }),
  },
];

export const PROMOCODES_COLUMNS = (onClick, renderActions) => [
  {
    field: "status",
    headerName: "Статус",
    width: 150,
    editable: false,
    sortable: false,
    headerAlign: "center",
    align: "center",
    type: "singleSelect",
    valueGetter: (params) => params?.row?.ambassador?.status?.name,
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
    field: "actions",
    type: "actions",
    cellClassName: "actions",
    headerName: "Действия",
    headerAlign: "center",
    editable: false,
    align: "center",
    width: 100,
    disableColumnMenu: true,
    renderCell: renderActions,
  },
  {
    field: "created",
    headerName: "Дата",
    width: 120,
    editable: false,
    headerAlign: "center",
    align: "center",
    valueFormatter: (params) => new Date(params?.value).toLocaleDateString(),
  },
  {
    field: "name",
    headerName: "ФИО",
    width: 220,
    editable: false,
    headerAlign: "center",
    align: "center",
    valueGetter: (params) => params?.row?.ambassador?.name,
    renderCell: (params) => {
      const handleClick = () => {
        const id = params.row.ambassador.id;
        onClick(id);
      };
      return (
        <Button
          style={{
            color: "#1D6BF3",
            textTransform: "none",
            fontWeight: "400",
          }}
          onClick={handleClick}
        >
          {params?.row?.ambassador?.name}
        </Button>
      );
    },
  },
  {
    field: "telegram",
    headerName: "Telegram",
    headerAlign: "center",
    align: "center",
    sortable: false,
    editable: false,
    width: 200,
    valueGetter: (params) => params?.row?.ambassador?.telegram,
  },
  {
    field: "code",
    headerName: "Промокод",
    headerAlign: "center",
    align: "center",
    sortable: false,
    editable: true,
    width: 220,
  },
];

export const BUDGET_PRICE_COLUMN = (renderActions, category) => [
  {
    headerName: "ID",
    headerAlign: "center",
    align: "center",
    field: "id",
    width: 40,
    sortable: false,
  },
  {
    field: "actions",
    type: "actions",
    cellClassName: "actions",
    headerName: "Действия",
    headerAlign: "center",
    editable: false,
    align: "center",
    width: 100,
    disableColumnMenu: true,
    renderCell: renderActions,
  },
  {
    headerName: "Мерч",
    headerAlign: "center",
    align: "center",
    field: "name",
    width: 692,
    sortable: false,
    editable: true,
  },
  {
    headerName: "Стоимость",
    headerAlign: "center",
    align: "center",
    field: "cost",
    width: 300,
    editable: true,
    sortable: false,
  },
  {
    headerName: "Категория",
    headerAlign: "center",
    align: "center",
    field: "category",
    width: 100,
    sortable: false,
    editable: true,
    valueGetter: (params) => params?.row?.category?.id || category,
  },
];
