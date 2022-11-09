import React,{useEffect} from 'react'
import ImgBg from '../image/carros-eletricos.jpg'
// const verificar = sessionStorage.getItem("usuario-valido")

function Home(){

    const home = {
    
        margin: '0px',
        padding: '0px',
        width: '100%',
        height: '30em',
        textAlign: 'center',
        color: 'black',
        backgroundImage: `url(${ImgBg})`,
        backgroundSize: 'cover',
        display: 'flex'
    }

    var teste = {
        marginTop: '7%',
        marginLeft: '10%',
        color: 'white',
        textShadow:  '#000 1px 2px 2px'
    }

    // useEffect(()=>{
    //     if (verificar == null){
    //         window.location= "/"
    //     }
    // },[])
    return(
        <div style={home}>
            <div style={teste}>
        {/* {verificar &&( */}
            <>
            <h1>Home</h1>
            <p>Olá
                {/* {verificar} */}
                , seja bem vindo</p>
            </>
        {/* )} */}
        </div>
        </div>
    )
}
export default Home;