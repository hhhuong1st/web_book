import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: JSON.parse(localStorage.getItem('cart')) || [],
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const product = action.payload;
            const existingItem = state.items.find(item => item.id === product.id);
            if (existingItem) {
                existingItem.quantity = (existingItem.quantity || 1) + 1;
            } else {
                state.items.push({ ...product, quantity: 1 });
            }
            localStorage.setItem('cart', JSON.stringify(state.items));
        },
        updateQuantity: (state, action) => {
            const { id, change } = action.payload;
            const item = state.items.find(item => item.id === id);
            if (item) {
                const newQuantity = (item.quantity || 1) + change;
                item.quantity = newQuantity > 0 ? newQuantity : 1;
            }
            localStorage.setItem('cart', JSON.stringify(state.items));
        },
        removeItem: (state, action) => {
            const id = action.payload;
            state.items = state.items.filter(item => item.id !== id);
            localStorage.setItem('cart', JSON.stringify(state.items));
        }
    }
});

export const { addToCart, updateQuantity, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
