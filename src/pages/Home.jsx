import phone from '../images/phone.jpg';
import onlineWorld from '../images/onlineWorld.jpg';

const styles = {
  container: {
    minHeight: 'calc(100vh - 100px)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 58,
    letterSpacing: 1.5,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0.8,
    margin: 0,

    textShadow: '4px 4px 6px rgba(66, 68, 90, 1)',
  },
  subtitle: {
    justifyContent: 'center',
    marginTop: 0,
    letterSpacing: 2,
    opacity: 0.2,
    textShadow: '4px 4px 6px rgba(66, 68, 90, 1)',
  },
  signal: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    opacity: 0.5,
  },
  signalWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tittleWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
};

const Home = () => {
  return (
    <div style={styles.container}>
      <div style={styles.tittleWrapper}>
        <img height="300" src={phone} alt="Phone" />
        <div>
          <h1 style={styles.title}>Phonebook</h1>
          <h3 style={styles.subtitle}>Free connection to the world</h3>
        </div>
      </div>
      <div style={styles.signalWrapper}>
        <img width="450" src={onlineWorld} alt="Online world with the people" />
        <div style={styles.signal}>
          <h3>All your contacts in one app</h3>
          <h3>Fast and easy registraction</h3>
          <h3>Free access</h3>
        </div>
      </div>
      <h2>Join us and REGISTER NOW</h2>
    </div>
  );
};
export default Home;
