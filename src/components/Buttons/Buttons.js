import SvgIcon from "@mui/material/SvgIcon";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import Button from "@mui/material/Button";
import { IconButton, ListItemIcon, MenuItem } from "@mui/material";
import SwapVertOutlinedIcon from "@mui/icons-material/SwapVertOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import DriveFileRenameOutlineOutlinedIcon from "@mui/icons-material/DriveFileRenameOutlineOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";
import DateRangeOutlinedIcon from "@mui/icons-material/DateRangeOutlined";
import CheckIcon from "@mui/icons-material/Check";
import CheckBoxOutlineIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import { useCallback } from "react";
import { useGridApiContext } from "@mui/x-data-grid";
import SettingsApplicationsRoundedIcon from "@mui/icons-material/SettingsApplicationsRounded";
import CloseIcon from "@mui/icons-material/Close";

export function ClearButton(props) {
  return (
    <Button
      color="primary"
      sx={{
        color: "#1d6bf3",
        border: "1px solid #1d6bf3",
        minWidth: "132px",
        height: "34px",
        fontWeight: "400",
        fontSize: "14px",
        lineHeight: "20px",
        textWrap: "nowrap",
        textTransform: "none",
      }}
      onClick={props.onClick}
    >
      Очистить выбор
    </Button>
  );
}

export function DeleteButton({ onClick }) {
  return (
    <Button
      onClick={onClick}
      color="primary"
      sx={{
        color: "#ff0200",
        border: "1px solid #ff0200",
        width: "155px",
        height: "34px",
        fontWeight: "400",
        textTransform: "none",
        minWidth: "155px",
        fontSize: "14px",
        lineHeight: "20px",
        textWrap: "nowrap",
      }}
    >
      Удалить выбранные
    </Button>
  );
}

export function DateButton(props) {
  return (
    <IconButton
      sx={{
        border: "1px solid #1d6bf3",
        color: "#1d6bf3",
        borderRadius: "4px",
        width: "73px",
        height: "34px",
        fontSize: "16px",
        justifyContent: "space-around",
      }}
    >
      <SvgIcon
        sx={{ color: "#1d6bf3", width: "19px", height: "19px" }}
        component={DateRangeOutlinedIcon}
      ></SvgIcon>
      Год
    </IconButton>
  );
}

export function UploadButton(props) {
  return (
    <IconButton
      sx={{
        border: "1px solid #1d6bf3",
        borderRadius: "4px",
        width: "34px",
        height: "34px",
      }}
    >
      <SvgIcon
        sx={{ color: "#1d6bf3", width: "19px", height: "19px" }}
        component={UploadFileIcon}
      ></SvgIcon>
    </IconButton>
  );
}

export function SortButton(props) {
  return (
    <IconButton
      sx={{
        border: "1px solid #1d6bf3",
        borderRadius: "4px",
        width: "34px",
        height: "34px",
      }}
    >
      <SvgIcon
        sx={{ color: "#1d6bf3", width: "19px", height: "19px" }}
        component={SwapVertOutlinedIcon}
      ></SvgIcon>
    </IconButton>
  );
}

export function SettingsButton({ onClick }) {
  return (
    <IconButton
      onClick={onClick}
      sx={{
        border: "1px solid #1d6bf3",
        borderRadius: "4px",
        width: "34px",
        height: "34px",
      }}
    >
      <SvgIcon
        sx={{ color: "#1d6bf3", width: "19px", height: "19px" }}
        component={SettingsOutlinedIcon}
      ></SvgIcon>
    </IconButton>
  );
}

export function SettingsButtonActive({ onClick }) {
  return (
    <IconButton
      onClick={onClick}
      sx={{
        border: "1px solid #1d6bf3",
        borderRadius: "4px",
        width: "34px",
        height: "34px",
      }}
    >
      <SvgIcon
        sx={{ width: "19px", height: "19px" }}
        component={SettingsApplicationsRoundedIcon}
      ></SvgIcon>
    </IconButton>
  );
}

