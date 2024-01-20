import './../store/store.js'

import React from 'react'
import Filter from './Filter/Filter'
import Contacts from './Contacts/Contacts'
import FormUser  from './FormUser/FormUser'



export const App = () => {
 
 return (
      <>
        <h1>Phonebook</h1>
        <FormUser/>
        <h2>Contacts</h2>
        <Filter/>
        <Contacts />
      </>
    )
  }
