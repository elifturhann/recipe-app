import styled from "styled-components";

export const Container = styled.div`
background-color: #464460;
height: 90vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

`
export const Top = styled.div`
img{
    margin: 1rem;
    width: 550px;
    display: flex;
    justify-content: center;
    align-items: center;
    
}
font-family: 'Patrick Hand', cursive;
text-align: center;
  span{
    color: #fff;
}
`
export const Bottom = styled.div`
    display: flex;
    flex-direction: column;
    padding-right: 5px;
    line-height: 0.01;
    text-align: right;
    border: 2px solid #fff;
    width: 600px;
    font-size: 22px;
    font-weight: bold;
    font-family: 'Patrick Hand', cursive;
   a{
       color: #fff;
   }

`