import SignDecoration from "../components/SignDecoration";
import { NavLink } from "react-router-dom";
import '../css/Sign.css';

function Daftar() {
    const daftar = (e) => {
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
                <form onSubmit={daftar}>
                    <div className='row'>
                        <div className='col'>
                            <label htmlFor='nama-depan'>Nama Depan</label>
                            <input type='text' name='nama-depan' required />
                        </div>
                        <div className='col'>
                            <label htmlFor='nama-belakang'>Nama Belakang</label>
                            <input type='text' name='nama-belakang' required />
                        </div>
                    </div>
                    <label htmlFor='email'>Alamat Email</label>
                    <input type='email' name='email' required />
                    <label htmlFor='password'>Buat Kata Sandi</label>
                    <input type='password' name='password' required />
                    <div className='syarat-setuju'>
                        <input type='checkbox' name='setuju' required />
                        <span>Saya setuju dengan <a href="#">syarat & ketentuan</a></span>
                    </div>
                    <button>DAFTAR</button>
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

export default Daftar;