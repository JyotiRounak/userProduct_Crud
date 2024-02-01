import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    filteredProducts: []
}

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        FILTER_PRODUCT(state, action){
            const {products, search} = action.payload;
            const tempproducts = products.filter((item)=>item.name.toLowerCase().includes(search.toLowerCase()) ||
            item.category.toLowerCase().includes(search.toLowerCase()));
            state.filteredProducts = tempproducts;
        }
    }
});

export const {FILTER_PRODUCT} = filterSlice.actions;
export const selectFilteredPoducts = (state)=>state.filter.filteredProducts;
export  default filterSlice.reducer;