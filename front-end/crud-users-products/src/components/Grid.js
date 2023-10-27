import React from "react";
import axios from "axios";
import styled from "styled-components";
import { FaTrash, FaEdit } from "react-icons/fa";
import { toast } from "react-toastify";

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

const Grid = ({ users, setUsers, setOnEdit }) => {

    const handleEdit = (item) => {
        setOnEdit(item);
      };
    
      const handleDelete = async (id) => {
        await axios
          .delete("http://localhost:8800/" + id)
          .then(({ data }) => {
            const newArray = users.filter((user) => user.id !== id);
    
            setUsers(newArray);
            toast.success(data);
          })
          .catch(({ data }) => toast.error(data));
    
        setOnEdit(null);
      };

    return (
        <Table>
            <Thead>
                <Tr>
                    <Th>ContactName</Th>
                    <Th>CompanyName</Th>
                    <Th onlyWeb>ContactTitle</Th>
                    <Th>Address</Th>
                    <Th>City</Th>
                    <Th>Region</Th>
                    <Th>PostalCode</Th>
                    <Th>Country</Th>
                    <Th>Phone</Th>
                    <Th>Fax</Th>
                </Tr>
            </Thead>
            <Tbody>
                {users && users.length > 0 ? (
                    users.map((user, CustomerID) => (                    
                        <Tr key={CustomerID}>
                            <Td width="178px">{user.ContactName}</Td>
                            <Td width="158px">{user.CompanyName}</Td>
                            <Td width="178px">{user.ContactTitle}</Td>
                            <Td width="128px">{user.Address}</Td>
                            <Td width="78px">{user.City}</Td>
                            <Td width="78px">{user.Region}</Td>
                            <Td width="118px">{user.PostalCode}</Td>
                            <Td width="128px">{user.Country}</Td>
                            <Td width="108px" onlyWeb>{user.Phone}</Td>
                            <Td width="128px">{user.Fax}</Td>
                            <Td alignCenter width="5%">
                                <FaEdit 
                                    onClick={() => handleEdit(user)} 
                                    style={{ cursor: 'pointer' }}
                                />
                            </Td>
                            <Td alignCenter width="5%">
                                <FaTrash 
                                    onClick={() => handleDelete(user.id)} 
                                    style={{ cursor: 'pointer' }}
                                />
                            </Td>
                        </Tr>
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