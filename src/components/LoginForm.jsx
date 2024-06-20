import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
} from '@chakra-ui/react';
import { logIn } from 'auth/operations';
import { useDispatch } from 'react-redux';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Box
      as="form"
      onSubmit={handleSubmit}
      autoComplete="off"
      p={4}
      mt={4}
      borderWidth="1px"
      borderRadius="lg"
      maxW="md"
      mx="auto"
    >
      <Heading as="h2" size="lg" mb={4}>
        Log In
      </Heading>
      <FormControl id="email" mb={4}>
        <FormLabel>Email</FormLabel>
        <Input type="email" name="email" required />
      </FormControl>
      <FormControl id="password" mb={4}>
        <FormLabel>Password</FormLabel>
        <Input type="password" name="password" required />
      </FormControl>
      <Button type="submit" colorScheme="teal" width="full">
        Log In
      </Button>
    </Box>
  );
};
