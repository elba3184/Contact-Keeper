import React, { Fragment, useContext } from 'react';
import ContactItem from './ContactItem.js';
import ContactContext from '../../context/contact/contactContext.js';

const Contacts = () => {
  const contactContext = useContext(ContactContext);

  const { contacts } = contactContext;

  return (
    <Fragment>
      {contacts.map((contact) => (
        <ContactItem key={contact.id} contact={contact} />
      ))}
    </Fragment>
  );
};

export default Contacts;
