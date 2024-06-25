// import React, { useState } from 'react';


// const fetchProducts = (searchTerm) => {
//     // Simula uma chamada a uma API que retorna resultados de produtos
//     // Substitua isso por sua chamada real à API
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             const dummyResults = [
//                 { id: 1, name: 'Produto 1' },
//                 { id: 2, name: 'Produto 2' },
//                 { id: 3, name: 'Produto 3' },
//             ];
//             const filteredResults = dummyResults.filter(product =>
//                 product.name.toLowerCase().includes(searchTerm.toLowerCase())
//             );
//             resolve(filteredResults);
//         }, 1000);
//     });
// };

// const NavbarBusca = () => {
//     const [searchTerm, setSearchTerm] = useState('');
//     const [searchResults, setSearchResults] = useState([]);
//     const [loading, setLoading] = useState(false);

//     const handleSearchChange = (event) => {
//         setSearchTerm(event.target.value);
//         console.log('Termo de busca atualizado:', event.target.value); // Log quando o termo de busca muda
//     };

//     const handleSearchSubmit = async (event) => {
//         event.preventDefault();
//         console.log('Formulário enviado com termo de busca:', searchTerm); // Log quando o formulário é enviado
//         setLoading(true);
//         const results = await fetchProducts(searchTerm);
//         console.log('Resultados da busca:', results); // Log dos resultados da busca
//         setSearchResults(results);
//         setLoading(false);
//     };

//     return (
//         <div>
//             <nav className="navbar navbar-light bg-light">
//                 <form className="form-inline" onSubmit={handleSearchSubmit}>
//                     <div className='procuraProdutos col-md-10'>
//                         <input
//                             className="form-control mr-sm-1"
//                             type="search"
//                             placeholder="Procurar Produtos"
//                             aria-label="Search"
//                             value={searchTerm}
//                             onChange={handleSearchChange}
//                         />
//                     </div>
//                     <div className='buttonBuscar'>
//                         <button className="btn btn-outline-success my-1 my-sm-0" type="submit">
//                             {loading ? 'Buscando...' : 'Buscar'}
//                         </button>
//                     </div>
//                 </form>
//             </nav>
//             <div className="search-results">
//                 {loading ? (
//                     <p>Carregando...</p>
//                 ) : (
//                     searchResults.length > 0 ? (
//                         <ul>
//                             {searchResults.map(product => (
//                                 <li key={product.id}>{product.name}</li>
//                             ))}
//                         </ul>
//                     ) : (
//                         searchTerm && <p>Nenhum produto encontrado.</p>
//                     )
//                 )}
//             </div>
//         </div>
//     );
// };

// export default NavbarBusca;

// //Tirar a duvida com o professor e colegas