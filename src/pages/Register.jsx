import { Helmet } from 'react-helmet';
import { RegisterForm } from 'components/RegisterForm/RegisterForm';

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

const Register = () => {
  return (
    <div style={styles.container}>
      <Helmet>
        <title>Registration</title>
      </Helmet>
      <RegisterForm />
    </div>
  );
};

export default Register;
