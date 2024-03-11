import { forwardRef } from "react";
import Checkbox from "@mui/material/Checkbox";
import CheckBoxOutlinedIcon from "@mui/icons-material/CheckBoxOutlined";
import CheckBoxOutlineBlankOutlinedIcon from "@mui/icons-material/CheckBoxOutlineBlankOutlined";

export const newBaseCheckbox = forwardRef((props, ref) => {
  return (
    <Checkbox
      ref={ref}
      {...props}
      checkedIcon={<CheckBoxOutlinedIcon />}
      icon={<CheckBoxOutlineBlankOutlinedIcon style={{ color: "#DDE0E4" }} />}
    />
  );
});
