import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";
import fruteria from "../../img/fruteria.jpg";
import { TodosProductosVendedor } from "../component/cardVendedorTodosProductos";
import "../../styles/vendedor.css";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export const EditarProducto = () => {
    const { store, actions } = useContext(Context);

    const [nombreProducto, setNombreProducto] = useState(store.producto.nombre_producto);
    const [descripcionProducto, setDescripcionProducto] = useState(store.producto.descripcion_producto);
    const [categoriaProducto, setCategoriaProducto] = useState(store.producto.categoria_producto);
    const [precio, setPrecio] = useState(store.producto.precio);
    const [urlImagenProducto, setUrlImagenProducto] = useState(store.producto.url_imagen_producto);
    const [idProducto, setIdProducto] = useState(store.producto.id);


    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
        const success = await actions.editarProducto(nombreProducto, descripcionProducto, categoriaProducto, precio, urlImagenProducto, token, idProducto);
        if (success) {
            // Aquí puedes redirigir a la página de productos o mostrar un mensaje de éxito
            navigate("/vendedor");
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Producto editado",
                showConfirmButton: false,
                timer: 2000
            });
        } else {
            // Manejo de errores, como mostrar un mensaje al usuario
            Swal.fire({
                title: 'Error!',
                text: "Error al editar el producto",
                icon: 'error',
                confirmButtonText: 'OK'
            });
        }
    };

    // Comprobar si hay un token presente
    const token = localStorage.getItem("token");
    if (!token) {
        return <h2>No estás autorizado para acceder a esta página.</h2>;
    }


    useEffect(() => {
        const token = localStorage.getItem("token");

        actions.getTiendaVendedor(token)
        // actions.getTiendas()
        actions.getProductosVendedor(token)
    }, [])

    return (
        <>
            <div className="container" style={{ backgroundColor: "#def4f5" }}>
                <div className="text-center pt-5 vendedor">
                    <h2>{store.tienda.nombre_tienda}</h2>
                    <img src={store.tienda.url_imagen_tienda} className="imagen-fruteria img-fluid w-150" alt="Foto Home" />
                    <div className="vendedor row d-flex justify-content-center border-top mt-5">
                        <div className="titulovendedor-añadir-productos col-4 mt-4 ms-4">
                            <h2 className="text-center">Edita un producto</h2>
                        </div>
                        <div className="formulariovendedor col-8 col-md-6 col-lg-8 pb-5">
                            <form onSubmit={handleSubmit}>
                                <div className="">
                                    <label htmlFor="nombreProducto" className="form-label"></label>
                                    <input
                                        type="text"
                                        className="form-control vendedor"
                                        id="nombreProducto"
                                        placeholder="Nombre de producto"
                                        value={nombreProducto}
                                        onChange={(e) => setNombreProducto(e.target.value)}
                                    />
                                </div>
                                <div className="">
                                    <label htmlFor="descripcionProducto" className="form-label"></label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="descripcionProducto"
                                        placeholder="Descripción del producto"
                                        value={descripcionProducto}
                                        onChange={(e) => setDescripcionProducto(e.target.value)}
                                    />
                                </div>
                                <div className="">
                                    <label htmlFor="categoriaProducto" className="form-label"></label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="categoriaProducto"
                                        placeholder="Categoria del producto (Por ejemplo: Frutas, Verduras, Pan, Dulces)"
                                        value={categoriaProducto}
                                        onChange={(e) => setCategoriaProducto(e.target.value)}
                                    />
                                </div>

                                <div className="">
                                    <label htmlFor="precio" className="form-label"></label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        id="precio"
                                        placeholder="Precio en €"
                                        value={precio}
                                        onChange={(e) => setPrecio(e.target.value)}
                                        step="1"
                                    />
                                </div>


                                <div className="mb-4">
                                    <label htmlFor="urlImagenProducto" className="form-label"></label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="urlImagenProducto"
                                        placeholder="URL de la imagen del producto"
                                        value={urlImagenProducto}
                                        onChange={(e) => setUrlImagenProducto(e.target.value)}
                                    />
                                </div>
                                <button type="submit" className="boton vendedor mb-4">Editar Producto</button>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

