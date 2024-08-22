import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/tienda.css";

import TituloTienda from "../component/tituloTienda";
import CategoriasProductos from "../component/CategoriasProductos";
import MapaTienda from "../component/mapaTienda";
import { useParams } from "react-router-dom";
import { TodosProductos } from "../component/cardTodosProductos";

export const Tienda = () => {
    const { store, actions } = useContext(Context);
    const [productosFiltrados, setProductosFiltrados] = useState([]);
    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('');

    const params = useParams();


    useEffect(() => {
        actions.getTienda(params.id);
        actions.getProductosTienda(params.id);
    }, []);

    useEffect(() => {
        if (categoriaSeleccionada) {
            const productosFiltrados = store.productosTienda.filter(producto => producto.categoria_producto === categoriaSeleccionada);
            setProductosFiltrados(productosFiltrados);
        } else {
            setProductosFiltrados(store.productosTienda);
        }
    }, [categoriaSeleccionada, store.productosTienda]);

    const handleCategoriaChange = (categoria) => {
        setCategoriaSeleccionada(categoria);
    };


    return (
        <div className="container" style={{backgroundColor:"#def4f5"}}>
            <div className="title-shop" >
                <div className="text-custom-tienda">
                    <TituloTienda />
                </div>
            </div>
            <img src={store.tienda.url_imagen_tienda}
                className="tienda-img"
                alt="Foto Home" />
            <div className="tus-productos">
                <div className="text-custom-tienda">
                    <CategoriasProductos onCategoriaChange={handleCategoriaChange} id={params.id} />
                </div>
            </div>
            <div className="cards row justify-content-center container">
                {productosFiltrados.map((producto) => {
                    return (
                        <div key={producto.id} className="text col-8 col-md-6 col-lg-3 mb-4 d-flex justify-content-center custom-col">
                        <TodosProductos 
                            key={producto.id} 
                            id={producto.id} 
                            nombre_producto={producto.nombre_producto} 
                            descripcion_producto={producto.descripcion_producto} 
                            url_imagen_producto={producto.url_imagen_producto} 
                            precio={producto.precio} 
                            tienda_id={producto.tienda_id} 
                            categoria_producto={producto.categoria_producto} // Añadimos la categoría del producto
                        />
                        </div>
                    );
                })}
            </div>
            <div>
                <MapaTienda direccion={store.tienda.direccion_tienda} />
            </div>
        </div>
    );
};
