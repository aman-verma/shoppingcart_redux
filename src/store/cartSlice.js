const { createSlice } = require('@reduxjs/toolkit');

const cartSlice = createSlice({
  name: 'cart',
  initialState: { cartList: [], total: 0 },
  reducers: {
    add(state, action) {
      const updatedCartList = state.cartList.concat(action.payload);
      const total = state.total + action.payload.price;
      return { ...state, cartList: updatedCartList, total: total };
    },
    remove(state, action) {
      const updatedCartList = state.cartList.filter(
        (product) => product.id !== action.payload.id
      );
      const total = state.total - action.payload.price;
      return { ...state, cartList: updatedCartList, total: total };
    },
  },
});

export const { add, remove } = cartSlice.actions;
export const cardReducer = cartSlice.reducer;
