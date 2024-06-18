import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useDispatch, useSelector } from 'react-redux';
import { DeleteContact, fetchContacts } from 'tasksContacts/operations';
import { contactList, status } from 'tasksContacts/selectors';

export const ContactList = () => {
  // const dispatch = useDispatch();
  const contacts = useSelector(contactList);
  const fetchStatus = useSelector(status);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleDelete = id => {
    dispatch(DeleteContact(id));
  };

  return (
    <>
      <Helmet>
        <title>Your contacts</title>
      </Helmet>
      <div>
        {fetchStatus === 'loading' && 'Request in progress...'}
        {fetchStatus === 'succeeded' && (
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Phone</th>
                <th>Actionssss</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map(contact => (
                <tr key={contact.id}>
                  <td>{contact.name}</td>
                  <td>{contact.number}</td>
                  <td>
                    <button onClick={() => handleDelete(contact.id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
        {fetchStatus === 'failed' && <p>Error fetching contacts.</p>}
      </div>
    </>
  );
};
