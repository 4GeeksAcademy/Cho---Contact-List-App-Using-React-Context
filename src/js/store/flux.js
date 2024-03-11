const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      contacts: [],
    },
    actions: {
      loadContacts: () => {
        fetch(
          "https://playground.4geeks.com/apis/fake/contact/agenda/cho-contact-list"
        )
          .then((response) => response.json())
          .then((data) => setStore({ contacts: data }))
          .catch((error) => console.error(error));
      },

      loadContact: (contactId) => {
        fetch(`https://playground.4geeks.com/apis/fake/contact/${contactId}`)
          .then((response) => response.json())
          .then((data) => setStore({ contact: data }))
          .catch((error) => console.error(error));
      },

      addContact: (contact) => {
        fetch("https://playground.4geeks.com/apis/fake/contact/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(contact),
        })
          .then((response) => response.json())
          .then((data) => {
            getActions().loadContacts();
          })
          .catch((error) => console.error(error));
      },

      deleteContact: (contactId) => {
        fetch(`https://playground.4geeks.com/apis/fake/contact/${contactId}`, {
          method: "DELETE",
        })
          .then(() => {
            getActions().loadContacts();
          })
          .catch((error) => console.error(error));
      },

      editContact: (contactId) => {
        window.location.href = `/editContact/${contactId}`;
      },

      updateContact: (contactId, contact) => {
        fetch(`https://playground.4geeks.com/apis/fake/contact/${contactId}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(contact),
        })
          .then(() => {
            getActions().loadContacts();
          })
          .catch((error) => console.error(error));
      },
    },
  };
};

export default getState;
