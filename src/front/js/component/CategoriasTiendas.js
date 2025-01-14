import React, { useState, useEffect, useContext } from 'react';
import { Context } from '../store/appContext'; 
import "../../styles/categoriaTiendas.css";

const CategoriasTiendas = ({ onCategoriaChange }) => {
    const { store, actions } = useContext(Context);
    const [opcionSeleccionada, setOpcionSeleccionada] = useState('');

    useEffect(() => {
        actions.getCategoriasTiendas(); 
    }, []);

    const handleChange = (event) => {
        const opcion = event.target.value;
        setOpcionSeleccionada(opcion);
        onCategoriaChange(opcion); 
    };

    return (
        <div className="custom-categoria-tienda">
            <div className="custom-header">
                <h5 className="custom-titulo">Selecciona Categoria</h5>
                <select
                    className="form-select-tienda"
                    aria-label="Selecciona Tiendas"
                    value={opcionSeleccionada}
                    onChange={handleChange}
                >
                    <option value="">Selecciona</option>
                    {store.categoriasTiendas.map((categoria, index) => (
                        <option key={index} value={categoria}>
                            {categoria}
                        </option>
                    ))}
                </select>
            </div>
            <div className="cardcontainertiendas">
                {opcionSeleccionada && (
                    <h3>{opcionSeleccionada}</h3>
                )}
            </div>
        </div>
    );
};

export default CategoriasTiendas;