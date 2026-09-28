import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { type ProductCard } from '../../types/products';
type ProductsStatus = 'idle' | 'loading' | 'succeeded' | 'failed';
type ProductState = {
  products: ProductCard[];
  status: ProductsStatus;
};

const initialState: ProductState = {
  products: [],
  status: 'idle',
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<ProductCard[]>) => {
      state.products = action.payload;
      state.status = 'succeeded';
    },
    setLoading: (state, action: PayloadAction<ProductsStatus>) => {
      state.status = action.payload;
    },
  },
});

export const { setProducts, setLoading } = productSlice.actions;
export default productSlice.reducer;
