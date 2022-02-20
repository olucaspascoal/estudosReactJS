import { FiSearch } from 'react-icons/fi'

function App() {
  return (
    <div className="container">
      <h1 className="container-title"> Buscador de CEP </h1>
      <div className='container-input'>
        <input type="text" placeholder="Digite seu CEP: " />
        <button className='container-btn'> <FiSearch size={25} /> </button>
      </div>
    </div>
  );
}

export default App;