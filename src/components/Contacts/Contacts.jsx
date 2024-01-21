import ElementContact from "components/ElementContact/ElementContact";
import css from './Contacts.module.css'
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from 'react'
import { deleteContactThunk, getContactsThunk } from "store/thunks";
import { selectorError, selectorLoading, selectorVisibleContacts } from "store/selectors";

const Contacts = () => {
    const contacts = useSelector(selectorVisibleContacts)
    const loading = useSelector(selectorLoading)
    const error = useSelector(selectorError)
    
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getContactsThunk())
    }, [dispatch])

    const handleDelete = (evt) => {
        dispatch(deleteContactThunk(evt.target.parentElement.id))
    }
  
    return (
        <>
            {loading && <h2>Loading...</h2>}
            {error&& <h2>{error}</h2>}
            <ul>
                {
                    contacts.map((contact) => (
                        <ElementContact contact={contact} key={contact.id} >
                           <button className={css.deluser} onClick={handleDelete} type="button">Delete</button>
                        </ElementContact>
                    ))}
            </ul>
        </>
    )
};
export default Contacts;