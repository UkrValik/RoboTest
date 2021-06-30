import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchRobots = createAsyncThunk('robots/fetchRobots', async () => {
    const response = await fetch('https://run.mocky.io/v3/264944fc-1305-46a0-af0a-a93670e0d5ac');
    const robots = await response.json();
    return robots;
});

const initialState = {
    robotsArray: [],
    loading: false,
    error: null,
};

const robotsSlice = createSlice({
    name: 'robots',
    initialState,
    reducers: {

    },
    extraReducers: {
        [fetchRobots.fulfilled]: (state, action) => {
            state.robotsArray = action.payload;
            state.loading = false;
        },
        [fetchRobots.pending]: (state) => {
            state.loading = true;
        },
        [fetchRobots.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        },
    },
});

export const {} = robotsSlice.actions;

export default robotsSlice.reducer;

export const selectRobots = state => state.robots.robotsArray;
export const selectLoading = state => state.robots.loading;
