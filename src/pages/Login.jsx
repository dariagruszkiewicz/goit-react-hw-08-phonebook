import { Helmet } from 'react-helmet';
import { LoginForm } from 'components/LoginForm/LoginForm';

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

export default function Login() {
  return (
    <div style={styles.container}>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <LoginForm />
    </div>
  );
}
