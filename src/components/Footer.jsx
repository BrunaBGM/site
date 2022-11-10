import React from 'react'

export default function Footer(){
    const footer= {
        borderTop: '1px',
        bottom: '0',
        left: '40%',
        height: '40px',
        position: 'fixed',
        width: '100%'
    }
    
    return(
        
        <div>
            <footer>
                <p style={footer}>Feito por Bruna Gabriela Moreira</p>
            </footer>
        </div>
    )
}