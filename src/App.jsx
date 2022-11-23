import logo from './logo.svg';
import NavBar from './components/NavBar'
import CartWidget from './components/CartWidget'
import ItemListContainer from './components/ItemListContainer'


import './App.css';

function App() {
  return (
    <>
      <div className="App">
        <NavBar/>
        <CartWidget/>
      <ItemListContainer greeting='Saludos usuario'/>
{/* en este orden deberia ir, no es un argumento el cart widget, es un elemento que va despues del navbar y se acopla */}

      </div>
    </>
    );
  }
  
  export default App;
  