import styled from 'styled-components';

export const Image = styled.img`
  width: 375px;
  margin-left: 40px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin: 40px 0 30px;
  }
`;
