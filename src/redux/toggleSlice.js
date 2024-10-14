import { createSlice } from "@reduxjs/toolkit"

const initialState={
    darkMode:false
}

const toggleSlice=createSlice({
    name:'theme',
    initialState,
    reducers:{
        toogleMode:(state)=>{
            state.darkMode=!state.darkMode;
        },
        setDarkMode:(state,action)=>{
            state.darkMode=action.payload;
        },
    },
});

export const {toogleMode,setDarkMode}=toggleSlice.actions;

export default toggleSlice.reducer;