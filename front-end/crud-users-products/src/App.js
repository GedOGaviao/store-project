import GlobalStyle from "./styles/global";
import { toast, ToastContainer } from "react-toastify";
import { styled } from "styled-components";
import Form from "./components/Form.js";
import Grid from "./components/Grid.js";
import { useEffect, useState } from "react";
import "react-toastify/dist/ReactToastify.css"
import axios from "axios";

const Container = styled.div`
  width: 100%;
  max-width: 1280px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const Title = styled.h2``;

function App() {
  const [users, setUsers] = useState([]);
  const [onEdit , setOnEdit] = useState(null);

  const getUsers = async () => {
    try {
      // const res = await axios.get("");  
      const res = [
        {          
          CompanyName: "Alfreds Futterkiste",
          CustomerID: "ALFKI",
          ContactName: "Maria Anders",
          ContactTitle: "Sales Representative",
          Address: "Obere Str. 57",
          City: "Berlin",
          Region: "BC",
          PostalCode: "12209",
          Country: "Germany",
          Phone: "030-0074321",
          Fax: "030-0076545",
      },
      {          
        CompanyName: "Around the Horn",
        CustomerID: "ALFKI",
        ContactName: "Thomas Hardy",
        ContactTitle: "Sales Representative",
        Address: "Obere Str. 57",
        City: "Berlin",
        Region: "BC",
        PostalCode: "12209",
        Country: "Germany",
        Phone: "030-0074321",
        Fax: "030-0076545",
    },      
      ];

      setUsers(res.sort((a, b) => (a.username > b.username ? 1 : -1)));
    } catch (error) {
      toast.error("Erro ao buscar usuários. Erro:" + error);
    }
  };

  useEffect(() => {
    getUsers();
  }, [setUsers]);

  return (
    <>
      <Container>
        <Title>Usuários</Title>
        <Form onEdit={onEdit} setOnEdit={setOnEdit} getUsers={getUsers} />
        <Grid setOnEdit={setOnEdit} users={users} setUsers={setUsers} />
      </Container>
      <ToastContainer autoClose={3000} position={toast.POSITION.BOTTOM_LEFT} />
      <GlobalStyle />
    </>
  );
}

export default App;
