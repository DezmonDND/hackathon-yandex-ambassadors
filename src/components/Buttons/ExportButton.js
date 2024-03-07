import { GridToolbarExportContainer } from "@mui/x-data-grid";
import * as React from "react";
import { ExportMenuItem } from "../Export";

export function ExportButton({ config, ...rest }) {
  return (
    <GridToolbarExportContainer {...rest}>
      <ExportMenuItem config={config}/>
    </GridToolbarExportContainer>
  );
}
