import { createSlice } from "@reduxjs/toolkit";
import { addContactThunk, deleteContactThunk, getContactsThunk } from "store/thunks";


const handlePending = (state) => {
    state.loading = true
            state.error = ''
}

const handleRejected = (state, {error}) => {
         state.loading = false
            state.error = error.message
}

const handleFulfilled = (state) => {
        state.loading = false
}

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
        contacts: [],
        loading: false,
        error: '',
    },
    extraReducers: (builder) => {
        builder
            .addCase(getContactsThunk.fulfilled, (state, { payload }) => {
                state.contacts = payload
            })
            .addCase(addContactThunk.fulfilled, (state, { payload }) => {
                state.contacts.push(payload)
            })
            .addCase(deleteContactThunk.fulfilled, (state, { payload }) => {
                state.contacts = state.contacts.filter(item => item.id !== payload.id)
            })
            .addMatcher((action) => action.type.endsWith('/pending'), handlePending)
            .addMatcher((action) => action.type.endsWith('/rejected'), handleRejected)
            .addMatcher((action) => action.type.endsWith('/fulfilled'), handleFulfilled)
        
    }
})

export const contactsReducer = contactsSlice.reducer
export const {addContactAction, deleteContactsAction} = contactsSlice.actions