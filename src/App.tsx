import './assets/index.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from './components/navbar';
import Product from './layout/product';
import Landing from './layout/landing';
import Products from './layout/products';
import FewProducts from './layout/fewProducts';

function App() {
  return (
    <Router>
        <Navbar />

        <Routes>
          <Route path='/' element={<>
            <Landing />
            <FewProducts />
          </>}></Route>

          <Route path='/products' element={<Products />}></Route>
          <Route path=':title/:id' element={<Product />}></Route>
        </Routes>

    </Router>
  );
}

export default App;
