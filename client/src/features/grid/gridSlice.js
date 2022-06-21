import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import  axios from 'axios'

const initialState = {
    // numOfgrids : 20
    loading: false,
    grids: [],
    error: ''
}

// Generates pending, fulfilled, and rejected action types
export const fetchGrids = createAsyncThunk('user/fetchGrids', () => {
    return axios
        .get('http://localhost:5000/mock_data')
        .then((response) => response.data.express) //.map((operation) => operation.id))
})


const gridSlice = createSlice({
    name: 'grid',
    initialState,
    extraReducers: builder => {
        builder.addCase(fetchGrids.pending, state => {
            state.loading = true
        })
        builder.addCase(fetchGrids.fulfilled, (state, action) => {
            state.loading = false
            state.grids = action.payload
            state.error = ''
        })
        builder.addCase(fetchGrids.rejected, (state, action) => {
            state.loading = false
            state.grids = []
            state.error = action.error.message
        })
    }
})

export default gridSlice.reducer
