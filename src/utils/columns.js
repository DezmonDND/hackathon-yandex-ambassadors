import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import WorkspacePremiumOutlinedIcon from '@mui/icons-material/WorkspacePremiumOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import AppShortcutOutlinedIcon from '@mui/icons-material/AppShortcutOutlined';

export const HISTORY_COLUMN = [
  {
    headerName: "",
    headerAlign: "center",
    align: "center",
    field: "userIconStatus",
    width: 60,
    sortable: false,
    renderCell: (cellValues) => {
      const status = cellValues.row.userIconStatus
      return (
        status === '1' ? (
          <PermIdentityOutlinedIcon color="success" />
        )
        : (
          status === '2' ? (
            <WorkspacePremiumOutlinedIcon color="error" />
          ) : (
            status === '3' ? (
              <BookmarkBorderOutlinedIcon color="primary" />
            ) : (
              <AppShortcutOutlinedIcon color="info" />
            )
          )
        )
      );
    },
  },
  {
    headerName: "Дата/Время",
    headerAlign: "center",
    align: "center",
    field: "userData",
    width: 140,
  },
  {
    headerName: "Раздел",
    headerAlign: "center",
    align: "center",
    field: "userSection",
    width: 140,
  },
  {
    headerName: "ID",
    headerAlign: "center",
    align: "center",
    field: "userId",
    width: 60,
    sortable: false,
  },
  {
    headerName: "ФИО",
    headerAlign: "center",
    align: "center",
    field: "userName",
    width: 220
  },
  {
    headerName: "Действие",
    headerAlign: "center",
    align: "center",
    field: "userAction",
    width: 340,
  },
];
