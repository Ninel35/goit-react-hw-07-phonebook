import { createAsyncThunk } from "@reduxjs/toolkit"
import { addContact, deleteContact, fetchContacts } from "api/fetchContacts"

export const getContactsThunk = createAsyncThunk('contacts/getContacts', async () => {
    const data = await fetchContacts()
    return data
})

export const addContactThunk = createAsyncThunk('contacts/addContact', async (body) => {
    const data = await addContact(body)
    return data
})


export const deleteContactThunk = createAsyncThunk('contacts/deleteContact', async (id) => {
    const data = await deleteContact(id)
    return data
})
