import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Rating from './Rating';

function Product(props) {
  const { product } = props;
  return (
    <Card className="product " key={product.slug}>
      <Link to={`product/${product.slug}`}>
        <img src={product.image} className="card-img-top" alt={product.name} />
      </Link>
      <Card.Body className="product-info">
        <Link to={`product/${product.slug}`}>
          <Card.Title>{product.name}</Card.Title>
        </Link>

        <Card.Title>₹{product.price}</Card.Title>
        <Rating numRating={product.numRating} rating={product.rating} />
        <Button>Add to Cart</Button>
      </Card.Body>
    </Card>
  );
}
export default Product;
