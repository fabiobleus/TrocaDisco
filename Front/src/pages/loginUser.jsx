import Header from "../componentes/header"
import Footer from "../componentes/footer"
import "/src/index.css"
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

const LoginUser = () => {
    const navigate = useNavigate();

    const [FormLogin, setFormLogin] = useState({
        email: '',
        password: ''

    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormLogin({
            ...FormLogin,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();

            const bodyJson = JSON.stringify(FormLogin);
            const options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/JSON'
                },
                body: bodyJson
            };

            // const response = await fetch('http://localhost:3000/login', options);
            //     const se = await response.json()
            //     alert(se);
            //     // e.redirect('/login-user')
            fetch('http://localhost:3000/api/login', options) // todos produtos


                .then(async (response) => {
                    const ret = await response.json();
                    const aaa = ret
                    // const res = await response.status
                    // console.log(ret)
                    console.log(aaa)
                    if (ret.token) {
                        const sol = ret.token;
                        localStorage.setItem('tokenTD', sol)
                        navigate('/profile-page')
                    } else {
                        alert('Erro! Usuário ou senha Inválido.');
                    };
                })

                .catch((err) => {
                    // 'const st =   response.status
                    console.log(err.stringify);
                });

        } catch (error) {
            alert('Erro! tente novamente.');
        }
    };


    return (
        <div className="min-height-500 d-flex flex-column align-items-center justify-content-center" style={{ minHeight: '50vh' }}>
            <Header />
            <div style={{ height: '2rem' }}></div>
            <h1>Faça o Login</h1>
            <form className="form-container" style={{ maxWidth: '400px', width: '100%' }} onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="staticEmail2" className="form-label">Email:</label>
                    <input type="email" className="form-control" id="staticEmail2" placeholder="email@example.com" onChange={handleChange} value={FormLogin.email} name="email" style={{ textAlign: 'left', paddingLeft: '10px' }}/>
                </div>

                <div className="mb-3">
                    <label htmlFor="inputPassword2" className="form-label">Senha:</label>
                    <input type="password" className="form-control" id="inputPassword2" placeholder="Password" onChange={handleChange} value={FormLogin.password} name="password" />
                </div>

                <div className="d-grid">
                    <button type="submit" className="btn btn-primary">Confirmar</button>
                </div>
            </form>
            <Footer />
        </div>

    );
}

export default LoginUser;