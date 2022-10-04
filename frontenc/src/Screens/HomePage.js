import React, { useEffect, useReducer } from 'react';

import logger from 'use-reducer-logger';

import axios from 'axios';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Product from '../Components/Product';
import { Helmet } from 'react-helmet-async';
import LoadingBox from '../Components/LoadingBox';
import ErrorMessage from '../Components/ErrorMessage';
import { getError } from '../utils';

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_SUCCESS':
      return { ...state, products: action.payload, loading: false };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

function HomePage() {
  const [{ loading, error, products }, dispatch] = useReducer(logger(reducer), {
    products: [],
    loading: true,
    error: '',
  });
  // const [products, setProduct] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'FETCH_REQUEST' });
      try {
        const result = await axios.get('/api/products');
        dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
      } catch (err) {
        dispatch({ type: 'FETCH_FAIL', payload: getError(err) });
      }

      // setProduct(result.data);
    };
    fetchData();
  }, []);
  return (
    <div>
      <Helmet>
        <title>Recirculate</title>
      </Helmet>
      <h1>Featured</h1>
      <div className="products">
        {loading ? (
          <LoadingBox />
        ) : error ? (
          <ErrorMessage variant="danger">{error}</ErrorMessage>
        ) : (
          <Row>
            {products.map((product) => (
              <Col key={product.slug} sm={12} md={6} lg={4} className="md-5">
                <Product product={product}></Product>
              </Col>
            ))}
          </Row>
        )}
      </div>
    </div>
  );
}
export default HomePage;
