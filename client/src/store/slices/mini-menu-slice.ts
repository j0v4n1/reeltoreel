import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

type initialStateType = {
  menuType: 'favorite' | 'cart' | undefined;
  isOpenFavorite: boolean;
  isOpenCart: boolean;
};

const initialState: initialStateType = {
  menuType: undefined,
  isOpenFavorite: false,
  isOpenCart: false,
};

const MiniMenuSlice = createSlice({
  name: 'miniMenu',
  initialState,
  reducers: {
    setMenuType: (
      state,
      action: PayloadAction<'favorite' | 'cart' | undefined>
    ) => {
      state.menuType = action.payload;
    },
    setIsOpenFavorite: (state, action: PayloadAction<boolean>) => {
      state.isOpenFavorite = action.payload;
    },
    setIsOpenCart: (state, action: PayloadAction<boolean>) => {
      state.isOpenCart = action.payload;
    },
  },
});

export const { setIsOpenCart, setIsOpenFavorite, setMenuType } =
  MiniMenuSlice.actions;

export default MiniMenuSlice.reducer;
