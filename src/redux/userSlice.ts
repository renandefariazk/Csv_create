import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "user",
  initialState:{
    data: {},
    isLogged: false,
  },
  reducers:{
    changeUser(state, {payload}){
      return{
        ...state, data: payload, isLogged: true
      }
    },
    logout(state){
      return { ...state, data: {}, isLogged: false }
    }
  }
})

export const { changeUser, logout } = slice.actions;

export const selectUser = (state: any) => state.user;

export default slice.reducer;