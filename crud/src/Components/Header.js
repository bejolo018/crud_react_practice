import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Nav, NavItem, NavbarBrand, Container} from 'reactstrap'


const Header = () => {
    return (
        <Navbar color="dark" dark>
            <Container>
                <NavbarBrand href='/'> Name List</NavbarBrand>
                <Nav>
                    <NavItem>
                        <Link className="btn btn-primary" to='/add'>Add Name</Link>
                    </NavItem>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default Header
