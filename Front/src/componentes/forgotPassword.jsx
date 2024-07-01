import React, { useState } from 'react';
import Header from "../componentes/header"
import Footer from "../componentes/footer"
import "/src/index.css"


const ForgotPassword = () => {
   

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');
    const [isEmailVerified, setIsEmailVerified] = useState(false);

    const handleChangeEmail = (e) => {
        setEmail(e.target.value);
    };

    const handleChangePassword = (e) => {
        setPassword(e.target.value);
    };

    const handleChangeConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
    };

    const handleVerifyEmail = async (e) => {
        e.preventDefault();

        try {
            const options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email }),
            };

            const response = await fetch('http://localhost:3000/api/verify-email', options);
            const result = await response.json();

            if (response.ok) {
                setIsEmailVerified(true);
                setMessage('Email verificado. Por favor, insira sua nova senha.');
                
            } else {
                setMessage('Erro ao verificar email. Tente novamente.');
            }
        } catch (error) {
            setMessage('Erro ao verificar email. Tente novamente.');
        }
    };

    const handleSubmitNewPassword = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            setMessage('As senhas não coincidem. Tente novamente.');
            return;
        }

        try {
            const options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            };

            const response = await fetch('http://localhost:3000/api/reset-password', options);
            const result = await response.json();

            if (response.ok) {
                setMessage('Senha redefinida com sucesso. Você pode fazer login agora.');
            } else {
                setMessage('Erro ao redefinir senha. Tente novamente.');
            }
        } catch (error) {
            setMessage('Erro ao redefinir senha. Tente novamente.');
        }
    };

    return (
        <div className="min-height-500 d-flex flex-column align-items-center justify-content-center" style={{ minHeight: '50vh' }}>
            <Header />
            <div style={{ height: '2rem' }}></div>
            <h1>Recuperar Senha</h1>
            {!isEmailVerified ? (
                <form className="form-container" style={{ maxWidth: '400px', width: '100%' }} onSubmit={handleVerifyEmail}>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email:</label>
                        <input 
                            type="email" 
                            className="form-control" 
                            id="email" 
                            placeholder="email@example.com" 
                            onChange={handleChangeEmail} 
                            value={email} 
                            name="email" 
                            style={{ textAlign: 'left', paddingLeft: '10px' }}
                        />
                    </div>
                    <div className="d-grid">
                        <button type="submit" className="btn btn-primary">Verificar Email</button>
                    </div>
                </form>
            ) : (
                <form className="form-container" style={{ maxWidth: '400px', width: '100%' }} onSubmit={handleSubmitNewPassword}>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Nova Senha:</label>
                        <input 
                            type="password" 
                            className="form-control" 
                            id="password" 
                            placeholder="Nova Senha" 
                            onChange={handleChangePassword} 
                            value={password} 
                            name="password" 
                            style={{ textAlign: 'left', paddingLeft: '10px' }}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="confirmPassword" className="form-label">Confirme a Nova Senha:</label>
                        <input 
                            type="password" 
                            className="form-control" 
                            id="confirmPassword" 
                            placeholder="Confirme a Nova Senha" 
                            onChange={handleChangeConfirmPassword} 
                            value={confirmPassword} 
                            name="confirmPassword" 
                            style={{ textAlign: 'left', paddingLeft: '10px' }}
                        />
                    </div>
                    <div className="d-grid">
                        <button type="submit" className="btn btn-primary">Redefinir Senha</button>
                    </div>
                </form>
            )}
            {message && <p>{message}</p>}
            <Footer />
        </div>
    );
}

export default ForgotPassword;
