import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const EditContact = () => {
  const { store, actions } = useContext(Context);
  const { contactId } = useParams();
  const [contact, setContact] = useState(null);

  useEffect(() => {
    actions.loadContact(contactId);
  }, []);

  useEffect(() => {
    setContact(store.contact);
  }, [store.contact]);

  const handleChange = (event) => {
    setContact({ ...contact, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    actions.updateContact(contactId, contact);
  };

  return (
    <div className="container">
      {contact && (
        <form onSubmit={handleSubmit}>
          <label>
            Full Name:
            <input
              type="text"
              name="full_name"
              value={contact.full_name}
              onChange={handleChange}
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={contact.email}
              onChange={handleChange}
            />
          </label>
          <label>
            Address:
            <input
              type="text"
              name="address"
              value={contact.address}
              onChange={handleChange}
            />
          </label>
          <label>
            Phone:
            <input
              type="tel"
              name="phone"
              value={contact.phone}
              onChange={handleChange}
            />
          </label>
          <input type="submit" value="Actualizar contacto" />
        </form>
      )}
    </div>
  );
};
