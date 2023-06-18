import React, { useEffect }  from "react";
import { Form } from "./FormAddContacts/FormAddContacts";
import { ContactList } from "./Contacts/Contacts";
import { Search } from "./Search/Search";
import { Container, Title, ListTitle } from './Container/Container.Styled'
import { useDispatch } from "react-redux";
import { fetchContacts } from "./redux/operation";

export function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <Title>Phonebook</Title>
      <Form />
      <ListTitle>Contacts</ListTitle>
      <Search />
      <ContactList  />
    </Container>
  );
}