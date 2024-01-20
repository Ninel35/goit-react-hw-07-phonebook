import { createSlice } from "@reduxjs/toolkit"


const initialState = { filter: '' }

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setFilterAction: (state, { payload }) => {
            return {
                filter: payload
            }
        }
    }
})

export const filterReducer = filterSlice.reducer
export const {setFilterAction} = filterSlice.actions
   