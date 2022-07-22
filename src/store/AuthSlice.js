const { createSlice } = require("@reduxjs/toolkit");

const initialState = { token: null };

const AuthSlice = createSlice({
  name: "Auth",
  initialState,
  reducers: {
    validator(state, action) {
      state.token = action.payload || null;
    },
  },
});

export const authActions = AuthSlice.actions;
export default AuthSlice.reducer;
