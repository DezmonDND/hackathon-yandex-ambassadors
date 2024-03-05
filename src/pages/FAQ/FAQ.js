import Layout from "../../layouts/default";
import "./FAQ.css";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { PlusButton } from "../../components/Buttons/Buttons";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import { useNavigate } from "react-router-dom";

function FAQ() {
  const navigate = useNavigate();
  const handleAddNewFaq = () => {
    navigate("add-faq");
  };
  function MenuButtons() {
    return (
      <>
        <PlusButton onClick={handleAddNewFaq}></PlusButton>
      </>
    );
  }
  const handleEditFAQClick = () => {
    // Переход на страницу /edit-faq и передача пропсов
    navigate('edit-faq', {
      state: {
        category: 'Категория пропс',
        question: 'Текст вопроса пропс',
        answer: 'Текст ответа пропс',
      }
    });
  };
  return (
    <Layout>
      <Box sx={{ height: "100%", width: "100%" }} className="faq">
        <Box
          sx={{
            height: "auto",
            width: "100%",
            display: "flex",
            gap: "10px",
            alignItems: "center",
            padding: "28px 36px 20px 8px",
          }}
        >
          <Paper
            component="form"
            sx={{
              display: "flex",
              alignItems: "center",
              width: "100%",
              boxShadow: "none",
              bgcolor: "#f1f1f1",
              pl: "8px",
              borderRadius: "8px",
            }}
          >
            <SearchIcon sx={{ p: "2px" }} />
            <InputBase
              sx={{ ml: "2px", flex: 1 }}
              placeholder="Поиск"
              inputProps={{ "aria-label": "search" }}
            />
          </Paper>
          <MenuButtons></MenuButtons>
        </Box>
        <Accordion sx={{ boxShadow: "none", mb: "10px" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreRoundedIcon />}
            aria-controls="faq"
            id="faq_category"
            sx={{ bgcolor: "#FBFBFB", borderRadius: "12px" }}
          >
            <Typography>Название категории</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div className="faq-item">
              <div className="faq-item__title">
                <span>Q:</span> Текст вопроса
              </div>
              <div>
                <span>A:</span> Текст ответа
              </div>
              <button onClick={handleEditFAQClick} >
                <BorderColorOutlinedIcon fontSize="small" />
              </button>
            </div>
            <div className="faq-item">
              <div className="faq-item__title">
                <span>Q:</span> Текст вопроса
              </div>
              <div>
                <span>A:</span> Текст ответа
              </div>
              <button onClick={handleEditFAQClick}>
                <BorderColorOutlinedIcon fontSize="small"/>
              </button>
            </div>
            <div className="faq-item">
              <div className="faq-item__title">
                <span>Q:</span> Текст вопроса
              </div>
              <div>
                <span>A:</span> Текст ответа
              </div>
              <button onClick={handleEditFAQClick}>
                <BorderColorOutlinedIcon fontSize="small"/>
              </button>
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion sx={{ boxShadow: "none", mb: "10px" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreRoundedIcon />}
            aria-controls="faq"
            id="faq_category"
            sx={{ bgcolor: "#FBFBFB", borderRadius: "12px" }}
          >
            <Typography>Название категории</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div className="faq-item">
              <div className="faq-item__title">
                <span>Q:</span> Текст вопроса
              </div>
              <div>
                <span>A:</span> Текст ответа
              </div>
              <button onClick={handleEditFAQClick}>
                <BorderColorOutlinedIcon fontSize="small"/>
              </button>
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion sx={{ boxShadow: "none", mb: "10px" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreRoundedIcon />}
            aria-controls="faq"
            id="faq_category"
            sx={{ bgcolor: "#FBFBFB", borderRadius: "12px" }}
          >
            <Typography>Название категории</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div className="faq-item">
              <div className="faq-item__title">
                <span>Q:</span> Текст вопроса
              </div>
              <div>
                <span>A:</span> Текст ответа
              </div>
              <button onClick={handleEditFAQClick}>
                <BorderColorOutlinedIcon fontSize="small"/>
              </button>
            </div>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Layout>
  );
}

export default FAQ;
