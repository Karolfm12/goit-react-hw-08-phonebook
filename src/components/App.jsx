import { refreshUser } from 'auth/operations';
import { useAuth } from 'hooks/useAuth';
import { lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import { Layout } from './Layout';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';

const HomePage = lazy(() => import('../pages/Home'));
const RegisterPage = lazy(() => import('../pages/Register'));
const LoginPage = lazy(() => import('../pages/Login'));
const ContactListPage = lazy(() => import('../pages/ContactList'));

const contactList = state => state.contacts.contacts;
const status = state => state.contacts.status;
// const filterState = state => state.contacts.filter;

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<RegisterPage />}
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<LoginPage />}
              />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute
                redirectTo="/login"
                component={<ContactListPage />}
              />
            }
          />
        </Route>
      </Routes>
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
              {contactList.map(val => (
                <tr key={val.id}>
                  <td>{val.name}</td>
                  <td>{val.phone}</td>
                  {/* <td>
                    <button onClick={e => handleOnDelete(e, val.id)}>
                      Delete
                    </button>
                  </td> */}
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
};
