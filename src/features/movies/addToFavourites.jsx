import {createSlice} from '@reduxjs/toolkit';

const initialStateValue=[]
export const addToFavouritesSlice=createSlice({
    name:'addcart',
    initialState:{value:initialStateValue},
    reducers:{
        addcart:(state,action)=>{
            state.value=[...state.value,action.payload]
            console.log(initialStateValue.item,'add')
        },
        deletecart:(state,action)=>{
            state.value=state.value.filter((product)=>product.imdbID!==action.payload)
            console.log(initialStateValue)
        }
    },
});
export const {addcart,deletecart}=addToFavouritesSlice.actions;
export const getAllcarditems = (state) => state.addcart;
export default addToFavouritesSlice.reducer;