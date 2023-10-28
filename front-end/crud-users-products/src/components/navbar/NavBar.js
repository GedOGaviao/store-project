import React from 'react';
import styled from 'styled-components';

const NavbarContainer = styled.div`
  background-color: #333;
  color: #fff;
  padding: 10px 0;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
`;

const NavbarBrand = styled.a`
  font-size: 24px;
  text-decoration: none;
  color: #fff;
  margin-right: 20px;
`;

const NavbarLinks = styled.div`
  display: flex;
  align-items: center;
`;

const NavbarLink = styled.a`
  text-decoration: none;
  color: #fff;
  margin: 0 10px;
`;

function AppNavbar() {
  return (
    <NavbarContainer>
      <NavbarBrand href="#">Project Store</NavbarBrand>
      <NavbarLinks>
        <NavbarLink href="/">Home</NavbarLink>
        <NavbarLink href="/users">Users</NavbarLink>
      </NavbarLinks>
    </NavbarContainer>
  );
}

export default AppNavbar;
