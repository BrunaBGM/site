import React from 'react'

const ListarVeiculo=({value}) => {
    return(
        <div className="container">
            <input value ={value} onChange className="Field-Item"/>
            <input value ={value} onChange className="Field-Item"/>
            <input value ={value} onChange className="Field-Item"/>
            <input value ={value} onChange className="Field-Item"/>
        </div>
    );
};
export default ListarVeiculo;