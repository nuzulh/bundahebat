import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import '../css/Navbar.css';

function Navbar() {
    const [logged, setLogged] = useState(false);
    const keluar = () => {
        setLogged(false);
        localStorage.removeItem('token');
    };
    useEffect(() => {
        if (localStorage.getItem('token')) setLogged(true);
    }, []);
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
                {logged ? <NavLink to="/" onClick={keluar}>Keluar</NavLink> : <NavLink to='/masuk'>Masuk</NavLink>}
                <NavLink to='/' className='user'><i className='fa-solid fa-circle-user'></i></NavLink>
            </div>
        </nav>
    );
}

export default Navbar;