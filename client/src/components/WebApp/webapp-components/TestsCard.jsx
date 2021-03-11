import React from 'react';
import {FaTachometerAlt} from 'react-icons/fa';
import {Link} from 'react-router-dom';
import TestImg from '../../../assets/img/TestImg.png';

function TestsCard() {
    
    return (
        <div className="webapp-card">
            <div className="row my-auto align-items-center">
                <div className="col-3 col-md-1">
                    <span className="svg-container"><FaTachometerAlt className="svg bg-blue white" size={45} /></span>
                </div>
                <div className="col"><h2 className="webapp-card-title h-100">Tus Pruebas</h2></div>
                
            </div>
            <hr/>
            <div className="container-fluid">
                <div className="row my-3">
                    <div className="col-12 col-md-4"> <strong> <h4>Pruebas Requeridas: </h4></strong></div>
                    <div className="col-12 col-md-7">
                        <div className="container">
                            <div className="row">
                                <div className="col-12 col-md">Nombre de Prueba</div>
                                <div className="col-12 col-md">Nombre de Prueba</div>
                                <div className="col-12 col-md">Nombre de Prueba</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row my-3">
                    <div className="col-12 col-md-3"> <strong><p>Buscar Prueba por Nombre: </p></strong> </div>
                    <div className="col-12 col-md-3">
                        <input className="search-test" type="text" placeholder="Nombre de Prueba"/>
                    </div>
                    <div className="col-12 col-md-3 offset-3">
                        <Link className="search-button py-1 px-3" to="/register-test">Registrar Prueba</Link>
                    </div>
                </div>
                <hr/>
                <div className="row">
                    <div className="col-12 col-md-6 my-3">
                        <div className="container p-0">
                            <div className="row">
                                <div className="col p-0">
                                    <img className="testimg" src={TestImg} alt=""/>
                                </div>
                                <div className="col">
                                    <h5>Nombre de Prueba</h5>
                                    <p>Última Fecha: XX/XX/XXXX</p>
                                    <p>Último Tiempo: --:--</p>
                                    <p>Mejor Tiempo: --:--</p>
                                    <p>Certificada: ? </p>
                                    <Link className="search-button p-1" to="/test">Ver Prueba</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 my-3">
                        <div className="container p-0">
                            <div className="row">
                                <div className="col p-0">
                                    <img className="testimg" src={TestImg} alt=""/>
                                </div>
                                <div className="col">
                                    <h5>Nombre de Prueba</h5>
                                    <p>Última Fecha: XX/XX/XXXX</p>
                                    <p>Último Tiempo: --:--</p>
                                    <p>Mejor Tiempo: --:--</p>
                                    <p>Certificada: ? </p>
                                    <Link className="search-button p-1" to="/test">Ver Prueba</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 my-3">
                        <div className="container p-0">
                            <div className="row">
                                <div className="col p-0">
                                    <img className="testimg" src={TestImg} alt=""/>
                                </div>
                                <div className="col">
                                    <h5>Nombre de Prueba</h5>
                                    <p>Última Fecha: XX/XX/XXXX</p>
                                    <p>Último Tiempo: --:--</p>
                                    <p>Mejor Tiempo: --:--</p>
                                    <p>Certificada: ?</p>
                                    <Link className="search-button p-1" to="/test">Ver Prueba</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 my-3">
                        <div className="container p-0">
                            <div className="row">
                                <div className="col p-0">
                                    <img className="testimg" src={TestImg} alt=""/>
                                </div>
                                <div className="col">
                                    <h5>Nombre de Prueba</h5>
                                    <p>Última Fecha: XX/XX/XXXX</p>
                                    <p>Último Tiempo: --:--</p>
                                    <p>Mejor Tiempo: --:--</p>
                                    <p>Certificada: ? </p>
                                    <Link className="search-button p-1" to="/test">Ver Prueba</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default TestsCard
