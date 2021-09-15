import React, { useState, useEffect } from "react"
import { Formik, Field, Form, ErrorMessage } from "formik"
import styled from "styled-components"

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

const generateButton = (data, setField) => {
  console.log(data)
  setField("code", "<p>This</p>")


}


function ButtonForm() {
  const [token, setToken] = useState(null)
  return (
    <Formik
      initialValues={{ instructions: "", price: "", product_id: "", product_name: "", walletAddress: "" }}
      onSubmit={(data, {resetForm, setFieldValue}) => {
        generateButton(data, setFieldValue)
          fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({
              "form-name": "contact-form",
              ...data,
            }),
          })
            .then((form) => {
              console.log(form)
            })
            .catch(error => alert(error))

      }}
    >
    {(formik) => (
      <Form
        name="contact-form"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <h2 style={{fontSize: '16px', color: 'rgb(237, 111, 27)',
        letterSpacing: '0px', textAlign: 'center',
        marginTop: '10px',
        marginBottom: '20px',
        fontStyle: 'italic'}}>Choose a Button Type</h2>

        <Field type="hidden" name="form-name" />
        <Field type="hidden" name="bot-field" />

        <Flex>
          <Label htmlFor="product_name">Item Name</Label>
            <Field name="product_name" placeholder="The Name of Item" type="text" style={{background: "#FACBAC 0% 0% no-repeat padding-box", border: "2px solid #ED6F1B", borderRadius: "30px", width: "223px", height: "33px", paddingLeft: "10px"}}/>
          <FeaturesGrid>
          <FeatureItem>
          <Label htmlFor="product_id">Item ID</Label>
            <Field name="product_id" placeholder="The ID of Item" type="text" style={{background: "#FACBAC 0% 0% no-repeat padding-box", border: "2px solid #ED6F1B", borderRadius: "30px", width: "223px", height: "33px", paddingLeft: "10px"}}/>
          </FeatureItem>
          </FeaturesGrid>
          <ErrorMessage name="address" />
        </Flex>
        <br />
        <Flex style={{marginBottom: "50px"}}>
          <Label htmlFor="price">Price in ELYS</Label>
            <Field name="price" placeholder="Cost of product in ELYS" type="text" style={{background: "#FACBAC 0% 0% no-repeat padding-box", border: "2px solid #ED6F1B", borderRadius: "30px", width: "223px", height: "33px", paddingLeft: "10px"}}/>
          <ErrorMessage name="telegram" />
        </Flex>
        <br />
        <Flex style={{marginBottom: "50px"}}>
          <Label htmlFor="walletAddress">Wallet Address to Receive Payments</Label>
          <Field name="walletAddress" placeholder="This wallet will also be the one to read buyer instructions" type="text" style={{background: "#FACBAC 0% 0% no-repeat padding-box", border: "2px solid #ED6F1B", borderRadius: "30px", width: "223px", height: "33px", paddingLeft: "10px"}}/>
          <ErrorMessage name="walletAddress" />
        </Flex>
        <br />
        <Flex>
          <Label htmlFor="instructions">Fulfillment Instructions</Label>
            <Field as="textarea" name="instructions" placeholder="Tell your buyer what you need from them in order to fulfill     e.g. physical address, email address, telegram account, waist size, etc." type="text" style={{background: "#FACBAC 0% 0% no-repeat padding-box", border: "2px solid #ED6F1B", borderRadius: "30px", width: "317px", height: "180px", paddingLeft: "10px", paddingTop: "10px"}}/>
          <ErrorMessage name="currency" />
        </Flex>
        <br/>
        <Flex>
          <Submit style={{color: "white"}} type="submit">Create Button</Submit>
        </Flex>
        <br/>
        <Flex>
          <Label htmlFor="code" style={{paddingRight: "50px"}}>Website Code</Label>
            <Field as="textarea" name="code" type="text" style={{background: "#FACBAC 0% 0% no-repeat padding-box", border: "2px solid #ED6F1B", borderRadius: "30px", width: "317px", height: "180px", paddingLeft: "10px", paddingTop: "10px"}}/>
          <ErrorMessage name="code" />
        </Flex>
        <br/>
      </Form>
      )}
    </Formik>
  )
}

export default ButtonForm

const HeaderInput = styled.input`
  width: 262px;
  height: 30px;
  background: #FACBAC 0% 0% no-repeat padding-box;
  border: 2px solid #ED6F1B;
  border-radius: 30px;
  opacity: 1;
  @media (max-width: 570px) {
    margin-bottom: 8px;
  }
  @media (max-width: 570px) {
    display: block;
    width: 100%;
  }
`


const Label = styled.label`
width: 100%;
text-align: left;
letter-spacing: 0px;
color: #FFFFFF;
`

const Styled = styled.div`
  display: inline-block;
  > input {
    opacity: 0;
  }
  > input + label {
    position: relative; /* permet de positionner les pseudo-éléments */
    padding-left: 25px; /* fait un peu d'espace pour notre case à venir */
    cursor: pointer;    /* affiche un curseur adapté */
    &:before {
      content: '';
      position: absolute;
      left:0; top: 1px;
      width: 17px; height: 17px; /* dim. de la case */
      border: 1px solid #aaa;
      background: #f8f8f8;
      border-radius: 3px; /* angles arrondis */
      box-shadow: inset 0 1px 3px rgba(0,0,0,.3) /* légère ombre interne */
    }
    &:after {
      content: '✔';
      position: absolute;
      top: -1px; left: 2px;
      font-size: 16px;
      color: #09ad7e;
      transition: all .2s; /* on prévoit une animation */
    }
  }
  > input:not(:checked) + label {
      &:after {
        opacity: 0; /* coche invisible */
        transform: scale(0); /* mise à l'échelle à 0 */
      }
  }
  > input:disabled:not(:checked) + label {
      &:before {
        box-shadow: none;
        border-color: #bbb;
        background-color: #ddd;
      }
  }
  > input:checked + label {
    &:after {
      opacity: 1; /* coche opaque */
      transform: scale(1); /* mise à l'échelle 1:1 */
    }
  }
  > input:disabled:checked + label {
    &:after {
      color: #999;
    }
  }
  > input:disabled + label {
    color: #aaa;
  }
  > input:checked:focus + label, input:not(:checked):focus + label {
    &:before {
      border: 1px dotted blue;
    }
  }
`

const CheckLabel = styled.label`
  background: #FACBAC;
  text-align: left;
  letter-spacing: 0px;
  color: "black";
`;


const CheckInput = styled.input`
&:checked + ${CheckLabel} {
    background: #FACBAC;
  }
`

const Flex = styled.div`
  display: grid;
  justify-content: space-between;
  align-content: center;
  grid-template-columns: 200px 250px 400px;
  @media (max-width: 570px) {
    grid-template-columns: 1fr;
    grid-gap: 64px;
  }
`

const FeaturesGrid = styled.div`
  max-width: 670px;
  display: grid;
  margin: 0px auto;
  grid-column-gap: 40px;
  grid-row-gap: 35px;
  @media (max-width: 570px) {
    grid-template-columns: 1fr;
    padding: 0 64px;
  }
`

const FeatureText = styled.p`
  text-align: center;
  @media (max-width: 570px) {
    display: none
  }
  @media (max-width: 570px) {
    display: none
  }
`

const Submit = styled.button`
width: 167px;
height: 32px;
float: right;
background: #ED6F1B 0% 0% no-repeat padding-box;
border-radius: 45px;
`
const FeatureItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
