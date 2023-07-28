import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';
import css from './Navigation.module.css';

import phone from '../../images/phone.jpg';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav className={css.navigation}>
      <img width="80" src={phone} alt="logo" />
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
