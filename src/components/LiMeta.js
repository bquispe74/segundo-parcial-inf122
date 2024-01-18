import React, { useState } from 'react';
import Contador from './Contador';
import Meta from './Meta';
import '../estilos/LiMeta.css'

function LiMetas() {
    const [metas, setMetas] = useState([]);
    const [nuevaMeta, setNuevaMeta] = useState('');

    const agregarMeta = () => {
        if (nuevaMeta.trim() === '') return;
        setMetas([...metas, { id: Date.now(), texto: nuevaMeta }]);
        setNuevaMeta('');

    };

    const eliminarMeta = (id) => {
        setMetas((prevMetas) => prevMetas.filter((meta) => meta.id !== id));
    };
    const [nroClicks, setNumClicks] = useState(0);
    const click1 = () => {
      setNumClicks(nroClicks + 1);
    }
   

    return (
        <div className='contenedor-main'>
            <input
                className="input"
                type="text"
                value={nuevaMeta}
                placeholder='Nueva Meta......'
                onChange={(e) => setNuevaMeta(e.target.value)}
            />
            
            <button className='boton' onClick={agregarMeta}>Agregar</button>
            <div className='contador'><Contador numMetasPendientes={metas.length}/></div>
            {metas.map((meta) => (
                <Meta
                    key={meta.id}
                    nota={meta}
                    onDelete={eliminarMeta}
                    
                />
            ))}
            
        </div>
    );
}

export default LiMetas;