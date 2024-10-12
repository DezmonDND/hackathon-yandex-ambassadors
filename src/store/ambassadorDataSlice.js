import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { baseUrl } from '../components/utils/constants';

export const fetchAmbassadorData = createAsyncThunk(
  'ambassador/fetchAmbassadorData',
  async (_, { rejectWithValue }) => {
    const token = localStorage.getItem('JWT');
    const response = await fetch(`${baseUrl}/ambassadors`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
    if (!response.ok) {
      return rejectWithValue('Server Error!');
    }
    const data = await response.json();
    return data;
  }
);

const ambassadorDataSlice = createSlice({
  name: 'ambassador',
  initialState: {
    data: null,
    status: null,
    error: null,
  },
  extraReducers: (builder) => {
    builder
    .addCase(fetchAmbassadorData.pending, (state) => {
      state.status = 'loading';
      state.error = null;
    })
    .addCase(fetchAmbassadorData.fulfilled, (state, action) => {
      state.status = 'resolved';
      state.data = action.payload;
    })
    .addCase(fetchAmbassadorData.rejected, (state, action) => {
      state.status = 'rejected';
      state.error = action.payload;
    });
  },
  reducers: {},
});

export default ambassadorDataSlice.reducer;
