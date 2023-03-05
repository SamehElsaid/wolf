import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  code: false,
};
const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    CODE: (state, action) => {
      state.code = action.payload;
    }
  },
});
export let { CODE } = auth.actions;
export default auth.reducer;
