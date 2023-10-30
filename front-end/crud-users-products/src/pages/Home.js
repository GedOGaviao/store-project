import React from 'react';
import styled from 'styled-components';
import Navbar from "../components/Navbar/NavBar.js";

const HomeContentStyles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

function Home() {
  return (
    <div>
      <Navbar/> 
      <HomeContentStyles>
        <h1>Bem-vindo à Tela Inicial</h1>
        <p>Esta é a página inicial do nosso aplicativo.</p>
        <p>Aqui você pode adicionar o conteúdo que desejar.</p>
      </HomeContentStyles>
    </div>
  );
}

export default Home;
