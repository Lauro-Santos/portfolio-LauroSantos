import logo from './logo.svg'
import './App.css'
import Cabecalho from './components/Cabecalho'
import Sobre from './components/Sobre'
import Hbilidades from './components/Habilidades'
import Projetos from './components/Projetos'
import Qualificacoes from './components/Qualificacoes'
import Rodape from './components/Rodape'

function App() {
  return (
    <div className="App">
      <Cabecalho img={logo} />
      <main>
        <Sobre />
        <Projetos />
        <Hbilidades />
        <Qualificacoes />
      </main>
      <Rodape />
    </div>
  )
}

export default App
