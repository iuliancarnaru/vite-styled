import styled from 'styled-components';

export const Logo = styled.img`
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin-bottom: 40px;
  }
`;
