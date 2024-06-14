import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNewContact } from 'tasksContacts/operations';

export default function AddContactForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addNewContact({ name, phone }))
      .unwrap()
      .then(() => {
        setName('');
        setPhone('');
      })
      .catch(error => {
        console.error('Failed to add contact:', error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </label>
      <label>
        Phone:
        <input
          type="text"
          value={phone}
          onChange={e => setPhone(e.target.value)}
        />
      </label>
      <button type="submit">Add Contact</button>
    </form>
  );
}
