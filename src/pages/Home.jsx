import oldPhone from '../images/oldPhone.jpg';

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
  title: {
    fontSize: 78,
    letterSpacing: 1.5,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0.8,
    margin: 0,
    textShadow: '4px 4px 6px rgba(66, 68, 90, 1)',
  },
  subtitle: {
    textAlign: 'center',
    margin: 0,
    letterSpacing: 2,
    opacity: 0.5,
  },
};

const Home = () => {
  return (
    <div style={styles.container}>
      <div>
        <h1 style={styles.title}>Phonebook</h1>
        <h3 style={styles.subtitle}>Free connection to the world</h3>
      </div>
      <img height="450" src={oldPhone} alt="Phone" />
    </div>
  );
};
export default Home;
