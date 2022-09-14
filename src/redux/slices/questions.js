import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    questions: {
        items: [],
        status: 'loading'
    }
};

const questionsSlice = createSlice({
    name: 'questions',
    initialState,
    reducer: {}
})

export const questionsReducer = questionsSlice.reducer;