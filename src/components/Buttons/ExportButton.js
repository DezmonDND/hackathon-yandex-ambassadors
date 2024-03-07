import { GridToolbarExportContainer } from "@mui/x-data-grid";
import * as React from "react";
import { ExportMenuItem } from "../Export";

export function ExportButton(props) {
  return (
    <GridToolbarExportContainer {...props}>
      <ExportMenuItem config={props.config}/>
    </GridToolbarExportContainer>
  );
}
