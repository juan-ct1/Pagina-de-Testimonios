import React from "react";
import '../hojas-de-estilos/Testimonio.css'

function Testimonios(props){
    return (
        <div className='contenedor-testimonios'> 
            <img
                className='imagen-testimonio'
                src={require(`../img/testimonio-${props.imagen}.PNG`)} 
                alt={`Foto de Perfil de ${props.nombre}`}
                 />

                <div className='contenedor-testimonios-texto'>
                    <p className='nombre-testimonio'>
                        <strong>{props.nombre}</strong> en {props.pais}</p>
                    <p className='cargo-testimonio'>{props.cargo} en <strong>{props.compania}</strong></p> 
                    <p className='cargo-testimonio'>"{props.testimonios}"</p>                
                </div>
        </div>
    );
}

export default Testimonios;