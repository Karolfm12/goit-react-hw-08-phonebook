import { useSelector } from 'react-redux';
import { contactList } from 'tasksContacts/selectors';

export const ContactList = () => {
  const contacts = useSelector(contactList);

  return (
    <ul>
      {contacts.map(({ id, text }) => (
        <li key={id}>
          <ContactList id={id} text={text} />
        </li>
      ))}
    </ul>
  );
};
