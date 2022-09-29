
import './App.css';
import Exemplo from './components/Exemplo';
import MyComponent from './components/MyComponent';

function App() {
  let valor = 15
  let nome = "eduardo"
  return (
    <div className="App">
      {/* CSS GLOBAL*/}
      <h1 className='css-global'>React com css</h1>
      {/* CSS DE COMPONENTES*/}
      <Exemplo />
      {/* CSS INLINE */}
      <h1 style={{color: 'blue', backgroundColor: 'gray'}}>Exemplo de CSS inline</h1>
      {/* CSS INLINE DINAMICO */}
      <h1 style={ valor < 10 ? ({color: 'purple'}) : ({color: 'pink'}) }>TEXTO DE EXEMPLO PARA O CSS DINAMICO</h1>
      <h1 style={ valor < 10 ? { color: 'purple', backgroundColor: "black" } : null}>TEXTO DE EXEMPLO PARA O CSS DINAMICO2</h1>
      {/* CLASSES DINAMICAS NO CSS */}
      <h2 className={nome === "eduardo" ? "condicaoFalsa": "condicaoVerdadeira"}>Texto de Exemplo de classes DINAMICAS</h2>
      {/* CSS MODULES */}
      <MyComponent />
      <h2 className='titulo'>teste</h2>
    </div>
  );
}

export default App;
