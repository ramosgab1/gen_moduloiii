interface homeProps{
    titulo: string; 
    texto: string; 
}

function Home(props : homeProps) {
    
//     const [completed, setCompleted] = useState(false);
//     const [tarefa, setTarefa] = useState('');
  
//     useEffect(() => {
//       if (completed) {
//         setTarefa('Parabéns! Você concluiu a tarefa!');
//       }
//     }, [completed]);
  
//     return (
//       <div>
//         <h1>Tarefa</h1>
//         <h3>{tarefa}</h3>
//         <p>Conclua a tarefa</p>
//         <button onClick={() => setCompleted(true)}>Concluir Tarefa</button>
//       </div>
//     );
//   }

    return(
        <>
            <h1>{props.titulo}</h1>
            <p>{props.texto}</p>
        </>
    )
}

export default Home; 