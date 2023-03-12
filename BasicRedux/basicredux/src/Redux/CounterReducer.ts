import { createSlice, configureStore, PayloadAction } from '@reduxjs/toolkit';

export interface IState {
    value: number,
    firstName: string,
    lastName: string
}

const inState: IState = {
    value: 0,
    firstName: '',
    lastName: ''
}
export const counterSlice = createSlice({
    name: 'counter',
    initialState: inState,
    reducers: {
        increment: (state: any) => {
            state.value += 1;
        },
        decrement: (state: any) => {
            state.value -= 1;
        },
        setFirstName: (state: any, action: PayloadAction<string>) => {
            state.firstName = action.payload;
        },
        setLastName: (state: any, action: PayloadAction<string>) => {
            state.lastName = action.payload;
        }
    }
});

export const store = configureStore({
    reducer: counterSlice.reducer
})