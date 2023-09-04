
import { Form, Field } from "formik";
import { styled } from "styled-components";
export const StyledForm = styled(Form)`
display: flex;
flex-direction: column;
gap: 10px;
`
export const StyledInput = styled(Field)`
display: flex;
flex-direction: column;
margin-top: 5px;
padding: 5px;
`
export const StyledButton = styled.button`
padding: 5px;
width: 80px;
display: flex;
align-items: center;
justify-content: center;
`
export const ErrorMessageStyled = styled.div`
font-size: 15px;

color:red;`
