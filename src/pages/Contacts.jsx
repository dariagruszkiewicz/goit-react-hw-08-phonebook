import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { Helmet } from 'react-helmet';

const styles = {
  container: {
    minHeight: 'calc(100vh - 100px)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px solid gray',
    borderRadius: '10px',
    color: 'rgb(155, 129, 115)',
    boxShadow: '8px 8px 24px 0px rgba(66, 68, 90, 1)',
  },
};

const Contacts = () => {
  return (
    <div style={styles.container}>
      <Helmet>
        <title>Contacts</title>
      </Helmet>
      <ContactForm />
      <h1>Contacts</h1>
      <Filter />
      <ContactList />
    </div>
  );
};

export default Contacts;
