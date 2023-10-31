import React, { useRef, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { toast } from "react-toastify";

const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center; /* Centraliza no eixo vertical */
    justify-content: center; /* Centraliza no eixo horizontal */
    gap: 10px;
    background-color: #fff;
    padding: 20px;
    box-shadow: 0px 0px 5px #ccc;
    border-radius: 5px;
    height: 45vh;
    width: 1240px;
`;

const InputGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 40px;
`;

const InputArea = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 20px;
`;

const Input = styled.input`
  max-width: 100%;
  padding: 0 10px;
  border: 1px solid #bbb;
  border-radius: 5px;
  height: 40px;

  &:not([name="companyName"]):not([name="contactName"]):not([name="contactTitle"]):not([name="address"]) {
    width: 210px;
  }

  &[name="companyName"],
  &[name="contactName"],
  &[name="address"],
  &[name="contactTitle"] {
    width: 350px;
  }
`;

const Button = styled.button`
  padding: 10px;
  height: 42px;
  cursor: pointer;
  border-radius: 5px;
  color: ${props => props.theme.main};
  border: 2px solid ${props => props.theme.main};
  width: 300px;
  margin-top: 20px;
`;

const Form = ({ getUsers, onEdit, setOnEdit }) => {
    const ref = useRef();

    useEffect(() => {

        if (onEdit) {
            const user = ref.current;

            user.companyName.value = onEdit.CompanyName;
            user.contactName.value = onEdit.ContactName;
            user.contactTitle.value = onEdit.ContactTitle;
            user.address.value = onEdit.Address;
            user.city.value = onEdit.City;
            user.region.value = onEdit.Region;
            user.postalCode.value = onEdit.PostalCode;
            user.country.value = onEdit.Country;
            user.phone.value = onEdit.Phone;
            user.fax.value = onEdit.Fax;
        }
    }, [onEdit]);
    
    const handleSubmit = async (e) => {
        e.preventDefault();

        const user = ref.current;

        if (
            !user.companyName.value ||
            !user.contactName.value ||
            !user.contactTitle.value ||
            !user.address.value ||
            !user.city.value ||
            !user.region.value ||
            !user.postalCode.value ||
            !user.country.value ||
            !user.phone.value ||
            !user.fax.value
        ) {
          return toast.warn("Preencha todos os campos!");  
        }

        if (onEdit) {
            await axios
                .put("http://localhost:8800/" + onEdit.id, {
                companyName: user.companyName.value,
                contactName: user.contactName.value,
                contactTitle: user.contactTitle.value,
                address: user.address.value,
                city: user.city.value,
                region: user.region.value,
                postalCode: user.postalCode.value,
                country: user.country.value,
                phone: user.phone.value,
                fax: user.fax.value                
            })
            .then(({ data }) => toast.success(data))
            .catch(({ data }) => toast.error(data));
        } else {
            await axios
                .post("http://localhost:8800/", {
                companyName: user.companyName.value,
                contactName: user.contactName.value,
                contactTitle: user.contactTitle.value,
                address: user.address.value,
                city: user.city.value,
                region: user.region.value,
                postalCode: user.postalCode.value,
                country: user.country.value,
                phone: user.phone.value,
                fax: user.fax.value
            })
            .then(({ data }) => toast.success(data))
            .catch(({ data }) => toast.error(data));
        }
        
        // Clean form
        user.companyName.value = "";
        user.contactName.value = "";
        user.contactTitle.value = "";
        user.address.value = "";
        user.city.value = "";
        user.region.value = "";
        user.postalCode.value = "";
        user.country.value = "";
        user.phone.value = "";
        user.fax.value = "";                

        setOnEdit(null);
        getUsers();

    };

    return (
        <FormContainer ref={ref}>

            <InputGroup>
                <InputArea>
                    <label>Company Name</label>
                    <Input name="companyName" />
                </InputArea>
                <InputArea>
                    <label>Contact Name</label>
                    <Input name="contactName" />
                </InputArea>
            </InputGroup>

            <InputGroup>
                <InputArea>
                    <label htmlFor="contact title">Contact Title:</label>
                    <Input name="contactTitle" type="text"/>
                </InputArea> 
                <InputArea>  
                    <label htmlFor="address">Address:</label>              
                    <Input name="address" type="text"/>
                </InputArea>
            </InputGroup>
            
            <InputGroup>
                <InputArea>
                    <label htmlFor="city">City:</label>
                    <Input name="city"/>
                </InputArea>
                <InputArea>
                    <label htmlFor="region">Region:</label>
                    <Input name="region"/>
                </InputArea>   
                <InputArea>
                    <label htmlFor="postal code">Postal Code:</label>
                    <Input name="postalCode"/>
                </InputArea>
            </InputGroup>
            
            <InputGroup>
                <InputArea>
                    <label htmlFor="country">Country:</label>
                    <Input name="country"/>
                </InputArea>
                <InputArea>
                    <label htmlFor="phone">Phone:</label>
                    <Input name="phone"/>
                </InputArea>    
                <InputArea>
                    <label htmlFor="fax">Fax:</label>
                    <Input name="fax"/>
                </InputArea>     
            </InputGroup>                                                                        

            <Button type="submit" theme={{ main: "darkorange" }}>Salvar</Button>
            
        </FormContainer>
    );
};

export default Form;