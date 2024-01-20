import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getContacts } from "api/fetchContacts";


export const fetchContacts = createAsyncThunk('contacts/getContacts', async () => {
    const data = await getContacts()
    return data
})
  
const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
            contacts: [],
            loading: false,
            error: ''
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchContacts.pending, (state) => {
            state.loading = true
            state.error = ''
            })
        .addCase(fetchContacts.fulfilled, (state, {payload}) => {
            state.loading = false
            state.contacts = payload
        })
        .addCase(fetchContacts.rejected, (state, {error}) => {
            state.loading = false
            state.error = error.message
        })
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