import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Daftar from './pages/Daftar';
import Masuk from './pages/Masuk';
import LupaPassword from './pages/LupaPassword';
import Riwayat from './pages/Riwayat';
import Pemesanan from './pages/Pemesanan';
import InfoKesehatan from './pages/contents/InfoKesehatan';
import Bayi from './pages/contents/Bayi';
import Jantung from './pages/contents/Jantung';
import Kanker from './pages/contents/Kanker';
import Kehamilan from './pages/contents/Kehamilan';
import MitosFakta from './pages/contents/MitosFakta';
import InfoObat from './pages/contents/InfoObat';

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Navbar />} >
          <Route path='/' element={<Home />} />
          <Route path='/riwayat' element={<Riwayat />} />
          <Route path='/daftar' element={<Daftar />} />
          <Route path='/masuk' element={<Masuk />} />
          <Route path='/reset-password' element={<LupaPassword />} />
          <Route path='/pemesanan' element={<Pemesanan />} />

          <Route element={<InfoKesehatan />} >
            <Route path='/info-kesehatan/jantung' element={<Jantung />} />
            <Route path='/info-kesehatan/bayi-dan-balita' element={<Bayi />} />
            <Route path='/info-kesehatan/kanker' element={<Kanker />} />
            <Route path='/info-kesehatan/kehamilan' element={<Kehamilan />} />
            <Route path='/info-kesehatan/mitos-dan-fakta' element={<MitosFakta />} />
            <Route path='/info-kesehatan/info-obat' element={<InfoObat />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
