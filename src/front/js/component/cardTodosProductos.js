import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/todosproductos.css";
import Swal from "sweetalert2";

export const TodosProductos = ({ url_imagen_producto, nombre_producto, descripcion_producto, id, precio, tienda_id, nombre_tienda, categoria_producto, isFavorito }) => {
    const { store, actions } = useContext(Context);
    const [mostrarMas, setMostrarMas] = useState(false);

    const desplegableDescripcion = () => {
        setMostrarMas(!mostrarMas);
    };

    let token = localStorage.getItem("token");
    let tipo_usuario = localStorage.getItem("tipo_usuario");

    function addFavoriteProduct(id) {
        // const producto_id = id
        // console.log(isFavorito);
        if (isFavorito) {
            console.log("borrando");
            actions.borrarProductoFavorito(id)
            Swal.fire({
                title: 'Eliminado',
                text: "Producto eliminado de tus favoritos",
                icon: 'error',
                showConfirmButton: false,
                timer: 1000
            });
        }
        if (isFavorito === undefined) {
            actions.añadirProductoFavorito(id)
            Swal.fire({
                title: 'Añadido',
                text: "Producto añadido a tus favoritos",
                icon: 'success',
                showConfirmButton: false,
                timer: 1000
            });
        }
    }

    return (
        <div className="grid-container">
            <div className="tarjeta-producto">
                <Link to={`/infoproducto/${id}/tienda/${tienda_id}`}>
                    <img
                        src={url_imagen_producto}
                        alt={nombre_producto}
                        className="img-producto"
                    />
                </Link>
                <div className="tarjeta-producto-info">
                    <h4 className="titulo-producto">{nombre_producto}</h4>
                    <p className="descripcion-producto">
                        {mostrarMas ? descripcion_producto : descripcion_producto.slice(0, 20)}
                        {descripcion_producto.length > 20 && (
                            <span className="ver-mas" onClick={desplegableDescripcion}>
                                {mostrarMas ? " Ver menos" : "...Ver más"}
                            </span>
                        )}
                    </p>
                    <div className="precio-tienda-container">
                        <b className="ms-2 text-black text-xs">{nombre_tienda}</b>
                        <h5 className="precio-producto">{precio}€</h5>
                    </div>
                    <div className="star-productos d-flex justify-content-start me-2 mt-2">
                        {tipo_usuario === "particular" && token ? <Link to="#" className="btn btn-outline-warning ms-2" onClick={() => addFavoriteProduct(id)}><i className={`fa-regular fa-star ${isFavorito ? "fas" : "far"}`}></i></Link> : null}
                    </div>
                </div>
            </div>
        </div>
    );
};