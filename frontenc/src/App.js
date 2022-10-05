import React, { useContext } from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import HomePage from './Screens/HomePage';
import ProductView from './Screens/ProductView';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { LinkContainer } from 'react-router-bootstrap';
import Badge from 'react-bootstrap/Badge';
import { Store } from './Store';
import CartSection from './Screens/CartSection';
import SigninSection from './Screens/SigninSection';

function App() {
  const { state } = useContext(Store);
  const { cart } = state;
  return (
    <BrowserRouter>
      <div className="d-flex flex-column site-container">
        <header>
          <Navbar bg="dark" variant="dark">
            <Container>
              <LinkContainer to="/">
                <Navbar.Brand>Recirculate</Navbar.Brand>
              </LinkContainer>
              <Nav className="me-auto">
                <Link to="/Cart" className="nav-link">
                  Cart
                  {cart.cartItems.length > 0 && (
                    <Badge pill bg="danger">
                      {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
                    </Badge>
                  )}
                </Link>
              </Nav>
            </Container>
          </Navbar>
        </header>

        <main>
          <Container className="mt-3">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/cart" element={<CartSection />} />
              <Route path="/signin" element={<SigninSection />} />

              <Route path="/product/:slug" element={<ProductView />} />
            </Routes>
          </Container>
        </main>
        <footer>
          <div className="text-center">All Rights Reserved</div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
