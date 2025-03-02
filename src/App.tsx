import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import Home from './pages/Home';
import ProductDetailPage from './pages/ProductDetailPage';
import Header from './components/Header/Header';

export default function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/product/:id' element={<ProductDetailPage />} />
        </Routes>
      </Router>
    </Provider>
  );
}
