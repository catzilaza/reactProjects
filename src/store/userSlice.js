import { createSlice, configureStore } from "@reduxjs/toolkit";

//export const initialStateValue = 0;
export const userSlice = createSlice({
  name: "userStore",
  initialState: {
    user: [],
    value: "userStore",
    loading: false

    /*
    userID: "000",
    username: "ขนมคุ๊กกี้งาดำ",
    email: "dessert",
    password: "",
    token: 0,
    */

  },
  reducers: {
    /*
    getUserStore: (state) => {
        console.log(`Information userStore
                      userID : ${state.userID}
                      username : ${state.username}
                      email : ${state.email}
                      password : ${state.password}
                      token : ${state.token}`);
    },
    */
    login: (state, action) => {
        state.user = action.payload;
        state.value = "Login Status";
    },
    logout: (state) => {        
        state.value = "Logout Status";
    },
  },
});

export const { login, logout } = userSlice.actions;

export const storeUser = configureStore({
  reducer: userSlice.reducer,
});
