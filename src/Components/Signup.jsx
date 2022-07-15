import React from 'react'
import Styled from "styled-components"
function Signup() {
  return (
    <>
        <Div>
            <Form>
                <FormHeading>Sign up</FormHeading>
                <Input type="text" placeholder='Your Name' />
                <Input type="email" placeholder='Your Email'/>
                <Input type="number" placeholder='Age'/>
                <Input type="password" placeholder='Password'/>
                <Input type="password" placeholder='Confirm Password'/>
                <Input type="phone" placeholder='Mobile Number'/>
                <Btn type="submit">Submit</Btn>
            </Form>
        </Div>
    </>
  )
}
const Div = Styled.div`
    width:100vw;
    height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;
`
const FormHeading =  Styled.h2`
    text-transform:uppercase;
    color:#ffb400;
`
const Form =  Styled.form`
    border-radius:20px;
    display:flex;
    width:25vw;
    height:65vh;
    flex-direction:column;
    gap:10px;
    padding:10px;
    align-items:center;
    box-shadow:0 0 10px 4px #80808047;
`
const Input =  Styled.input`
width:20vw;
height:3rem;
// border-radius:10px;
border:2px solid #2b2a2a80;
    border-top:none;
    border-left:none;
    border-right:none;
    text-indent:8px;
    text-transform:capitalize;
    &:focus{
        outline:none;
        border:2px solid #ffb400;
        border-top:none;
        border-left:none;
        border-right:none;
    }
`
const Btn =  Styled.button`
    width:6rem;
    height:3rem;
    background:#ffb400;
    border-radius:20px;
    border:none;
    font-weight:600;
    font-size:15px;
    margin:10px;
    text-align:center;
    color:white;
`
export default Signup