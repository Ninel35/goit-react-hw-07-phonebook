import { createAsyncThunk } from "@reduxjs/toolkit"
import { addContact, fetchContacts } from "api/fetchContacts"

export const getContactsThunk = createAsyncThunk('contacts/getContacts', async () => {
    const data = await fetchContacts()
    return data
})

export const addContactThunk = createAsyncThunk('contacts/addContact', async (body) => {
    const data = await addContact(body)
    return data
})
