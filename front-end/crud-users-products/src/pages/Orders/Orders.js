import React from 'react';
import { useState, useEffect } from "react";
import Grid from '../../components/Users/Orders/Grid.js';
import Navbar from "../../components/Navbar/NavBar.js";
import { useParams } from 'react-router-dom';
import styled from "styled-components";
import { toast } from "react-toastify";

const Container = styled.div`
  width: 100%;
  max-width: 1280px;
  margin-top: 100px; /* Espaço de margem superior para acomodar a barra de navegação */
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

function Orders() {
  const { id } = useParams();
  const [orders, setOrders] = useState([]);
  const [onEdit , setOnEdit] = useState(null);

  // getOrdes where CustomerID = id
  // SELECT * FROM Orders INNER JOIN Customers ON Customers.CustomerID = Orders.CustomerID;
  const getOrders = async () => {
    try {
      // const res = await axios.get("");  
      const res = [
        {          
          OrderID: "Alfreds Futterkiste",
          CustomerID: "ALFKI",
          OrderDate: "Maria Anders",
          RequiredDate: "Sales Representative",
          ShippedDate: "Obere Str. 57",
          ShipVia: "Berlin",
          ShipName: "BC",
          ShipAddress: "12209",
          ShipCity: "Germany",
          ShipRegion: "030-0074321",
          ShipPostalCode: "030-0076545",
          ShipCountry: "030-0076545"          
      }
      ];

      setOrders(res.sort((a, b) => (a.username > b.username ? 1 : -1)));
    } catch (error) {
      toast.error("Erro ao buscar usuários. Erro:" + error);
    }
  };

  useEffect(() => {
    getOrders();
  }, [setOrders]);

  return (
    <div>
        <Navbar/>
        <Container>
            <h1>Orders</h1>
            <h1>Página com ID: {id}</h1>
            <Grid setOnEdit={setOnEdit} orders={orders} setOrders={setOrders} />
        </Container>
    </div>
  );
}

export default Orders;
