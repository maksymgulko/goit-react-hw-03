import "./App.css";
import { useState, useEffect } from "react";
import initialContacts from "./data/contacts.json";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";

function App() {
  const [contact, setContact] = useState(() => {
    const savedObj = window.localStorage.getItem("saved-contacts");
    if (savedObj !== null) {
      return JSON.parse(savedObj);
    }
    return initialContacts;
  });
  const [filter, setFilter] = useState("");

  useEffect(() => {
    window.localStorage.setItem("saved-contacts", JSON.stringify(contact));
  }, [contact]);

  const filteredContacts = contact.filter((item) =>
    item.name.toLowerCase().includes(filter.toLowerCase())
  );

  const addContact = (newContact) => {
    setContact((prevContacts) => {
      return [...prevContacts, newContact];
    });
  };

  const deleteContact = (taskId) => {
    setContact((prevContacts) => {
      return prevContacts.filter((item) => item.id !== taskId);
    });
  };

  return (
    <div className="appForm">
      <h1>Phonebook</h1>
      <ContactForm onAdd={addContact} />
      <SearchBox inputValue={filter} onFilter={setFilter} />
      <ContactList data={filteredContacts} onDelete={deleteContact} />
    </div>
  );
}

export default App;
