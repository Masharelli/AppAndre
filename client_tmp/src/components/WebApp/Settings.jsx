import React from 'react'
import {FaCogs} from 'react-icons/fa'
import Checkbox from '@material-ui/core/Checkbox'
import Select from 'react-select'

function Settings() {

    const [checked, setChecked] = React.useState(false);
    const [checked1, setChecked1] = React.useState(false);
    const [checked2, setChecked2] = React.useState(false);
    const [checked3, setChecked3] = React.useState(false);


    const handleChange = (event) => {
        setChecked(event.target.checked);
        event.target.classList.toggle("checked");
    };
    const handleChange1 = (event) => {
        setChecked1(event.target.checked);
        event.target.classList.toggle("checked");
    };
    const handleChange2 = (event) => {
        setChecked2(event.target.checked);
        event.target.classList.toggle("checked");
    };
    const handleChange3 = (event) => {
        setChecked3(event.target.checked);
        event.target.classList.toggle("checked");
    };

    const formatOptions = [
        { value: 'es', label: 'Español' },
        { value: 'en', label: 'Inglés' }
    ];
    
    const styles = {
        control: (provided) => ({
            ...provided,
            border: "1px solid rgb(243 243 243)",
            borderBottom: "2px solid rgb(243 243 243)",
            backgroundColor: "rgb(248 248 248)",
          }),
          menu: (provided) => ({
            ...provided,
            border: "0px",
            backgroundColor: "rgb(248 248 248)",
          }),
          multiValue: (provided) => ({
            ...provided,
            backgroundColor: "rgb(4 138 212)",
            color: "White",
            marginRight: 10,
            borderRadius: 8,
            padding: "1px 6px",
          }),
          multiValueLabel: (provided) => ({
            ...provided,
            color: "white",
          }),
          multiValueRemove: (provided) => ({
            ...provided,
            ':hover': {
                backgroundColor: "rgb(4 138 212)",
                color: "white",
            },

          }),
        }

    return (
        <div>
            <div className="webapp-card">
                <div className="row my-auto align-items-center">
                    <div className="col-3 col-md-1">
                        <span className="svg-container"><FaCogs className="svg bg-blue white" size={45} /></span>
                    </div>
                    <div className="col"><h2 className="webapp-card-title h-100">Configuracion</h2></div>
                </div>
                <hr/>
                <div className="row px-4 my-1">
                    <div className="col-12 col-md-6 px-5">
                        <h4 className="test_form_title">Cuenta</h4>
                            <div className="row px-3 my-2">
                                <div className="col-12 col-md-6 mb-2">
                                    Correo:
                                </div>
                                <div className="col-12 col-md-6">
                                    <input className="w-100 statform_input" type="text"/>
                                </div>
                            </div>
                            
                            <div className="row px-3 my-2">
                                <div className="col-12 col-md-6 mb-2 my-auto">
                                    Teléfono:
                                </div>
                                <div className="col-12 col-md-6">
                                    <input className="w-100 statform_input" type="text"/>
                                </div>
                            </div>

                            <div className="row px-3 my-2">
                                <div className="col-12 col-md-6  my-auto">
                                    Fecha de Nacimiento:
                                </div>
                                <div className="col-12 col-md-6">
                                    <input className="w-100 datePicker" type="date"/>
                                </div>
                            </div>
                            
                    </div>
                    <div className="col-12 col-md-6 px-5">
                        <h4 className="test_form_title">Lenguaje</h4>
                        
                        <div className="row mx-auto my-2">
                            <Select styles={styles} className="col-md-9 col-12" id="playerAmountSelect" placeholder="Seleccionar" options={formatOptions} />
                        </div>
                    </div>
                </div>
                <div className="row px-4 my-1">
                    <div className="col-12 col-md-6 px-5">
                        <h4 className="test_form_title">Privacidad</h4>
                            <div className="row my-2">
                                <div className="col-5 my-auto text-center">
                                    <p className="checkbox_text">
                                        Perfil Público
                                    </p>
                                </div>
                                <div className="col-5">
                                    <Checkbox
                                        className="checkbox my-auto"
                                        color="default"
                                        checked={checked}
                                        onChange={handleChange}
                                        inputProps={{ 'aria-label': 'primary checkbox' }}
                                    />
                                </div>   
                            </div>
                            <div className="row my-2">
                                <div className="col-5 my-auto text-center">
                                    <p className="checkbox_text">
                                        Contactarme
                                    </p>
                                </div>
                                <div className="col-6">
                                    <Checkbox
                                        className="checkbox my-auto"
                                        color="default"
                                        checked={checked1}
                                        onChange={handleChange1}
                                        inputProps={{ 'aria-label': 'primary checkbox' }}
                                    />
                                </div>   
                            </div>
                            <div className="row my-2">
                                <div className="col-5 my-auto text-center">
                                    <p className="checkbox_text">
                                        Modo Invisible
                                    </p>
                                </div>
                                <div className="col-6">
                                    <Checkbox
                                        className="checkbox my-auto"
                                        color="default"
                                        checked={checked2}
                                        onChange={handleChange2}
                                        inputProps={{ 'aria-label': 'primary checkbox' }}
                                    />
                                </div>   
                            </div>
                        <br/>
                    </div>
                    <div className="col-12 col-md-6 px-5">
                        <h4 className="test_form_title">Suscripción</h4>
                            <div className="row px-3 my-2">
                                <div className="col-12 col-md-6  my-auto">
                                    Fecha de Registro:
                                </div>
                                <div className="col-12 col-md-6">
                                    <input className="w-100 datePicker" type="date"/>
                                </div>
                            </div>
                            <div className="row px-3 my-2">
                                <div className="col-12 col-md-6 mb-2">
                                    Correo:
                                </div>
                                <div className="col-12 col-md-6">
                                    <input className="w-100 statform_input" type="text"/>
                                </div>
                            </div>
                            <div className="row px-3 my-2">
                                <div className="col-12 col-md-6 mb-2">
                                    Tarjeta:
                                </div>
                                <div className="col-12 col-md-6">
                                    <input className="w-100 statform_input" type="number"/>
                                </div>
                            </div>
                            <br/>
                    </div>
                </div>
                <div className="row px-4 my-1">
                    <div className="col-12 col-md-6 px-5">
                    <h4 className="test_form_title">Tema</h4>
                            <div className="row my-2">
                                <div className="col-5 my-auto text-center">
                                    <p className="checkbox_text">
                                        Modo Oscuro
                                    </p>
                                </div>
                                <div className="col-6">
                                    <Checkbox
                                        className="checkbox my-auto"
                                        color="default"
                                        checked={checked3}
                                        onChange={handleChange3}
                                        inputProps={{ 'aria-label': 'primary checkbox' }}
                                    />
                                </div>   
                            </div>
                    </div>
                    <div className="col-12 col-md-6 px-5"></div>
                </div>
                <hr/>
                <div className="row px-4 my-2">
                    <div className="col-12 px-5">
                        <button className="apply_changes_btn">Guardar Cambios</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Settings
