import React, { useState } from 'react';
import {Button, Typography, Paper} from '@material-ui/core';
import {useDispatch} from 'react-redux';
import {createUser} from '../../actions/users.js'

function Register() {
    const [postData, setPostData] = useState({ name: '', lastname: '', email: '', username: '', password: '', img: '' });

    const dispatch = useDispatch();


    const handleSubmit = (e) => {

        e.preventDefault();

        dispatch(createUser(postData));
    }
    return (
<div className="container-fluid w-100 h-75 login-BG  d-flex">
            <div className="admin-card align-self-center p-3">
                <h1 className="centered colorB font-weight-bolder" >Crear una Cuenta</h1>
                <br/>
                {/*
                <form action="">
                    <div className="row input-row">
                        <div className="col">
                            <input type="text" className="register-form-input centered w-100" placeholder="Nombre"/>
                        </div>
                        <div className="col">
                            <input type="text" className="register-form-input centered w-100" placeholder="Apellido"/>
                        </div>
                    </div>
                    <div className="row input-row">
                        <div className="col">
                            <input type="text" className="register-form-input centered w-100" placeholder="Correo Electrónico"/>
                        </div>
                    </div>
                    <div className="row input-row">
                        <div className="col">
                            <input type="text" className="register-form-input centered w-100" placeholder="Nombre de Usuario"/>
                        </div>
                        <div className="col">
                            <input type="date" className="register-form-input centered w-100" placeholder="Fecha de Nacimiento"/>
                        </div>
                    </div>
                    <div className="row input-row">
                        <div className="col">
                            <input type="text" className="register-form-input centered w-100" placeholder="Nacionalidad"/>
                        </div>
                        <div className="col">
                            <input type="text" className="register-form-input centered w-100" placeholder="País de Residencia"/>
                        </div>
                    </div>
                    <div className="row input-row">
                        <div className="col">
                            <input type="text" className="register-form-input centered w-100" placeholder="Contraseña"/>
                        </div>
                        <div className="col">
                            <input type="text" className="register-form-input centered w-100" placeholder="Confirmar Contraseña"/>
                        </div>
                    </div>

                    <hr className=""/>

                    <div className="row">
                        <Link className="register-link contact-button centered" to="/welcome">Registrarme</Link>
                    </div>
                   
                </form>
                */}
                <Paper>
                    <form autoComplete="off" noValidate onSubmit={handleSubmit} >
                        <Typography variant="h6">Registro de Usuario</Typography>
                        <input type="text" name="name" variant="outlined" placeholder="Nombre"  value={postData.name} onChange={(e)=> setPostData({ ...postData, name: e.target.value})}/>
                        <input type="text" name="lastname" variant="outlined" placeholder="Apellido"  value={postData.lastname} onChange={(e)=> setPostData({ ...postData, lastname: e.target.value})}/>
                        <input type="text" name="email" variant="outlined" placeholder="Correo"  value={postData.email} onChange={(e)=> setPostData({ ...postData, email: e.target.value})}/>
                        <input type="text" name="username" variant="outlined" placeholder="Nombre de Usuario"  value={postData.username} onChange={(e)=> setPostData({ ...postData, username: e.target.value})}/>
                        <input name="password" type="password" variant="outlined" placeholder="Contraseña"  value={postData.password} onChange={(e)=> setPostData({ ...postData, password: e.target.value})}/>
                        {/*
                            Input para imagen
                            <FileBase 
                                type="file" 
                                name="img"
                                multiple={false}  
                                onDone={({base64}) => setPostData({...postData, img: base64 })}    
                            />
                        */}

                        <Button className="contact-button centered" size="large" type="submit">Registrarme</Button>
                    </form>
                </Paper>
            </div>
        </div>
    )
}

export default Register
