import React from 'react'

function StatDateRange() {

    return (

        <>
            
                <div className="row">
                    <div className="col">
                        <h6 className="test_form_title">Fecha Final</h6> 
                        <input className="w-100 datePicker" type="date"/>
                    </div>
                    <div className="col">
                        <h6 className="test_form_title">Fecha Inicial</h6>
                        <input className="w-100 datePicker" type="date"/>
                    </div>
                </div>
                <br/>
            

        </>

    )
}

export default StatDateRange
