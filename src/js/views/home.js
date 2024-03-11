import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const Home = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.loadContacts();
  }, []);

  return (
    <div className="container d-flex flex-wrap justify-content-center">
      {store.contacts.map((contact) => (
        <div
          key={contact.id}
          className="card"
          style={{ width: "18rem", marginBottom: "1rem" }}
        >
          <div className="card-body">
            <h5 className="card-title">{contact.full_name}</h5>
            <p className="card-text">
              <i className="fas fa-at"></i> {contact.email}
            </p>
            <p className="card-text">
              <i className="fas fa-map-marker-alt"></i> {contact.address}
            </p>
            <p className="card-text">
              <i className="fas fa-mobile-alt"></i> {contact.phone}
            </p>
            <button onClick={() => actions.deleteContact(contact.id)}>
              Delete
            </button>
            <button onClick={() => actions.editContact(contact.id)}>
              Edit
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
