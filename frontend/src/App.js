import logo from './logo.svg';
import './App.css';
import ResponsiveAppBar from './components/header-poli/header-poli';
import BasicTable from './components/tabela/tabela';
function App() {
  return (
    <>
      <ResponsiveAppBar></ResponsiveAppBar>
      <BasicTable></BasicTable>
    </>
  );
}

export default App;
