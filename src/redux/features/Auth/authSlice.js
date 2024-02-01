import { createSlice } from '@reduxjs/toolkit';
const name = JSON.parse(localStorage.getItem("name"));
const initialState = {
   isLoggedIn: false,
   name: name ? name : "",
   user: {
    name: "",
    email: "",
    phone: "",
    bio: "",
    photo: "",
  },
  userId: ""
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
      SET_LOGGIN(state, action){
        state.isLoggedIn = action.payload
      },
      SET_USERNAME(state, action){
        localStorage.setItem("name", JSON.stringify(action.payload))
        state.name = action.payload
      },
      SAVE_USER(state, action){
        const profile = action.payload
        state.user.name = profile.name
        state.user.email = profile.email
        state.user.phone = profile.phone
        state.user.bio = profile.bio
        state.user.photo = profile.photo
      },

    }
});

export const{SET_LOGGIN, SET_USERNAME, SAVE_USER} = authSlice.actions;

export const selectIsLoggedIn = (state)=>state.auth.isLoggedIn;
export const selectName = (state)=>state.auth.name;
export const selectUser = (state)=>state.auth.user;
export default authSlice.reducer;