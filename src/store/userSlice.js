import { createSlice, configureStore } from "@reduxjs/toolkit";

//export const initialStateValue = 0;
export const userSlice = createSlice({
  name: "counteruser",
  initialState: {   
    userID: "",
    username: "",
    isAdmin: "",
    email: "",    
    token: "",  

  },
  reducers: {    
    getUserStore: (state) => {
        console.log(`Information userStore
                      userID : ${state.userID}
                      username : ${state.username}
                      isAdmin: ${state.isAdmin}
                      email : ${state.email}
                      password : ${state.password}
                      token : ${state.token}`);
    },
    
    login: (state, action) => {
        state.userID = action.payload.userID;
        state.username = action.payload.username;
        state.isAdmin = action.payload.isAdmin;
        state.email = action.payload.email;
        state.token = action.payload.token;
    },
    logout: (state) => {        
        state.value = "Logout Status";
    },
  },
});

export const { getUserStore, login, logout } = userSlice.actions;

export const storeUser = configureStore({
  reducer: userSlice.reducer,
});
