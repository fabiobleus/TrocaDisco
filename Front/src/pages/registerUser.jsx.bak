import { json, redirect, useNavigate } from "react-router-dom";
import Header from "../componentes/header"
import React, { useState } from 'react';


const RegisterUser = () => {
    const navigate = useNavigate();

    const [FormUser, setFormUser] = useState({
        name: '',
        email: '',
        password: '',
        cpf: '',
        birthdate: '',
        uf: '',
        city: '',
        cep: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormUser({
            ...FormUser,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();

            const bodyJson = JSON.stringify(FormUser);
            const options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/JSON'
                },
                body: bodyJson
            };


            const response = await fetch('http://localhost:3000/api/user', options);
            if (response.ok) {
                alert('Usuário Cadastrado com Sucesso! \n Faça o login para prosseguir.');
                navigate('/login-user')
            } else {
                alert('Erro ao cadastrar o usuário');
            }
        } catch (error) {
            alert('Erro! tente novamente.');
        }
    };


    return (
        <div className="min-height-500 d-flex flex-column align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
            <Header />
            <div style={{ height: '2rem' }}>
            </div>
            <h1>Cadastro de Usuários</h1>
            <form className="form-container" style={{ maxWidth: '600px', width: '100%' }} onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="inputName" className="form-label">Nome:</label>
                    <input type="text" className="form-control" onChange={handleChange} value={FormUser.name} name="name" />
                </div>
                <div className="mb-3">
                    <label htmlFor="inputEmail4" className="form-label" >E-mail</label>
                    <input type="email" className="form-control" id="inputEmail4" onChange={handleChange} value={FormUser.email} name="email" />
                </div>
                <div className="mb-3" style={{ maxWidth: '300px' }}>
                    <label htmlFor="inputPassword4" className="form-label">Senha</label>
                    <input type="password" className="form-control" id="inputPassword4" onChange={handleChange} value={FormUser.password} name="password" />
                </div>
                <div className="mb-3">
                    <label htmlFor="inputAddress" className="form-label">Endereço</label>
                    <input type="text" className="form-control" id="inputAddress" onChange={handleChange} value={FormUser.address} name="address" />
                </div>
                <div className="mb-3">
                    <label htmlFor="inputAddress2" className="form-label">Complemento</label>
                    <input type="text" className="form-control" id="inputAddress2" onChange={handleChange} value={FormUser.complement} name="complement" />
                </div>
                <div className="mb-3">
                    <label htmlFor="inputCity" className="form-label">Cidade</label>
                    <input type="text" className="form-control" id="inputCity" onChange={handleChange} value={FormUser.city} name="city" />
                </div>
                <div className="mb-3">
                    <label htmlFor="inputState" className="form-label">Estado</label>
                    <select id="inputState" className="form-select">
                        <option selected>Escolha...</option>
                        <option>...</option>
                    </select>
                </div>
                <div className="mb-3" style={{ maxWidth: '150px' }}>
                    <label htmlFor="inputZip" className="form-label">Cep</label>
                    <input type="text" className="form-control" id="inputZip" />
                </div>
                <div className="d-grid" style={{ maxWidth: '150px', margin: '0 auto' }}>
                    <button type="submit" className="btn btn-primary">Cadastrar</button>
                </div>
            </form>
        </div>
    )
}

export default RegisterUser;