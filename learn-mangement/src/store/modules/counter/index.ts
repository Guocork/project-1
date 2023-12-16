import { createSlice } from "@reduxjs/toolkit";

const counter = createSlice({
    name:'counter',
    initialState:{
        count:0
    },
    reducers:{
        add:(state)=>{
            state.count++
        },
        sub:(state)=>{
            state.count--
        }
    } 
})

export const {add,sub} =counter.actions

// export const subAsync = (payload) =>{
//     return async (dispatch,getState) =>{
//         setTimeout(()={
//             dispatch(sub())
//         },3000)
//     }
// }


export default counter.reducer