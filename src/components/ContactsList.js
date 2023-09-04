import {StyledContacts} from "./ContactsStyleed"

export const ContactsList  = ({contacts, onDelete})=>{
   const contactsListItems = contacts.map(contact=>(
      <li key={contact.id} >{contact.name}:{contact.number}<button type="button" onClick={()=>{onDelete(contact.id)}}>Delete</button></li>
   ))
   return(
      <StyledContacts>
   {contactsListItems}
    </StyledContacts>
   ) 
}

 