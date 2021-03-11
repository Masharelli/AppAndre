import React from 'react'
import {Link} from 'react-router-dom'

function Login() {


    return (
        
        <div className="container-fluid w-100 h-75 login-BG  d-flex">

            <div className="admin-card align-self-center">
                <h1 className="centered colorB font-weight-bolder" >Login</h1>
                <br/>
                <form action="">
                    <div className="row input-row">
                        <input id="userName" type="text" className="contact-form-input centered" placeholder="Usuario"/>
                    </div>
                    <br/>
                    <div className="row input-row">
                        <input type="text" className="contact-form-input centered" placeholder="Contraseña"/>
                    </div>
                    <br/>
                    <div className="row input-row">
                        <Link className="centered contact-button" to="/dashboard">Ingresar</Link>
                    </div>
                    <hr className="login-spacing"/>
                    <div className="row">
                        <a className="login-link centered" href="/">Olvidé mi contraseña</a>
                    </div>
                    <div className="row">
                        <Link className="login-link centered" to="/register">Registrarme</Link>
                    </div>
                   
                </form>
            </div>
        </div>
    )
}

export default Login
