import { createSlice } from "@reduxjs/toolkit";
import { addContactThunk, getContactsThunk } from "store/thunks";


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
        contact: null
            
    },
    extraReducers: (builder) => {
        builder
            .addCase(getContactsThunk.fulfilled, (state, { payload }) => {
                state.contacts = payload
            })
            .addCase(addContactThunk.fulfilled, (state, { payload }) => {
                state.contact = payload
            })
            .addMatcher((action) => action.type.endsWith('/pending'), handlePending)
            .addMatcher((action) => action.type.endsWith('/rejected'), handleRejected)
            .addMatcher((action) => action.type.endsWith('/fulfilled'), handleFulfilled)
        
    },
    reducers: {
        addContactAction: (state, { payload }) => {
            return {
                contacts:[...state.contacts, payload]
            }
        },
        deleteContactsAction: (state, { payload }) => {
            return {
                contacts: state.contacts.filter(item => item.id !== payload)
            }
        }
        
    }
})

export const contactsReducer = contactsSlice.reducer
export const {addContactAction, deleteContactsAction} = contactsSlice.actions