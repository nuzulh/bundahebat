import { NavLink } from "react-router-dom";
import '../css/Navbar.css';

function Navbar() {
    return (
        <nav>
            <div className='logo'>
                <h3>Logo</h3>
            </div>
            <div className='menu'>
                <NavLink to='/'>Direktori</NavLink>
                <NavLink to='/info'>Info Kesehatan</NavLink>
                <NavLink to='/riwayat'>Riwayat</NavLink>
                <button onClick={() => alert('y')}><i className='fa-solid fa-magnifying-glass'></i></button>
                <NavLink to='/masuk'>Masuk</NavLink>
                <NavLink to='/' className='user'><i className='fa-solid fa-circle-user'></i></NavLink>
            </div>
        </nav>
    );
}

export default Navbar;