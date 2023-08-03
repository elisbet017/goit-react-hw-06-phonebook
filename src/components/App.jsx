import ContactForm from './Form';
import ContactList from './ContactsList';
import Filter from './Filter';
import { Block } from './App.styled';
import { GlobalStyles } from '../utils/GlobalStyles';
// import { useSelector } from 'react-redux';
// import { getContacts} from '../redux/selectors';

// const LS_KEY = 'contacts-list';

export const App = () => {
  // const contacts = useSelector(getContacts);


  // useEffect(() => {
  //   const savedContacts = localStorage.getItem(LS_KEY);
  //   if (savedContacts) {
  //     setContacts(() => {
  //       return JSON.parse(savedContacts);
  //     });
  //   }
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem(LS_KEY, JSON.stringify(contacts));
  // }, [contacts]);

  return (
    <Block>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter/>
      <ContactList/>
      <GlobalStyles />
    </Block>
  );
};
