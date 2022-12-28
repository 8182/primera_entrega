import NavBar from './components/NavBar/NavBar'
import CartWidget from './components/NavBar/CartWidget'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import './App.css';

function App() {
  return (
    <>
      <div className="App">
        <NavBar>
          <CartWidget/>
        </NavBar>
        <ItemListContainer greeting='Saludos usuario'/>
{/* en este orden deebria ir, no es un argumento el cart widget, es un elemento que va despues del navbar y se acopla */}

      </div>
    </>
    );
  }
  
  export default App;
  