import { api } from "./api"

export const fetchContacts = async () => {
    const {data} = await api(`contacts`)
    return data
}

export const addContact = async (body) => {
    const {data} = await api.post(`contacts`, body)
    return data
}

export const deleteContact = async (contactId) => {
    const {data} = await api.delete(`contacts/${contactId}`)
    return data
}