import { api } from "./api"

export const getContacts = async () => {
    const {data} = await api(`contacts`)
    return data
}