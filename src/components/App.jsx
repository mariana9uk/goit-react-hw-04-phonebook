import { ContactForm } from './form';
import { ContactsList } from './ContactsList';
import { Filter } from './Filter';
import { useState } from 'react';
import { useEffect } from 'react';

export const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

   useEffect(()=>{localStorage.setItem("contact", JSON.stringify(contacts))
  }, [contacts])
useEffect(()=>{}, [])

  const addContact = newContact => {
    const isContactExists = contacts.find(
      contact => contact.name === newContact.name
    );

    if (isContactExists) {
      alert(`Contact with name '${newContact.name}' already exists!`);
    } else {
      setContacts(prevState => [...prevState, newContact]);
    }
  };
  const removeContact = contactId => {
    setContacts(prevState => prevState.filter(
          contact => contact.id !== contactId
        ))
      };

  const handleFilterChange = event => {
    setFilter(event.target.value);
  };

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };
  // componentDidUpdate(prevProps, prevState){
  //   if(prevState.contacts!==this.state.contacts){
  // localStorage.setItem("contact", JSON.stringify(this.state.contacts))
  //   }
  // }
  // componentDidMount(){
  //  const contacts= localStorage.getItem("contact");
  //  const parsedContacts = JSON.parse(contacts);
  //  if (parsedContacts) {
  //   this.setState({contacts: parsedContacts})
  //  }

  // }

  const filteredContacts = getFilteredContacts();
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#010101',
      }}
    >
      <h1>Phonebook</h1>
      <ContactForm onAdd={addContact} />
      <h2>Contacts</h2>
      <Filter value={filter} onChange={handleFilterChange} />
      <ContactsList contacts={filteredContacts} onDelete={removeContact} />
    </div>
  );
};
