import React, {useState} from 'react'

const CadastroVeiculo=({onSubmit}) => {
    const [veiculo, setVeiculo] = useState({
        nomeVeiculo: "",
        titulo: "",
        subtitulo: "",
        valor: ""
      });

    const handleChange = (e) => {
        setVeiculo({ ...veiculo, [e.target.name]: e.target.value });
      };
    

    const submit = (e) => {
        e.preventDefault();
        onSubmit(veiculo);
    };

    return(
    <div className="contaniner">
        <form onSubmit={submit}>
            <h4>Para cadastro de veículos</h4>
            <div>
            <input htmlFor="nomeVeiculo"
                className="inputs"
                type="text"
                id="nomeVeiculo"
                placeholder="Modelo do veículo"
                value={veiculo.nomeVeiculo}
                onChange={handleChange}
                />
            </div>
            <div>
            <input htmlFor="titulo"
                className="inputs"
                type="text"
                id="titulo"
                value={veiculo.titulo}
                onChange={handleChange}
                placeholder="Descrições do veículo"
                />
            </div>
            <div>
            <input htmlFor="subtitulo"
                className="inputs"
                type="text"
                id="subtitulo"
                value={veiculo.subtitulo}
                onChange={handleChange}
                placeholder="Informações adicionais"
                />
            </div>
            <div>
            <input htmlFor="valor"
                className="inputs"
                type="text"
                id="valor"
                value={veiculo.valor}
                onChange={handleChange}
                placeholder="Valor do aluguel"
                />
            </div>
            <button type="submit">Salvar</button>
            <button>Listar veículos</button>
        </form>
    </div>
    )
}
export default CadastroVeiculo;