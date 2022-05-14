import { Button } from '@styles/Button.styled';
import { Container } from '@styles/Container.styled';
import { Flex } from '@styles/Flex.styled';
import { StyledHeader } from '@styles/Header.styled';
import { Image } from '@styles/Image.styled';
import { Logo } from '@styles/Logo.styled';
import { Nav } from '@styles/Nav.styled';

import image from '@assets/illustration-mockups.svg';
import logo from '@assets/logo.svg';

const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <Nav>
          <Logo src={logo} alt="Huddle logo" />
          <Button>Try it free</Button>
        </Nav>
        <Flex>
          <div>
            <h1>Build The Community Your Fans Will Love</h1>

            <p style={{ margin: '30px 0' }}>
              Huddle re-imagines the way we build communities. You have a voice,
              but so does your audience. Create connections with your users as
              you engage in genuine discussion.
            </p>

            <Button bg="#ff0099" color="#fff">
              Get Started For Free
            </Button>
          </div>

          <Image src={image} alt="" />
        </Flex>
      </Container>
    </StyledHeader>
  );
};

export default Header;
