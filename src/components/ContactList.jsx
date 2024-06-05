import { useSelector } from 'react-redux';
import { contactList, status } from 'tasksContacts/selectors';

export const ContactList = () => {
  const contacts = useSelector(contactList);

  return (
    <div>
      {status === 'succeeded' && (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Phone</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map(val => (
              <tr key={val.id}>
                <td>{val.name}</td>
                <td>{val.phone}</td>
                {/* <td>
                  { <button onClick={e => handleOnDelete(e, val.id)}>
              Delete
            </button> }
                </td> */}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};
