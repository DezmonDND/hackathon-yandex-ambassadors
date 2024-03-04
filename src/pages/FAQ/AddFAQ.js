import Layout from "../../layouts/default"
import './FAQ.css'
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";
import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";
function AddFAQ() {
  const navigate = useNavigate();
  return (
    <Layout>
      <Box sx={{ height: "100%", width: "100%", padding: "26px" }}>
        <h3>Добавить вопрос/ответ</h3>
        <div>
          <TextField fullWidth label={'Категория'} margin="dense" sx={{ bgcolor: '#1D6BF314', borderRadius: '8px' }} />
        </div>
        <div style={{ display: 'flex', gap: '24px' }}>
          <TextField fullWidth label={'Текст вопроса'} margin="dense" sx={{ bgcolor: '#1D6BF314', borderRadius: '8px' }} multiline
            rows={20} />
          <TextField fullWidth label={'Текст ответа'} margin="dense" sx={{ bgcolor: '#1D6BF314', borderRadius: '8px' }} multiline
            rows={20} />
        </div>
        <div style={{ display: 'flex', gap: '14px', marginTop: '26px' }}>
          <Button onClick={() => navigate("/faq")} variant="contained" sx={{ width: '30%' }}>Выйти</Button>
          <Button variant="contained" sx={{ width: '70%' }}>Сохранить</Button>
        </div>
      </Box>
    </Layout>
  )
}

export default AddFAQ;
