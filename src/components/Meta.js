import React, { useState } from 'react';
import "../estilos/Meta.css"
function Meta({ nota, onDelete }) {
    

    return (
        <div className='main'>
            
    
                <div className='contenedor-nota'>
                    <p className='nota'>{nota.texto}</p>
                    <button className='boton' onClick={() => onDelete(nota.id)} >Eliminar</button>
                    <button className='boton' onClick={()=> completarMeta(nota)}>Completado</button>
                </div>
        </div>
    );
}

export default Meta;