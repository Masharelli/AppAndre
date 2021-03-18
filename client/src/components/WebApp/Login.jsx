import React from 'react'
import {Link} from 'react-router-dom'
import {useDispatch} from 'react-redux';

function Login() {

    /*
    const dispatch = useDispatch();


    const handleSubmit = (e) => {

        e.preventDefault();

        dispatch(createUser(postData));
    }
    */
    return (
        
        <div className="container-fluid w-100 h-75 login-BG  d-flex">

            <div className="admin-card align-self-center">
                <h1 className="centered colorB font-weight-bolder" >Login</h1>
                <br/>
                <form action="/auth/login" method="POST">
                    <div className="row input-row">
                        <input type="email" id="email" name="email" className="contact-form-input centered" placeholder="Correo"/>
                    </div>
                    <br/>
                    <div className="row input-row">
                        <input type="password" id="password" name="password" className="contact-form-input centered" placeholder="Contraseña"/>
                    </div>
                    <br/>
                    <div className="row input-row">
                        <button type="submit" className="centered contact-button">Ingresar</button>
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
