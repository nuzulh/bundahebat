import SignDecoration from "../components/SignDecoration";
import { NavLink } from "react-router-dom";
import '../css/Sign.css';

function Masuk() {
    const masuk = (e) => {
        e.preventDefault();
    };
    return (
        <div className='sign'>
            <SignDecoration />
            <div className='sign-box'>
                <div className='sign-menu'>
                    <NavLink to='/masuk'>Masuk</NavLink>
                    <NavLink to='/daftar'>Daftar</NavLink>
                    <NavLink to='/reset-password'>Lupa Password</NavLink>
                </div>
                <form onSubmit={masuk}>
                    <label htmlFor='email'>Alamat Email</label>
                    <input type='email' name='email' required />
                    <label htmlFor='password'>Kata Sandi</label>
                    <input type='password' name='password' required />
                    <button>LOGIN</button>
                </form>
                <p>Atau Daftar Melalui</p>
                <div className='metode-lain'>
                    <button><i className="fa-brands fa-facebook-f"></i>LOGIN WITH FACEBOOK</button>
                    <button><i class="fa-brands fa-google"></i>LOGIN WITH GOOGLE</button>
                </div>
                <p>Belum memiliki akun? Daftar <NavLink to='/daftar'>disini</NavLink></p>
            </div>
        </div>
    );
}

export default Masuk;