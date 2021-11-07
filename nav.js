import { Navbar, Container, Nav, NavDropdowm, Form, FormControl, Button } from 'react-bootstrap';
import './nav.css';

// https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false

function Navigation() {    
    return (
        <Navbar className="nav">
            <Container fluid className="nav-content">
                <Navbar.Brand className="brand" href="#">CryptoApp</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav className="nav-list me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                    <Nav.Link className="nav-item" href="#action1">Home</Nav.Link>
                    <Nav.Link className="nav-item" href="#action1">Create</Nav.Link>
                    <Nav.Link className="nav-item" href="#action1">Statistic</Nav.Link>
                    <Nav.Link className="nav-item" href="#action1"> Link </Nav.Link>
                </Nav>   
                    <Button className="btn" >Login</Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
export default Navigation;
