import React from "react";
import styled from "styled-components";
import { Brightness4 } from "@material-ui/icons";
import { useTheme } from 'styled-components'
import { mobile } from './styles/responsive'

const Container = styled.div`
  width: 100%;
  height: 90px;
  background: ${props => props.color};
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 3px 0 rgba(0,0,0,.2);
`;

const Logo = styled.h2`
  color: ${props => props.color};
  font-weight: 600;
  margin-left: 60px;
  ${mobile({ fontSize: 14, marginLeft: 20})}
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 18px;
  color: ${props => props.color};
  margin-right: 60px;
  cursor: pointer;
  transition: .3s;
  ${mobile({ fontSize: 14, marginRight: 20})}

  &:hover {
    transform: scale(1.1);
  }
`;

const Button = styled.button`
  background: none;
  border: none;
  color: ${props => props.color};
  cursor: pointer;
`;

const Navbar = ({ handleTheme }) => {
  const theme = useTheme()

  return (
    <Container color={theme.elements}>
      <Logo color={theme.text}>Where in the world?</Logo>
      <ButtonContainer color={theme.text}>
        <Brightness4 /><Button onClick={handleTheme} color={theme.text}>Dark Mode</Button>
      </ButtonContainer>
    </Container>
  );
};

export default Navbar;
