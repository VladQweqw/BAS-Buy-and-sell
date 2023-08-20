import './assets/index.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from './components/navbar';

import Landing from './layout/landing';

function App() {
  return (
    <Router>
        <Navbar />

        <Routes>
          <Route path='/' element={<Landing />}></Route>
        </Routes>

    </Router>
  );
}

export default App;
