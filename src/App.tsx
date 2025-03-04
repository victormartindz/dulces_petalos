import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProductDetailPage from './pages/ProductDetailPage';
import Header from './components/Header/Header';

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product/:id' element={<ProductDetailPage />} />
        <Route path='*' element={<p>Página no encontrada</p>} />
      </Routes>
    </>
  );
}
