import styled from "styled-components";
import { Link } from "react-router-dom";
// import { ExternalLink } from "react-external-link";
export const Nav = styled.div`
  padding: 0 2rem;
  display: flex;
  justify-content: space-between; 
  align-items: center; 
  flex-wrap: wrap;
  background: #F2CA50;
  border-radius: 0 0 10px 10px;
  height: 75px;
  font-size: 1rem;
  font-family: 'Patrick Hand', cursive;
`;
export const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  span {
    height: 4px;
    width: 25px;
    background: #D91136;
    margin-bottom: 4px;
    border-radius: 5px;
  }
  @media (max-width: 768px)  {
    display: flex;
    
  }
`;

export const MenuLink = styled(Link)`


  padding: 1rem 2rem;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color: #D91136;
  font-weight:500 ;
  font-size: 2rem;
  font-family: 'Patrick Hand', cursive;
  &:hover {
    color: #D91136;
    font-weight: bold;
  }
  @media (max-width: 768px) {
    border: 1px solid #593825;
    border-radius: 10px;
    width: 100%;
  }
`;
export const Menu = styled.div`
background: #F2CA50;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  @media (max-width: 768px) {
    overflow: hidden;
    flex-direction: column;
    width: 100%;
    max-height:${({menu})=>(menu?"300px":"0")}
   
  }
`;
export const Logo = styled(Link)`
  padding: 1rem 0;
  color: #593825;
  text-decoration: none;
  font-weight: 800;
  font-size: 2rem;

  i {
    font-family: 'Patrick Hand', cursive;
  }
  span {
    font-family: 'Patrick Hand', cursive;
    font-weight: 400;
    font-size: 2rem;
    color: #D91136;
  }
`;