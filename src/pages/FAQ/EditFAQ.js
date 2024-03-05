import Layout from "../../layouts/default"
import './FAQ.css'
import Box from "@mui/material/Box";
import { useNavigate, useLocation } from "react-router-dom";
import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";
function EditFAQ() {
  const navigate = useNavigate();
  const location = useLocation();
  const { category, question, answer } = location.state;
  return (
    <Layout>
      <Box sx={{ height: "100%", width: "100%", padding: "26px" }}>
        <h3>Редактировать вопрос/ответ</h3>
        <div>
          <TextField required fullWidth label={'Категория'} margin="dense" sx={{ bgcolor: '#1D6BF314', borderRadius: '8px' }} defaultValue={category} />
        </div>
        <div style={{ display: 'flex', gap: '24px' }}>
          <TextField required fullWidth label={'Текст вопроса'} margin="dense" sx={{ bgcolor: '#1D6BF314', borderRadius: '8px' }} multiline
            rows={20} defaultValue={question} />
          <TextField required fullWidth label={'Текст ответа'} margin="dense" sx={{ bgcolor: '#1D6BF314', borderRadius: '8px' }} multiline
            rows={20} defaultValue={answer} />
        </div>
        <div style={{ display: 'flex', gap: '14px', marginTop: '26px' }}>
          <Button onClick={() => navigate("/faq")} variant="contained" sx={{ width: '30%' }}>Выйти</Button>
          <Button variant="contained" sx={{ width: '70%' }}>Сохранить</Button>
        </div>
      </Box>
    </Layout>
  )
}

export default EditFAQ;
