import React, { useRef } from "react";
import styled from "styled-components";

const FormContainer = styled.form`
    display: grid;
    grid-template-columns: 1fr;
    gap: 10px;
    background-color: #fff;
    padding: 100px;
    box-shadow: 0px 0px 5px #ccc;
    border-radius: 5px;
    width: 100%; /* Aumenta a largura para ocupar 100% do contêiner pai */
    max-width: 500px; /* Define um tamanho máximo para evitar que o formulário fique muito largo */
    margin: 0; /* Centraliza o formulário na página */
`;

const InputArea = styled.div`
    display: flex;
    flex-direction: column;    
`;

const Input = styled.input`
    max-width: 100%;
    padding: 0 10px;
    border: 1px solid #bbb;
    border-radius: 5px;
    height: 40px;
`;

const TextArea = styled.textarea`
    max-width: 100%;
    size: 100px;
    padding: 0 10px;
    border: 1px solid #bbb;
    border-radius: 5px;
    height: 50px;
`;

const Button = styled.button`
    padding: 10px;  
    height: 42px;
    cursor: pointer;        
    border-radius: 5px;
    color: ${props => props.theme.main};
    border: 2px solid ${props => props.theme.main};
    width: 100%;
`;


const Form = ({ onEdit }) => {
    const ref = useRef();
    return (
        <FormContainer ref={ref}>
            <InputArea>
                <label htmlFor="company name">Company Name</label>
                <Input name="companyName" type="text"/>
            </InputArea>
            <InputArea>
                <label htmlFor="contact name">Contact Name</label>
                <Input name="contactName" type="text"/>
            </InputArea>
            <InputArea>
                <label htmlFor="contact title">Contact Title</label>
                <Input name="contactTitle" type="text"/>
            </InputArea>
            <label htmlFor="address">Address</label>
            <TextArea>                
            </TextArea>
            <InputArea>
                <label htmlFor="telefone">Telefone</label>
                <Input name="fone"/>
            </InputArea>
            <InputArea>
                <label htmlFor="data nascimento">Data de Nascimento</label>
                <Input name="data_nascimento" type="date"/>
            </InputArea>

            <Button type="submit" theme={{ main: "darkorange" }}>Salvar</Button>
        </FormContainer>
    );
};

export default Form;