import React from 'react'
import Select from 'react-select'


function CustomSelect() {

    const selectOptions = [
        { value: 'all', label: 'Todos los jugadores' },
        { value: 'select', label: 'Seleccionar Jugadores' }
    ]
    const players = [
        {value: 'Juanito', label: 'Juanito'},
        {value: 'George', label: 'George'},
        {value: 'Alex', label: 'Alex'},
        {value: 'Hugo', label: 'Hugo'},
    ]
    const testOptions = [
        { value: 'all', label: 'Todas las Pruebas' },
        { value: 'select', label: 'Seleccionar Pruebas' }
    ]
    const tests = [
        {value: '1', label: '100 mts'},
        {value: '2', label: 'Lagartijas'},
        {value: '3', label: 'Reps'},
        {value: '4', label: 'Salto Largo'},
    ]
    const handlePlayersChange = (selected) => {
        if(selected === "all"){
            document.getElementById("playerSelect").style.display = "none";
        }else if (selected === "select") {
            document.getElementById("playerSelect").style.display = "block";
        }
    }
    const handleTestsChange = (selected) => {
        if(selected === "all"){
            document.getElementById("testSelect").style.display = "none";
        }else if (selected === "select") {
            document.getElementById("testSelect").style.display = "block";
        }
    }
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
        <div className="w-75 centered">
            <Select styles={styles} className="mt-4 w-100" id="playerAmountSelect" placeholder="Seleccionar" options={selectOptions} onChange={(option) => (handlePlayersChange(option.value))} />
            <div className="mt-3 w-100" id="playerSelect">
                <Select styles={styles} isMulti placeholder="Seleccionar" options={players} noOptionsMessage={()=> "No se encontraron más jugadores"} />
            </div>
            <hr/>
            <Select styles={styles} className="mt-4 w-100" id="testAmountSelect" placeholder="Seleccionar" options={testOptions} onChange={(option) => (handleTestsChange(option.value))} />
            <div className="mt-3 w-100" id="testSelect">
                <Select styles={styles} isMulti placeholder="Seleccionar" options={tests} noOptionsMessage={()=> "No se encontraron más pruebas"} />
            </div>
        </div>
        
    )
}

export default CustomSelect
