import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    contacts: []
}
  
const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
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