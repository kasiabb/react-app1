import Hero from './components/Hero/Hero';
import SearchForm from './components/SearchForm/SearchForm';
import List from './components/List/List.js';
import Container from './components/Container/Container.js';
// eslint-disable-next-line no-unused-vars
const App = () => {
  return (
    <Container>
      <Hero />
      <SearchForm />
      <List />
    </Container>
  );
};

export default App;
