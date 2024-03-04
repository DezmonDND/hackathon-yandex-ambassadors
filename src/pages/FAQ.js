import Layout from "../layouts/default"
import Box from "@mui/material/Box";
import Toolbar from "../components/Toolbar/Toolbar";
import { PlusButton } from "../components/Buttons/Buttons";
import { DataGrid } from "@mui/x-data-grid";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

function FAQ() {
  const columns = [{
    headerName: "",
    headerAlign: "center",
    align: "center",
    field: "id",
    width: 140,
    sortable: false,
  },]
  const rows = [{ id: '' }]
  const handleAddNewFaq = () => {
    console.log('work')
  }
  function MenuButtons() {
    return (
      <>
        <PlusButton onClick={handleAddNewFaq}></PlusButton>
      </>
    );
  }
  function CustomToolbar() {
    return (
      <>
        <Toolbar checkboxSelection={false}>
          <MenuButtons></MenuButtons>
        </Toolbar>
      </>
    );
  }
  return (
    <Layout>
      <Box sx={{ height: "100%", width: "100%" }}>
        <Box sx={{ height: "auto", width: '100%', mb: 1 }}>
          <DataGrid
            slots={{
              toolbar: CustomToolbar
            }}
            columns={columns}
            rows={rows}
            sx={{
              ".MuiDataGrid-main": {
                height: "0px",
              }
            }}
            hideFooter={true}
          ></DataGrid>
        </Box>
        <Box sx={{ height: "auto", width: '100%', mb: 2 }}>
          <Accordion>
            <AccordionSummary
              expandIcon={<ArrowDownwardIcon />}
              aria-controls="faq"
              id="faq_category"
            >
              <Typography>Название категории</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <span>Q:</span> Текст вопроса
                <span>A:</span> Текст ответа
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Box>
      </Box>
    </Layout>
  )
}

export default FAQ;

