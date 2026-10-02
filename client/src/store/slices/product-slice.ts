import {
  createSlice,
  type PayloadAction,
  createAsyncThunk,
} from '@reduxjs/toolkit';
import { type ProductCard } from '../../types/products';

export const fetchProducts = createAsyncThunk<ProductCard[]>(
  'users/fetchProducts',
  async () => {
    const response = await fetch('http://localhost:8080/api/products');

    const products = await response.json();

    return products;
  }
);

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
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(
      fetchProducts.fulfilled,
      (state, action: PayloadAction<ProductCard[]>) => {
        state.status = 'succeeded';
        state.products = action.payload;
      }
    );
    builder.addCase(fetchProducts.rejected, (state) => {
      state.status = 'failed';
    });
  },
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
