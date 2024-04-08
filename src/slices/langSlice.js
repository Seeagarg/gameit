import { createSlice } from "@reduxjs/toolkit";

const initialState={
    lang:0
}

const langSlice=createSlice({
    name:"langSlice",
    initialState,
    reducers:{
        changeLang:(state,action)=>{
            state.lang = action.payload;
            return state;
        }
    }
})

export const {changeLang} = langSlice.actions;

export default langSlice.reducer;