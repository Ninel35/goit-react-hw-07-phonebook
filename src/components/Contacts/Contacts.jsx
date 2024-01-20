import ElementContact from "components/ElementContact/ElementContact";
import css from './Contacts.module.css'
import { useDispatch, useSelector } from "react-redux";
import { deleteContactsAction, fetchContacts } from "store/contacts/contactsSlice";
import React, { useEffect } from 'react'

const Contacts = () => {
    const { filter } = useSelector((state) => state.filter)
    const { contacts, loading, error } = useSelector((state) => state.contacts)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchContacts())
    }, [dispatch])

    const handleDelete = (evt) => {
        dispatch(deleteContactsAction(evt.target.parentElement.id))
    }
  
    const getVisibleContacts = () => {
      
        const normalizedFilter = filter.toLowerCase();
        return contacts.filter(contact =>
            contact.name.toLowerCase().includes(normalizedFilter)
        )
    }


    return (
        <>
            {loading && <h2>Loading...</h2>}
            {error&& <h2>{error}</h2>}
            <ul>
                {
                    getVisibleContacts().map((contact) => (
                        <ElementContact contact={contact} key={contact.id} >
                           <button className={css.deluser} onClick={handleDelete} type="button">Delete</button>
                        </ElementContact>
                    ))}
            </ul>
        </>
    )
};
export default Contacts;