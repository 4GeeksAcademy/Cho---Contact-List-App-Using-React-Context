import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";

export const AddContact = () => {
  const { actions } = useContext(Context);
  const [contact, setContact] = useState({
    full_name: "",
    email: "",
    agenda_slug: "cho-contact-list",
    address: "",
    phone: "",
  });

  const handleChange = (event) => {
    setContact({ ...contact, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    actions.addContact(contact);
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <label>
          Full Name:
          <input type="text" name="full_name" onChange={handleChange} />
        </label>
        <label>
          Email:
          <input type="email" name="email" onChange={handleChange} />
        </label>
        <label>
          Address:
          <input type="text" name="address" onChange={handleChange} />
        </label>
        <label>
          Phone:
          <input type="tel" name="phone" onChange={handleChange} />
        </label>
        <input type="submit" value="Add Contact" />
      </form>
    </div>
  );
};
