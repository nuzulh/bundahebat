import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import '../css/Navbar.css';
import { Outlet } from "react-router-dom";
import API from '../API';
import { useNavigate } from "react-router-dom";

function Navbar() {
    const [logged, setLogged] = useState(false);
    const [user, setUser] = useState({});
    const navigate = useNavigate();
    const keluar = () => {
        setLogged(false);
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        navigate('/');
        window.location.reload();
    };
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setLogged(true);
            const user_id = localStorage.getItem('user');

            API.get(`/user/${user_id}`).then(res => {
                setUser(res.data);
            }).catch(err => {
                console.log(err);
            });
        }
    }, []);
    return (
        <>
            <nav>
                <div className='logo'>
                    <h3>Logo</h3>
                </div>
                <div className='menu'>
                    <div className='dropdown'>
                        <NavLink to='/' className='dropbtn'>Direktori</NavLink>
                        <div className='dropdown-content'>
                            <NavLink to='#'>Dokter</NavLink>
                            <NavLink to='#'>Rumah Sakit</NavLink>
                            <NavLink to='#'>Klinik</NavLink>
                            <NavLink to='/pemesanan'>Pemesanan</NavLink>
                        </div>
                    </div>
                    <div className='dropdown'>
                        <NavLink to='#' className='dropbtn'>Info Kesehatan</NavLink>
                        <div className='dropdown-content'>
                            <NavLink to='info-kesehatan/jantung'>Jantung</NavLink>
                            <NavLink to='info-kesehatan/bayi-dan-balita'>Bayi & Balita</NavLink>
                            <NavLink to='info-kesehatan/kanker'>Kanker</NavLink>
                            <NavLink to='info-kesehatan/kehamilan'>Kehamilan</NavLink>
                            <NavLink to='info-kesehatan/info-obat'>Info Obat</NavLink>
                            <NavLink to='info-kesehatan/mitos-dan-fakta'>Mitos & Fakta</NavLink>
                        </div>
                    </div>
                    <NavLink to='/riwayat'>Riwayat</NavLink>
                    <i className='fa-solid fa-magnifying-glass'></i>
                    {logged ? <NavLink to="/" onClick={keluar}>Keluar</NavLink> : <NavLink to='/masuk'>Masuk</NavLink>}
                    <NavLink to='/' className='user'><i className='fa-solid fa-circle-user'></i> {user.front_name}</NavLink>
                </div>
            </nav>
            <Outlet />
        </>
    );
}

export default Navbar;