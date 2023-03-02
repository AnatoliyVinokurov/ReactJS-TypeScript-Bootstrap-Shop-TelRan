import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Order from './Home/Order';

interface Props {
    orders: Array<any>;
}

const NaviBar: React.FC<Props> = ({ orders }) => {

    const [cartOpen, setCartOpen] = useState<boolean>(false);

    const showOrders = () => {
        return orders.map((el) => (
            <Order key={el.id} item={el} />
        ));
    };

    const showNothing = () => {
        return (
            <div className='empty'>
                <h2>Cart is empty</h2>
            </div>
        );
    };

    return (

        <header>
            <Navbar className='navbar' bg='dark' variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="/" className='logo'>LOGO</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link className='navelementbtn' href="#action1">Men</Nav.Link>
                            <Nav.Link className='navelementbtn' href="/guest">Women</Nav.Link>
                            <Nav.Link className='navelementbtn' href="/profile">Kids</Nav.Link>
                            <Nav.Link className='navelementbtn' href="#action4">Sale</Nav.Link>
                            <Nav.Link className='navelementbtn' href="#action5">Collections</Nav.Link>
                            <Nav.Link className='navelementbtn' href="#action6">Blog</Nav.Link>
                        </Nav>

                        <Nav className="ms-auto">
                            <Form className="d-flex">
                                <Form.Control
                                    type="search"
                                    placeholder="Search"
                                    className="me-2"
                                    aria-label="Search"
                                />
                            </Form>

                            <Nav.Link className='navelementbtn' href="#action7">
                                <span className="badge badge-pill bg-danger">1</span>
                                <span><i className="fas fa-shopping-bag"></i></span>




                                <button
                                    onClick={() => setCartOpen(!cartOpen)}
                                    className={`shop-cart-button ${cartOpen && 'active'}`}
                                >card</button>
                                {cartOpen && (

                                    <div className='shop-cart' style={{ display: 'block', position: 'initial' }}>
                                        {orders.length > 0 ? showOrders() : showNothing()}
                                    </div>
                                )}



                            </Nav.Link>
                            <Nav.Link className='navelementbtn' href="#action8"><i className="fas fa-user-alt"></i></Nav.Link>

                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>

    )
}
export default NaviBar;