import { configureStore } from '@reduxjs/toolkit';
import favoritesReducer from './slices/favourite-slice.ts';
import productsReducer from './slices/product-slice.ts';
import miniMenuReducer from './slices/mini-menu-slice.ts';
import cartReducer from './slices/cart-slice.ts';

export const store = configureStore({
  reducer: {
    favorites: favoritesReducer,
    products: productsReducer,
    miniMenu: miniMenuReducer,
    cart: cartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
