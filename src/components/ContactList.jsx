import {
  Alert,
  AlertIcon,
  Box,
  Button,
  Spinner,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useDispatch, useSelector } from 'react-redux';
import { DeleteContact, fetchContacts } from 'tasksContacts/operations';
import { contactList, status } from 'tasksContacts/selectors';

export const ContactList = () => {
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
      <Box p={4}>
        {fetchStatus === 'loading' && (
          <Box textAlign="center" mt={4}>
            <Spinner size="xl" />
          </Box>
        )}
        {fetchStatus === 'succeeded' && (
          <Table variant="striped" colorScheme="teal">
            <Thead>
              <Tr>
                <Th>Name</Th>
                <Th>Phone</Th>
                <Th>Actions</Th>
              </Tr>
            </Thead>
            <Tbody>
              {contacts.map(contact => (
                <Tr key={contact.id}>
                  <Td>{contact.name}</Td>
                  <Td>{contact.number}</Td>
                  <Td>
                    <Button
                      colorScheme="red"
                      onClick={() => handleDelete(contact.id)}
                    >
                      Delete
                    </Button>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        )}
        {fetchStatus === 'failed' && (
          <Alert status="error" mt={4}>
            <AlertIcon />
            Error fetching contacts.
          </Alert>
        )}
      </Box>
    </>
  );
};
