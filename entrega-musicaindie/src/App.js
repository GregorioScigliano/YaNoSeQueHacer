import Cart from './components/CartWidget';
import ColorSchemesExample from './components/NavBar';


function App(){
  return(
    <div>
      <header>
      <ColorSchemesExample></ColorSchemesExample>
      </header>
      <main className='miMain'>
      <Cart></Cart>
      </main>
    </div>
  );
}

export default App;