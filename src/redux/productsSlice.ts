import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '../types/product';

interface ProductsState {
  items: Product[];
}

const initialState: ProductsState = {
  items: [],
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<Product[]>) => {
      state.items = action.payload;
    },
  },
});

export const { setProducts } = productsSlice.actions;
export default productsSlice.reducer;
