// import { ContactForm } from './ContactForm/ContactForm';
// import { Filter } from './Filter/Filter';
// import { ContactList } from './ContactList/ContactList';
import css from './App.module.css';
// import { useDispatch } from 'react-redux';
import { lazy } from 'react';
// import { fetchContacts } from 'redux/operations';
import { Routes, Route } from 'react-router-dom';

import { Layout } from './Layout/Layout';
import { RestrictedRoute } from './RestrictedRoute/RestrictedRoute';
import { PrivateRoute } from './PrivateRoute/PrivateRoute';

const HomePage = lazy(() => import('../pages/Home'));
const RegisterPage = lazy(() => import('../pages/Register'));
const LoginPage = lazy(() => import('../pages/Login'));
const ContactsPage = lazy(() => import('../pages/Contacts'));

export const App = () => {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);

  return (
    <div className={css.wrapper}>
      {/* <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList /> */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
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
            path="/register"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<RegisterPage />}
              />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
            }
          />
        </Route>
      </Routes>
    </div>
  );
};
