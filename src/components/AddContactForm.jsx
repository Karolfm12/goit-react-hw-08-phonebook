import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNewContact } from 'tasksContacts/operations';

export default function AddContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addNewContact({ name, number }))
      .unwrap()
      .then(() => {
        setName('');
        setNumber('');
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
          value={number}
          onChange={e => setNumber(e.target.value)}
        />
      </label>
      <button type="submit">Add Contact</button>
    </form>
  );
}
