import styled from "styled-components";

export const LoginContainer = styled.div`
background-image: url("https://cdn.pixabay.com/photo/2021/02/24/15/21/cook-6046729_960_720.jpg");
height: 100vh;
background-size: cover;
background-repeat: no-repeat;
background-position:center;
align-items:center;
justify-content: center;
display: flex;
`

export const FormContainer = styled.div`
border: 2px solid #ddd;
background-color: rgb(242, 202, 80, 0.5);
border-radius: 50%;
height: 340px;
width: 100px;
min-width: 500px;
padding: 5px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
position: relative;

@media only screen and (max-width: 500px){
  width: 50px;
  min-width:400px;
  
  
  
}
`
export const Header = styled.h1`
  font-family: "Girassol", sans-serif;
  font-size: 1.5rem;
`;
export const StyledForm = styled.form`
display: flex;
flex-direction: column;`
export const StyledInput = styled.input `
    width: 160px;
    height: 30px;
    margin: 0.5rem;
    border: none;
    border-radius: 7px;
    text-align: left;
    font-size: 16px;
    font-family: 'Patrick Hand', cursive;

 &:focus{
    outline: none !important;
    border: 2px solid #D91136;
 }
`  
export const StyledButton = styled.button`
    font-size: 1rem;
    font-family: 'Patrick Hand', cursive;
    border: none;
    cursor: pointer;
    border-radius: 7px;
    width: 80px;
    margin-left: 3rem;
   
    &:hover{
    background-color: #D91136;
         color: #fff;
    }
`

export const StyledImg = styled.img`
text-align: center;
font-family: 'Patrick Hand', cursive;
width: 150px;

` 

