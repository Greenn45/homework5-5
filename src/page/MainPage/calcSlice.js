import {createSlice} from "@reduxjs/toolkit";

const calcSlice = createSlice({
    name: 'Calc',
    initialState: {
        inputOne: 0,
        inputTwo: 0,
        result: 0
    },
    reducers: {
        changeInputOne: (state, action) => {
            if (action.payload === '') {
                alert('Введите первое значение');
            } else {
                state.inputOne = action.payload
            }
        },
        changeInputTwo: (state, action) => {
            if (action.payload === '') {
                alert('Введите второе значение');
            } else {
                state.inputTwo = action.payload
            }
        },
        changeRes: (state, action) => {
            state.result = action.payload
        },
        plus: (state, action) => {
            state.result = state.inputOne + state.inputTwo
        },
        minus: (state, action) => {
            state.result = state.inputOne - state.inputTwo
        },
        multiply: (state, action) => {
            state.result = state.inputOne * state.inputTwo
        },
        divide: (state, action) => {
            state.result = state.inputOne / state.inputTwo
        },
    }
})

export const {changeInputOne, changeInputTwo, plus, minus, multiply, divide} = calcSlice.actions;
export const calcReducer = calcSlice.reducer;