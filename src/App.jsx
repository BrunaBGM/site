import React,{useState} from 'react'
// import CadastroVeiculo from './components/CadastroVeiculo';
import ListarVeiculo from './components/ListarVeiculo';
import Menu from './components/Menu'
import Footer from './components/Footer'
import MainRoutes from './components/routes/MainRoutes'

const App=() => {
    const [salvar,setSalvar] = useState([]);

    const salvarVeiculo = (salvar) => {
        const itens = Array.from(salvar);
        itens.push({ id: salvar.length,value: EventTarget.value });
        setSalvar(itens);
    };

    return(
        <>
        <Menu/>
        <Footer/>
        <MainRoutes/>
        <div className="App">
            <div className="App-header">
                {/* <CadastroVeiculo onSubmit={salvarVeiculo}/> */}
                {salvar.map(({ id,value }) => (
                <ListarVeiculo
                key={id}
                value={value}
                />
             ))}
        </div>
    {/* <div className="Array">
        <pre>{JSON.stringify(salvar,null,4)}</pre>
    </div> */}
        </div>
        </>
    );
};
export default App;