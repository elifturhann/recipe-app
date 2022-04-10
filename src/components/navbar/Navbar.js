import { useState } from "react";
import { Link } from "react-router-dom";
import { Nav, Logo, Hamburger, Menu, MenuLink} from "./style";


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [github, setGithub] = useState("");


    return (
        <Nav>
            <Logo to="/">
            <i>{"<Elif>"}</i>
            <span>recipe</span>
            </Logo>
            <Hamburger onClick={()=> setIsOpen(!isOpen)}>
             <span />
             <span />
             <span />
            </Hamburger>

            <Menu menu={isOpen}>
                <MenuLink onClick={()=> setIsOpen(!isOpen)} to="/about">
                   About
                </MenuLink>
                <MenuLink 
                onClick={()=>
                setGithub(
                    (window.location.href = "https://github.com/elifturhann")

                )}
                to={github}
                target="_blank">
                   Github
                </MenuLink>
                <MenuLink 
                onClick={()=> setIsOpen(!isOpen)}
                onouseUp={()=> sessionStorage.clear()}
                 to="/">
                   Logout
                </MenuLink>


            </Menu>
        </Nav>
    )
}
export default Navbar;