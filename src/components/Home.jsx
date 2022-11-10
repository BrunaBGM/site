import React,{useEffect} from 'react'
import './Home.css'
import{Link} from 'react-router-dom'
import Byd from '../image/byd.jpg'
import Leaf from '../image/leaf.jpg'
import Cooper from '../image/mini-cooper.jpg'
// const verificar = sessionStorage.getItem("usuario-valido")

function Home(){

    var teste = {
        marginTop: 0,
        marginLeft: '90%',
        position: 'center',
        color: 'grey',
    }

    var txt = {
        position: 'center',
        justifyContent: 'center',
        display: 'flex',
        color: 'black'
    }

    // useEffect(()=>{
    //     if (verificar == null){
    //         window.location= "/"
    //     }
    // },[])
    return(
        <div className='row'>
            <div style={teste}>
        {/* {verificar &&( */}
            <h1>Olá</h1>
            <p>
                {/* {verificar} */}
                ,Seja bem vindo!</p>
            </div>
            <div style={txt}>
                <h3>Conheça nossa frota</h3>
            </div>
        {/* )} */}
            
            <div className='card'>
                <h2>BYD Tan</h2>
                    <p>Ideal para quem busca tecnologia de última geração e se preocupa com meio ambiente.</p>
                    <a href='../Locacao'><img className='image' src={Byd}/></a>
            </div>
            <div className='card'>
                <h2>Nissan Leaf</h2>
                    <p>Veículo 100% elétrico, conta com uma ampla capacidade interna, ideal para quem busca uma mobilidade sustentável para o transporte de cargas leves.</p>
                    <a href='../Locacao'><img className='image' src={Leaf}/></a>
            </div>
            <div className='card'>
                <h2>Mini Cooper</h2>
                    <p>Esse veículo elétrico garante uma alta praticidade para realizar o transporte de grandes volumes de mercadorias, sem prejudicar o meio ambiente. </p>
                    <a href='../Locacao'><img className='image' src={Cooper}/></a>
            </div>
         </div>
    )
}
export default Home;