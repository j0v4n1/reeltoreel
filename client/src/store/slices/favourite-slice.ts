import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

type FavoriteState = {
  ids: string[];
};

const initialState: FavoriteState = {
  ids: [],
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    toggleFavorite: (state, action: PayloadAction<string>) => {
      const id = action.payload;

      const isFavorite = state.ids.includes(id);

      if (isFavorite) {
        state.ids = state.ids.filter((favoriteId) => favoriteId !== id);
      } else {
        state.ids.push(id);
      }
    },
  },
});

export const { toggleFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
