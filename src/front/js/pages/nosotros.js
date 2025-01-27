import React from "react";
import { Context } from "../store/appContext";
import Logo from "../../img/SIMBOLOCOLOR.png";
import "../../styles/nosotros.css";
import "../../img/01woman.jpg";
import "../../img/02woman.jpg";

export const Nosotros = () => {
    return (
        <div className="container nosotros-container text-center pt-5 pb-5">
            <header className="nosotros-header container">
                <h1>Bienvenid@</h1>
                <h3 className="nosotros-subtitle pb-3">¡En tu barrio te espera un mundo de posibilidades!</h3>
            </header>

            <section className="nosotros-main-section container my-4">
    <div className="row align-items-center">
        <div className="col-md-6 mb-3 text-center">
            <img src="01woman.jpg" className="img-fluid nosotros-image" alt="Imagen de mujer mostrando productos locales" />
        </div>
        <div className="texto-uno-nosotros col-md-6">
            <p className="nosotros-text-danger-emphasis mb-3 pe-4">
                <strong>¿Cansado de las grandes superficies y de la impersonalidad de las compras online?</strong>
            </p>
            <p className="nosotros-text pe-4">
                En tu barrio queremos acercarte a los comercios de tu barrio, esos pequeños negocios llenos de encanto y
                productos únicos que hacen de nuestra comunidad un lugar especial.
            </p>
        </div>
    </div>
</section>


            <section className="nosotros-secondary-section container my-4">
                <div className="row">
                    <div className="col-md-6 mb-3 text-center">
                        <img src="02woman.jpg" className="img-fluid nosotros-secondary-image" alt="Imagen de servicios locales" />
                    </div>
                    <div className="col-md-6 text-start pe-4">
                        <p className="nosotros-text-danger-emphasis mb-3">
                            <strong>Un centro comercial virtual para tu barrio:</strong> Descubre una amplia variedad de productos y servicios a tu alcance, desde tiendas de alimentación hasta librerías, pasando por talleres de artesanía y mucho más. Todo ello, sin moverte de casa y con la comodidad de comprar online.
                        </p>
                        <p className="nosotros-text-danger-emphasis mb-3">
                            <strong>Apoya al comercio local:</strong> Cada compra que realizas En tu barrio contribuye a fortalecer la economía de tu barrio y a crear un futuro más sostenible.
                        </p>
                        <p className="nosotros-text-danger-emphasis mb-3">
                            <strong>Productos frescos y de calidad:</strong> Disfruta de productos frescos y de temporada de la mano de comercios locales que apuestan por la calidad y la atención al cliente.
                        </p>
                        <p className="nosotros-text-danger-emphasis mb-3">
                            <strong>Precios competitivos:</strong> Compara precios y encuentra las mejores ofertas en productos de tus tiendas favoritas.
                        </p>
                    </div>
                </div>
            </section>

            <section className="nosotros-footer container text-center">
                <h2>¿Eres un pequeño comerciante?</h2>
                <p>Únete a En tu barrio y da a conocer tu negocio a miles de clientes potenciales.<br />
                Crea tu perfil online de forma gratuita y empieza a vender tus productos desde hoy mismo.</p>
                <a href="/createuser"><h4>¡Regístrate ahora!</h4></a>
                <h6>Juntos, podemos construir un futuro mejor para nuestros barrios.</h6>
                <a className="navbar-brand" href="/">
                    <img src={Logo} alt="Logo" className="nosotros-logo" />
                </a>
            </section>
        </div>
    );
};
