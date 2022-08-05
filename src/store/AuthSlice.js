const { createSlice } = require("@reduxjs/toolkit");

const initialState = { token: null, id: null, name: null };

const AuthSlice = createSlice({
  name: "Auth",
  initialState,
  reducers: {
    validator(state, action) {
      state.token = action.payload.token || null;
      state.id = action.payload.id || null;
      state.name = action.payload.name || null;
    },
    logout: () => initialState,
  },
});

export const authActions = AuthSlice.actions;
export default AuthSlice.reducer;
