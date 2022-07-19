import { createSlice } from '@reduxjs/toolkit'

const shopSlice = createSlice({
    name: 'shop',
    initialState: [],
    reducers: {
        addItem: (state, action) => {
            const duplicateItem = state.find((item) => item.id === action.payload.id);
            if (duplicateItem) {
                duplicateItem.quantity++;
            } else {
                state.push({...action.payload, quantity: 1});
            }
        },
        incrementQty: (state, action) => {
            const item = state.find((item) => item.id === action.payload);
            item.quantity++;
        },
        decrementQty: (state, action) => {
            const item = state.find((item) => item.id === action.payload);
            if (item.quantity === 1) {
                const index = state.findIndex((item) => item.id === action.payload);
                state.splice(index,1)
            } else {
                item.quantity--;
            }
        },
        removeItem: (state, action) => {
            const index = state.findIndex((item) => item.id === action.payload);
            state.splice(index,1);
        },
    },
})

export const shopReducer = shopSlice.reducer;

export const { addItem, incrementQty, decrementQty, removeItem } = shopSlice.actions;