import React from "react";
import axios from "axios";
import styled from "styled-components";
import { FaTrash, FaEdit } from "react-icons/fa";
import { toast } from "react-toastify";
import { Link } from 'react-router-dom';

const Table = styled.table`
    width: 100%;
    background-color: #fff;
    padding: 20px;
    box-shadow: 0px 0px 5px #ccc;
    border-radius: 5px;
    max-width: 1280px;
    margin: 20px auto;
    word-break: break-all;
`;

export const Tbody = styled.tbody``;

export const Thead = styled.thead``;

export const Tr = styled.tr``;

export const HighlightOnHoverTr = styled(Tr)`
    &:hover {
        background-color: #DCDCDC;   
    }
`;

export const Th = styled.th`
    font-size: 15px;
    text-align: start;
    border-bottom: inset;
    padding-bottom: 5px;

    @media (max-width: 500px) {
        ${(props) => props.onlyWeb && "display: none;"}
    }
`;

export const Td = styled.td`
    font-size: 13px;
    padding-top: 15px;
    text-align: %{(props) => (props.alignCenter ? "center" : "start")};
    width: %{(props) => (props.width ? props.width : "auto")};
    
    @media (max-width: 500px) {
        ${(props) => props.onlyWeb && "display: none;"}
    }
`;

const Grid = ({ orders, setOrders, setOnEdit }) => {

    const handleEdit = (item) => {
        setOnEdit(item);
      };
    
      const handleDelete = async (id) => {
        await axios
          .delete("http://localhost:8800/" + id)
          .then(({ data }) => {
            const newArray = orders.filter((order) => order.id !== id);
    
            setOrders(newArray);
            toast.success(data);
          })
          .catch(({ data }) => toast.error(data));
    
        setOnEdit(null);
      };

    return (
        <Table>
            <Thead>
                <Tr>
                    <Th>OrderID</Th>
                    <Th>OrderDate</Th>
                    <Th>RequiredDate</Th>
                    <Th>ShippedDate</Th>
                    <Th>ShipVia</Th>
                    <Th>ShipName</Th>
                    <Th>ShipAddress</Th>
                    <Th>ShipCity</Th>
                    <Th>ShipRegion</Th>
                    <Th>ShipPostalCode</Th>
                    <Th>ShipCountry</Th>
                </Tr>
            </Thead>
            <Tbody>
                {orders && orders.length > 0 ? (
                    orders.map((order, OrderID) => (                    
                        <HighlightOnHoverTr 
                            key={OrderID}
                            onClick={() => handleEdit(order)}
                        >                            
                            <Td width="178px">
                                <Link to={`/orders/${order.OrderID}`}>{order.OrderID}</Link>
                            </Td>
                            <Td width="158px">{order.OrderDate}</Td>
                            <Td width="158px">{order.RequiredDate}</Td>
                            <Td width="178px">{order.ShippedDate}</Td>
                            <Td width="128px">{order.ShipVia}</Td>
                            <Td width="78px">{order.ShipName}</Td>
                            <Td width="78px">{order.ShipAddress}</Td>
                            <Td width="118px">{order.ShipCity}</Td>
                            <Td width="128px">{order.ShipRegion}</Td>
                            <Td width="108px" onlyWeb>{order.ShipPostalCode}</Td>
                            <Td width="128px">{order.ShipCountry}</Td>
                            <Td alignCenter width="5%">
                                <FaEdit 
                                    onClick={() => handleEdit(order)} 
                                    style={{ cursor: 'pointer' }}
                                />
                            </Td>
                            <Td alignCenter width="5%">
                                <FaTrash 
                                    onClick={() => handleDelete(order.id)} 
                                    style={{ cursor: 'pointer' }}
                                />
                            </Td>
                        </HighlightOnHoverTr>
                    ))
                ) : (
                    <Tr>
                        <Td colSpan="5"></Td>
                    </Tr>
                )}
            </Tbody>
        </Table>
    );
};

export default Grid;