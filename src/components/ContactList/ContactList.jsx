import { useSelector } from "react-redux";

import Contact from "../Contact/Contact.jsx";
import { selectFilteredContacts } from "../../redux/contacts/selectors";

import css from "./ContactList.module.css";

export default function ContactList() {
  const visibleContacts = useSelector(selectFilteredContacts);

  return (
    <ul className={css.ContactList}>
      {visibleContacts.map((contact) => (
        <li key={contact.id}>
          <Contact contact={contact} />
        </li>
      ))}
    </ul>
  );
}
