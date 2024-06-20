import { Box, Button } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css';

export const AuthNav = () => {
  return (
    <div>
      <Box p={1}>
        <Button colorScheme="blue">
          <NavLink className={css.link} to="/register">
            Register
          </NavLink>
        </Button>
        <Button colorScheme="green">
          <NavLink to="/login">Log In</NavLink>
        </Button>
      </Box>
    </div>
  );
};