export function PencilButton() {
  return (
    <IconButton
      sx={{
        border: "1px solid #1d6bf3",
        borderRadius: "4px",
        width: "34px",
        height: "34px",
      }}
    >
      <SvgIcon
        sx={{ color: "#1d6bf3", width: "19px", height: "19px" }}
        component={DriveFileRenameOutlineOutlinedIcon}
      ></SvgIcon>
    </IconButton>
  );
}

export function PlusButton({ onClick }) {
  return (
    <IconButton
      onClick={onClick}
      sx={{
        border: "1px solid #1d6bf3",
        borderRadius: "4px",
        width: "34px",
        height: "34px",
      }}
    >
      <SvgIcon
        sx={{ color: "#1d6bf3", width: "19px", height: "19px" }}
        component={AddOutlinedIcon}
      ></SvgIcon>
    </IconButton>
  );
}

export function MinusButton({ onClick }) {
  return (
    <IconButton
      onClick={onClick}
      sx={{
        border: "1px solid #1d6bf3",
        borderRadius: "4px",
        width: "34px",
        height: "34px",
      }}
    >
      <SvgIcon
        sx={{ color: "#1d6bf3", width: "19px", height: "19px" }}
        component={RemoveOutlinedIcon}
      ></SvgIcon>
    </IconButton>
  );
}

export function SortIcon() {
  return (
    <IconButton
      sx={{
        border: "1px solid #1d6bf3",
        borderRadius: "4px",
        width: "34px",
        height: "34px",
      }}
    >
      <SvgIcon
        sx={{ color: "#1d6bf3", width: "19px", height: "19px" }}
        component={SwapVertOutlinedIcon}
      ></SvgIcon>
    </IconButton>
  );
}

export function CloseIconButton({ onClick }) {
  return (
    <IconButton
      onClick={onClick}
      sx={{
        border: "1px solid #1d6bf3",
        borderRadius: "4px",
        width: "34px",
        height: "34px",
        backgroundColor: "#1D6BF3",
      }}
    >
      <SvgIcon
        sx={{
          color: "#ffffff",
          width: "19px",
          height: "19px",
        }}
        component={CloseIcon}
      ></SvgIcon>
    </IconButton>
  );
}

export function CheckboxSelectionButton({ onClick }) {
  return (
    <IconButton
      onClick={onClick}
      sx={{
        border: "1px solid #1d6bf3",
        borderRadius: "4px",
        width: "34px",
        height: "34px",
      }}
    >
      <SvgIcon
        sx={{ color: "#1d6bf3", width: "19px", height: "19px" }}
        component={UploadFileIcon}
      ></SvgIcon>
    </IconButton>
  );
}

export function CheckboxSelectionButtonActive({ onClick }) {
  return (
    <IconButton
      onClick={onClick}
      style={{
        backgroundColor: "#1D6BF3",
      }}
      sx={{
        border: "1px solid #1d6bf3",
        borderRadius: "4px",
        width: "34px",
        height: "34px",
      }}
    >
      <SvgIcon
        sx={{ color: "#FFFFFF", width: "19px", height: "19px" }}
        component={UploadFileIcon}
      ></SvgIcon>
    </IconButton>
  );
}

export function CheckBoxIcon() {
  return (
    <SvgIcon
      sx={{ color: "#1d6bf3", width: "19px", height: "19px" }}
      component={CheckIcon}
    ></SvgIcon>
  );
}

export function CheckBoxOutlineBlankIcon() {
  return (
    <SvgIcon
      sx={{ color: "#1d6bf3", width: "19px", height: "19px" }}
      component={CheckBoxOutlineIcon}
    ></SvgIcon>
  );
}

export function FilterButton(props) {
  const { onClick, colDef } = props;
  const apiRef = useGridApiContext();
  const handleClick = useCallback(
    (event) => {
      apiRef.current.showFilterPanel(colDef.field);
      onClick(event);
    },
    [apiRef, colDef.field, onClick]
  );

  return (
    <MenuItem onClick={handleClick}>
      <ListItemIcon>
        <FilterAltOutlinedIcon fontSize="small" />
      </ListItemIcon>
    </MenuItem>
  );
}
