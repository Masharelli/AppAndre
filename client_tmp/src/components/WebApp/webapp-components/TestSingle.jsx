import React from 'react'
import {FaTachometerAlt} from 'react-icons/fa'
import TestImg from '../../../assets/img/TestImg.png'
import Chart from './StatChart'
import Table from './MatTable'
function TestSingle() {
    return (
        <div className="webapp-card">
            <div className="row my-auto align-items-center">
                <div className="col-3 col-md-1">
                    <span className="svg-container"><FaTachometerAlt className="svg bg-blue white" size={45} /></span>
                </div>
                <div className="col"><h2 className="webapp-card-title h-100">Nombre de Prueba</h2></div>
                
            </div>
            <hr/>
            <div className="row">
                <div className="col-4">
                    <img className="img" src={TestImg} alt=""/>
                    <br/>
                    <br/>
                    <h3>Descripción</h3>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat diam vitae feugiat lacus fringilla aliquam penatibus cras.
                </div>
                <div className="col-4">
                    <Table className="h-100"/ >
                </div>
                <div className="col-4 justify-content-center">
                    
                        <button className="elim-test">Eliminar Prueba</button>
                        <br/>
                        de-hasta
                        <br/>
                        <Chart chartname="chart two" />
                        <br/>
                        <textarea className="p-3 ml-2 mr-2 w-100" name="" id="" cols="100" rows="5" placeholder="Comentarios"></textarea>
                    
                </div>
            </div>
            <hr/>
        </div>
    )
}

export default TestSingle
