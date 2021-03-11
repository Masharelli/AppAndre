import React from 'react'
import {FaChartArea} from 'react-icons/fa'
import Selector from './webapp-components/CustomSelect'
import DateSelector from './webapp-components/StatDateRange'
import Checkbox from '@material-ui/core/Checkbox'
import Select from 'react-select'

function Statistics() {

    const [checked, setChecked] = React.useState(false);
    const [checked1, setChecked1] = React.useState(false);
    const [checked2, setChecked2] = React.useState(false);
    const [checked3, setChecked3] = React.useState(false);
    const [checked4, setChecked4] = React.useState(false);

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
    const handleChange4 = (event) => {
        setChecked4(event.target.checked);
        event.target.classList.toggle("checked");
    };

    const formatOptions = [
        { value: 'pdf', label: 'PDF' },
        { value: 'csv', label: 'CSV' }
    ]
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
        <div className="pt-4">
            <div className="webapp-card px-3">
                <div className="row my-auto align-items-center">
                    <div className="col-3 col-md-1">
                        <span className="svg-container"><FaChartArea className="svg bg-blue white" size={45} /></span>
                    </div>  
                    <div className="col"><h2 className="webapp-card-title h-100">Estadísticas</h2></div>
                </div>
                <hr/>
                <form action="" className="my-4">
                    <div className="row mb-4 px-4">
                        <div className="col-12">
                            <h3 className="test_form_title">Criterios de Análisis</h3>
                        </div>
                        <div className="col-12 col-md-7 ">
                            <div className="centered">
                                <div className="row">
                                    <div className="col-12 col-md-6 my-2">
                                        <div className="row">
                                            <div className="col-12 col-md-4 mb-2">
                                                Deporte:
                                            </div>
                                            <div className="col-12 col-md-8">
                                                <input className="w-100 statform_input" type="text"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6 my-2">
                                        <div className="row">
                                            <div className="col-12 col-md-4 mb-2">
                                                Posición:
                                            </div>
                                            <div className="col-12 col-md-8">
                                                <input className="w-100 statform_input" type="text"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row mt-2">
                                    <div className="col-12 col-md-6 my-2">
                                        <div className="row">
                                            <div className="col-4">
                                                Equipo:
                                            </div>
                                            <div className="col-8">
                                                <input className="w-100 statform_input" type="text"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6 my-2">
                                        <div className="row">
                                            <div className="col-5">
                                                Categoría:
                                            </div>
                                            <div className="col-7">
                                                <input className="w-100 statform_input" type="text"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="row mt-2">
                                    <Selector />
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-5">
                            <div className="w-100 centered">
                                <DateSelector />
                                <div className="row">  
                                    <div className="col">
                                        <h6 className="test_form_title">Información Adicional</h6>
                                    </div>
                                </div>
                                <br/>
                                <div className="row">
                                    <div className="col-6 text-center">
                                        <p>
                                            Tiempo Promedio
                                        </p>
                                    </div>
                                    <div className="col-6 text-center">
                                        <Checkbox
                                            className="checkbox"
                                            color="default"
                                            checked={checked}
                                            onChange={handleChange}
                                            inputProps={{ 'aria-label': 'primary checkbox' }}
                                        />
                                    </div>   
                                </div>
                                <div className="row">
                                    <div className="col-6 text-center">
                                        <p>
                                            Tiempo más Alto
                                        </p>
                                    </div>
                                    <div className="col-6 text-center">
                                        <Checkbox
                                            className="checkbox"
                                            color="default"
                                            checked={checked1}
                                            onChange={handleChange1}
                                            inputProps={{ 'aria-label': 'primary checkbox' }}
                                        />
                                    </div>   
                                </div>
                                <div className="row">
                                    <div className="col-6 text-center">
                                        <p>
                                            Tiempo más Bajo
                                        </p>
                                    </div>
                                    <div className="col-6 text-center">
                                        <Checkbox
                                            className="checkbox"
                                            color="default"
                                            checked={checked2}
                                            onChange={handleChange2}
                                            inputProps={{ 'aria-label': 'primary checkbox' }}
                                        />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-6 text-center">
                                        <p>
                                            Comparar con Promedio
                                        </p>
                                    </div>
                                    <div className="col-6 text-center">
                                        <Checkbox
                                            className="checkbox"
                                            color="default"
                                            checked={checked3}
                                            onChange={handleChange3}
                                            inputProps={{ 'aria-label': 'primary checkbox' }}
                                        />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-6 text-center">
                                        <p>
                                            Incluir Gráficas
                                        </p>
                                    </div>
                                    <div className="col-6 text-center">
                                        <Checkbox
                                            className="checkbox"
                                            color="default"
                                            checked={checked4}
                                            onChange={handleChange4}
                                            inputProps={{ 'aria-label': 'primary checkbox' }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr/>
                    <div className="row mx-0">
                        <div className="col w-100 centered  mt-3">
                            <h6 className="test_form_title centered mb-2">
                                Formato
                            </h6>
                            <div className="row mx-auto">
                                <Select styles={styles} className="col-md-2 col-10 centered" id="playerAmountSelect" placeholder="Seleccionar" options={formatOptions} />
                            </div>
                            <br/>
                            <div className="row mx-auto">
                                <button className="col-md-3 col-10 mx-auto stat_gen_btn">Generar Estadísticas</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Statistics
