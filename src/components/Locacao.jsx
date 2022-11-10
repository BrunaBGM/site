import React,{useState,Component} from 'react'
import Leaf from '../image/leaf.jpg'
import Calendar from 'moedim';

function Locacao(){
  
    // const [value, setValue] = useState(new Date())

    const[formValues,setformValues]=useState({});

    const handleInputChange = (e) =>  {
        const {name , value} = e.target;
        setformValues({...formValues,[name]: value});
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);
    
    }  
    
    return(
    <div className='row-pg'>
        <div className='card'>
        <img src={Leaf}/>
        <h2>NOME DO VEICULO</h2>
        <h3>Descricao do veiculo</h3>
        <p>mais descricao</p>
        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
        <h3>VALOR:1000,00</h3>
        </div>
        <div className='card'>
        <h3>Gostou deste veículo?</h3>
        <h4>Faça uma reserva.</h4>
        <form onSubmit={(handleSubmit)}>
        <p>
        <input type='name' name='nome' placeholder='Digite seu nome' onChange={handleInputChange} value={(formValues.nome || '')}></input><br/>
        </p>
        {/* <Calendar  value={value} onChange={(d) => setValue(d)} /> */}
        <p>
        <input type='name' name='nome' placeholder='Digite sua idade' onChange={handleInputChange} value={(formValues.idade || '')}></input><br/>
        </p>
        <p>
        <input type='email' name='email' placeholder='Digite seu email' onChange={handleInputChange} value={(formValues.email || '')}></input><br/>
        </p>
        <p>
        <input placeholder='Digite sua CNH' onChange={handleInputChange} value={(formValues.cnh || '')}></input><br/>
        </p>
        <button type="submit">Enviar</button>
        </form>
    </div>
        </div>
        
    )
}

export default Locacao;