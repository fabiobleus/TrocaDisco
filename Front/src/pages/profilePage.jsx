import { json, redirect, useNavigate,useParams } from "react-router-dom";
import Header from "../componentes/header"
import Footer from "../componentes/footer";
import { useEffect, useState } from "react";

const ProfilePage = () => {
 
  auth: localStorage.getItem('tokenTD')
  
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    endereco: '',
    complemento: '',
    city: '',
    uf: '',
    cep: '',
    photo: ''
  });
  const [anuncios, setAnuncios] = useState([]);
  const [loading, setLoading] = useState(true);
  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: ''
  });
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/JSON',
      auth: localStorage.getItem('tokenTD')

    }
  };
  useEffect(() => {
    // Fetch user data and ads from the API
    fetchUserData();
    fetchUserAds();
  }, []);

  const fetchUserData = async () => {
    // Fetch user data from API
    const response = await fetch('http://localhost:3000/api/user/' , options );
    const data = await response.json();
    setUserData(data);
  };

  const fetchUserAds = async () => {
    

    // Fetch user ads from API
    const response = await fetch('http://localhost:3000/api/product/user/' , options );
    const data = await response.json();
    setAnuncios(data);
    setLoading(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPasswordData({ ...passwordData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Update user data via API
    const response = await fetch('http://localhost:5000/api/user', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData)
    });
    const data = await response.json();
    alert(data.message);
  };

  const handlePasswordSubmit = async (e) => {
    e.preventDefault();
    // Change user password via API
    const response = await fetch('http://localhost:5000/api/user/change-password', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(passwordData)
    });
    const data = await response.json();
    alert(data.message);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setUserData({ ...userData, foto: reader.result });
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="min-height-500" style={{ minHeight: '100vh' }}>
      <Header />
      <div className="container mt-4">
        <h1>Seus Dados</h1>
        <div className="row">
          <div className="col-md-3">
            <div className="mb-3">
              <label htmlFor="inputUserPhoto" className="form-label">Foto:</label>
              <input type="file" className="form-control" id="inputUserPhoto" onChange={handleFileChange} />
              {userData.foto && <img src={userData.foto} alt="Foto do Usuário" className="img-fluid mt-2" />}
            </div>
          </div>
          <div className="col-md-6">
            <form onSubmit={handleSubmit} className="form-container">
              <div className="mb-3">
                <label htmlFor="inputNome" className="form-label">Nome:</label>
                <input type="text" className="form-control" id="inputNome" name="name" value={userData.name} onChange={handleInputChange} />
              </div>
              <div className="mb-3">
                <label htmlFor="inputEmail" className="form-label">E-mail:</label>
                <input type="email" className="form-control" id="inputEmail" name="email" value={userData.email} onChange={handleInputChange} />
              </div>
              <div className="mb-3">
                <label htmlFor="inputEndereco" className="form-label">Endereço:</label>
                <input type="text" className="form-control" id="inputEndereco" name="adress" value={userData.endereco} onChange={handleInputChange} />
              </div>
              <div className="mb-3">
                <label htmlFor="inputComplemento" className="form-label">Complemento:</label>
                <input type="text" className="form-control" id="inputComplemento" name="complemento" value={userData.complemento} onChange={handleInputChange} />
              </div>
              <div className="mb-3">
                <label htmlFor="inputCidade" className="form-label">Cidade:</label>
                <input type="text" className="form-control" id="inputCidade" name="city" value={userData.city} onChange={handleInputChange} />
              </div>
              <div className="mb-3">
                <label htmlFor="inputEstado" className="form-label">Estado:</label>
                <input type="text" className="form-control" id="inputEstado" name="uf" value={userData.uf} onChange={handleInputChange} />
              </div>
              <div className="mb-3">
                <label htmlFor="inputCep" className="form-label">Cep:</label>
                <input type="text" className="form-control" id="inputCep" name="cep" value={userData.cep} onChange={handleInputChange} />
              </div>
              <div className="d-grid">
                <button type="submit" className="btn btn-primary">Salvar Dados</button>
              </div>
            </form>
            <form onSubmit={handlePasswordSubmit} className="form-container mt-4">
              <h3>Alterar Senha</h3>
              <div className="mb-3">
                <label htmlFor="inputCurrentPassword" className="form-label">Senha Atual:</label>
                <input type="password" className="form-control" id="inputCurrentPassword" name="currentPassword" value={passwordData.currentPassword} onChange={handlePasswordChange} />
              </div>
              <div className="mb-3">
                <label htmlFor="inputNewPassword" className="form-label">Nova Senha:</label>
                <input type="password" className="form-control" id="inputNewPassword" name="newPassword" value={passwordData.newPassword} onChange={handlePasswordChange} />
              </div>
              <div className="d-grid">
                <button type="submit" className="btn btn-primary">Alterar Senha</button>
              </div>
            </form>
          </div>
          {/* <div className="col-md-3">
            <h3>Seus Anúncios</h3>
            {loading ? (
              <p>Carregando anúncios...</p>
            ) : (
              <ul className="list-group">
                {anuncios.map((ad) => (
                  <li key={ad.id} className="list-group-item">
                    <h5>{ad.name}</h5>
                    <p>{ad.description}</p>
                  </li>
                ))}
              </ul>
            )}
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;