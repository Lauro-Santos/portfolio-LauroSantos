import Projetos from 'components/Projetos';
import Rodape from 'components/Rodape';
import Cabecalho from 'components/Cabecalho';
import VolterAoTopo from 'components/VoltarAoTopo'

const Home = () => {
  return (
    <>
    <Cabecalho />
    <VolterAoTopo />
    <main>
      <Projetos />
    </main>
    <Rodape />
  </>
  );
};

export default Home;
