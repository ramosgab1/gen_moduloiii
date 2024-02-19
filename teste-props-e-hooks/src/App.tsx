
import './App.css'
import Home from './paginas/home/Home'


function App() {
  
  //   const [valor, setValor] = useState(0);
  
  //   function handleClick() {
  //     setValor(valor + 1);
  //   }
  //   return (
  //     //  <Home  title="Componente Home"
  //     //         description="Este é um componente Home que recebe props."/>
  //     <div>
  //       <p>O valor é: {valor}</p>
  //       <button onClick={handleClick}>Adicionar 1</button>
  //     </div>
  //   );
  // }
  
  // export default App;

  return (
    <>
      <Home titulo="Esse é um componente com properties." 
      texto="Trabalhando com properties, componente usado com sucesso."/>
    </>
  )
}

export default App


