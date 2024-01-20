import ElementContact from "components/ElementContact/ElementContact";
import css from './Contacts.module.css'
import { useDispatch, useSelector } from "react-redux";
import { deleteContactsAction } from "store/contacts/contactsSlice";
import React from 'react'

const Contacts = () => {
    const { filter } = useSelector((state) => state.filter)
    const { contacts } = useSelector((state) => state.contacts)
    const dispatch = useDispatch()

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