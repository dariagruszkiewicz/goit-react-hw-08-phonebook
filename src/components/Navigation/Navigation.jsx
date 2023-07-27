import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';
import css from './Navigation.module.css';
import logo from '../../images/logo.png';
import phonebookLogo from '../../images/phonebookLogo.png';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <img width="50" src={logo} alt="logo" />
      <img width="50" src={phonebookLogo} alt="phonebook-logo" />
      <NavLink className={css.link} to="/">
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink className={css.link} to="/contacts">
          Contacts
        </NavLink>
      )}
    </nav>
  );
};
