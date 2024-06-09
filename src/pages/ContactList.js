import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'tasksContacts/operations';
import { contactList, status } from 'tasksContacts/selectors';

export default function ContactList() {
  const dispatch = useDispatch();
  //   const isLoading = useSelector(selectLoading);
  const contacts = useSelector(contactList);
  const fetchStatus = useSelector(status);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  useEffect(() => {
    console.log('Contacts:', contacts);
    console.log('Fetch Status:', fetchStatus);
  }, [contacts, fetchStatus]);

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
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map(contact => (
                <tr key={contact.id}>
                  <td>{contact.name}</td>
                  <td>{contact.phone}</td>
                  {/* <td>
                  <button onClick={() => handleOnDelete(contact.id)}>
                    Delete
                  </button>
                </td> */}
                </tr>
              ))}
            </tbody>
          </table>
        )}
        {fetchStatus === 'failed' && <p>Error fetching contacts.</p>}
      </div>
    </>
  );
}
