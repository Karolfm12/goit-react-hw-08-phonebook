import { Box, Button, FormControl, FormLabel, Input } from '@chakra-ui/react';
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
    <Box
      as="form"
      onSubmit={handleSubmit}
      p={4}
      mt={4}
      borderWidth="1px"
      borderRadius="lg"
    >
      <FormControl id="name" mb={4}>
        <FormLabel>Name</FormLabel>
        <Input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </FormControl>
      <FormControl id="number" mb={4}>
        <FormLabel>Number</FormLabel>
        <Input
          type="text"
          value={number}
          onChange={e => setNumber(e.target.value)}
        />
      </FormControl>
      <Button type="submit" colorScheme="teal" mt={4}>
        Add Contact
      </Button>
    </Box>
  );
}
