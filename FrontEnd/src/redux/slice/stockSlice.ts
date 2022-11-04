import { createSlice } from "@reduxjs/toolkit";

interface StockSlice {
  loading: boolean;
  listStock: string[];
  success: boolean;
  error: string | boolean;
}
const initialState: StockSlice = {
  loading: false,
  listStock: [],
  error: false,
  success: false,
};

const stockSlice = createSlice({
  name: "stock",
  initialState,
  reducers: {
    // get list stock
    getListStockStart: (state) => {
      state.loading = true;
    },
    getListStockSuccess: (state, action) => {
      state.loading = false;
      state.listStock = action.payload;
    },
    getListStockFailure: (state, action) => {
      state.error = action.payload || true;
    },
    setInitStateListStock: (state) => {
      state.loading = false;
      state.error = false;
      state.success = false;
    },
  },
});
export const {
  getListStockStart,
  getListStockSuccess,
  getListStockFailure,
  setInitStateListStock,
} = stockSlice.actions;
export default stockSlice.reducer;
