import Card from '@components/Card';
import Footer from '@components/Footer';
import Header from '@components/Header';

import { Container } from '@styles/Container.styled';

import cardsContent from '@content/cardsContent';

function App() {
  return (
    <>
      <Header />
      <Container>
        {cardsContent.map((item, idx) => (
          <Card key={idx} item={item} />
        ))}
      </Container>
      <Footer />
    </>
  );
}

export default App;
