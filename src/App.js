import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Daftar from './pages/Daftar';
import Masuk from './pages/Masuk';
import LupaPassword from './pages/LupaPassword';
import Riwayat from './pages/Riwayat';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/riwayat' element={<Riwayat />} />
        <Route path='/daftar' element={<Daftar />} />
        <Route path='/masuk' element={<Masuk />} />
        <Route path='/resetpassword' element={<LupaPassword />} />
      </Routes>
    </Router>
  );
}

export default App;
