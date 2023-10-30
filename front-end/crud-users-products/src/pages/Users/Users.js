import { toast, ToastContainer } from "react-toastify";
import { styled } from "styled-components";
import Form from '../../components/Users/Form.js';
import Grid from "../../components/Users/Grid.js";
import Navbar from "../../components/Navbar/NavBar.js";
import { useEffect, useState } from "react";
import "react-toastify/dist/ReactToastify.css"
import axios from "axios";

const Container = styled.div`
  width: 100%;
  max-width: 1280px;
  margin-top: 100px; /* Espaço de margem superior para acomodar a barra de navegação */
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const Title = styled.h2``;

function Users() {
  const [users, setUsers] = useState([]);
  const [onEdit , setOnEdit] = useState(null);

  const getUsers = async () => {
    try {
      // const res = await axios.get("http://localhost:8800/");  
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
    <Navbar />
      <Container>        
        <Title>Users</Title>
        <Form onEdit={onEdit} setOnEdit={setOnEdit} getUsers={getUsers} />
        <Grid setOnEdit={setOnEdit} users={users} setUsers={setUsers} />
      </Container>
      <ToastContainer autoClose={3000} position={toast.POSITION.BOTTOM_LEFT} />
    </>
  );
}

export default Users;
