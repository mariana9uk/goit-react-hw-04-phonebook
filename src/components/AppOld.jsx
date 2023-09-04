import { Component } from 'react';
import { ContactForm } from './form';
import { ContactsList } from './ContactsList';
import { Filter } from './Filter';

export class App extends Component {
  state = {
    contacts: [  {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'}, ],
    filter: '',
  };

  addContact = newContact => {
    const isContactExists = this.state.contacts.find(contact => contact.name === newContact.name);

    if (isContactExists) {
      alert(`Contact with name '${newContact.name}' already exists!`);
    } else {
    
      this.setState(prevState => {
        return {
          contacts: [...prevState.contacts, newContact],
           };
      });
    }

  };
removeContact = (contactId)=>{
  this.setState(prevState=>{
    return{
      contacts: prevState.contacts.filter(contact=>contact.id!==contactId)
    }
  })
}


  handleFilterChange = event => {
    this.setState({ filter: event.target.value });
  };

  getFilteredContacts = () => {
    const { filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return (this.state.contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter)));
  };
componentDidUpdate(prevProps, prevState){
  if(prevState.contacts!==this.state.contacts){
localStorage.setItem("contact", JSON.stringify(this.state.contacts))
  }
}
componentDidMount(){
 const contacts= localStorage.getItem("contact");
 const parsedContacts = JSON.parse(contacts);
 if (parsedContacts) {
  this.setState({contacts: parsedContacts})
 }

}
   
  render() {
    const { filter } = this.state;
    const filteredContacts = this.getFilteredContacts();
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
        <ContactForm onAdd={this.addContact} />
        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.handleFilterChange} />
        <ContactsList contacts={filteredContacts} onDelete={this.removeContact} />
    
      </div>
    );
  }
}
