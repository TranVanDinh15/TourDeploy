import { createSlice, isPending } from "@reduxjs/toolkit";
const userSlice = createSlice({
  name: "user",
  initialState: {
    login: {
      currentUser: null,
      isPending: false,
      error: false,
    },
    register:{
      currentUser: null,
      isPending: false,
      error: false,
    },
    tour:{
      currentTour:null
    },
    search:{
      currentSearch:null
    },
    inforTour:{
      currentInforTour: null
    }
    
  },
  reducers: {
    startLogin: (state) => {
      state.login.isPending = true;
      
    },
    LoginSuccess: (state, action) => {
      state.currentUser=action.payload
      state.login.isPending = false;
    },
    LoginError: (state) => {
      state.login.isPending = false;
      state.login.error = true;
    },
    resgiterStart: (state)=>{
      state.register.isPending = true;
    },
    resgiterSuccess:(state,action)=>{
      state.register.isPending = false;
      state.register.currentUser=action.payload
    },
    resgiterError:(state)=>{
      state.register.isPending=false;
      state.register.error=true
    },
    callTours:(state, action)=>{
      state.tour.currentTour=action.payload
    },
    SearchTour:(state, action)=>{
      state.search.currentSearch=action.payload
    },
    inforTour: (state, action)=>{
      state.inforTour.currentInforTour=action.payload
    }
  },
});
export const { LoginError, LoginSuccess, startLogin, resgiterStart, resgiterError, resgiterSuccess, callTours , SearchTour, inforTour} = userSlice.actions;
export default userSlice.reducer;
