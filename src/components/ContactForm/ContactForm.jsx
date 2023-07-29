import { useDispatch, useSelector } from 'react-redux';
import css from './ContactForm.module.css';
import { addContact } from 'redux/contacts/operations';
import { selectContacts } from 'redux/contacts/selectors';

export const ContactForm = () => {
  const contacts = useSelector(selectContacts);
  console.log(contacts);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const contactItem = {
      name: e.target.elements.text.value,
      number: e.target.elements.tel.value,
    };

    const name = contacts.map(item => item.name);
    if (name.includes(contactItem.name)) {
      alert(`${contactItem.name} is alredy in contacts.`);
    } else {
      dispatch(addContact(contactItem));
    }

    e.target.reset();
  };

  return (
    <div className={css.wrapper}>
      <form onSubmit={handleSubmit} className={css.form}>
        <label>
          <input
            type="text"
            name="text"
            placeholder="Name"
            pattern="^[A-Za-z.'\- ]+$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label>
          <input
            type="tel"
            name="tel"
            placeholder="Number"
            pattern="^\+?\d{1,4}?\s?\(?\d{1,4}?\)?\s?\d{1,4}\s?\d{1,4}\s?\d{1,9}$"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button className={css.addBtn} type="submit">
          Add contact
        </button>
      </form>
    </div>
  );
};
