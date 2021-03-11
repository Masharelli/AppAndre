import React from 'react'
import {FaTachometerAlt, FaUpload} from 'react-icons/fa'

function RegisterTest() {
    return (
        <div className="webapp-card">
            <div className="row my-auto align-items-center">
                <div className="col-3 col-md-1">
                    <span className="svg-container"><FaTachometerAlt className="svg bg-blue white" size={45} /></span>
                </div>
                <div className="col"><h2 className="webapp-card-title h-100">Registrar Prueba</h2></div>
                
            </div>
            <hr/>
            <form action="">
                <div className="row pt-4 pb-4">
                    
                        <div className="col-12 col-md-4 offset-md-2">
                            <label htmlFor="test_img" className="img_selector">
                                <FaUpload className="input_icon" size={30} />
                                <p >Elegir/Arrastrar Imagen</p>
                                <input id="test_img" className="test_img_input"  height="100px" type="file" />
                            </label>
                            
                        </div>
                        <div className="col-12 col-md-6">
                                <div className="centered w-75">
                                    <h5 className="test_form_title">Información Requerida</h5>
                                    <label htmlFor="testname">Nombre de Prueba</label>
                                    <br/>
                                    <input id="testname" type="text" className="test_form_input" name="name" variant="outlined" placeholder="" />
                                    <br/>
                                    <label htmlFor="test_type">
                                    Tipo de Prueba
                                    </label>
                                    <br/>
                                    <input id="test_type" type="text" className="test_form_input" name="name" variant="outlined" placeholder="" />                            
                                    <br/>
                                  
                                    <label htmlFor="description"> Descripción </label>
                                    <br/>
                                    <textarea id="description" type="text" className="test_form_input description" name="name" variant="outlined" placeholder="" /> 
                                    <br/>
                                    <br/>
                                    <button className="register_btn">Registrar Prueba</button>
                                </div>
                        </div>
                
                </div>
            </form>
            <hr/>
        </div>
    )
}

export default RegisterTest
