import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import HomePage from './Screens/HomePage';
import ProductView from './Screens/ProductView';
function App() {
  return (
    <BrowserRouter>
      <div>
        <header>
          <Link to="/">Recirculate</Link>
        </header>
        <main>
          <h1>Products</h1>
        </main>
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />

            <Route path="/product/:slug" element={<ProductView />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
