import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

type СartState = {
  ids: string[];
};

const initialState: СartState = {
  ids: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    toggleCartItem: (state, action: PayloadAction<string>) => {
      const ProductId = action.payload;

      const isInCart = state.ids.includes(ProductId);

      if (isInCart) {
        state.ids = state.ids.filter((productId) => productId !== ProductId);
      } else {
        state.ids.push(ProductId);
      }
    },
  },
});

export const { toggleCartItem } = cartSlice.actions;
export default cartSlice.reducer;
