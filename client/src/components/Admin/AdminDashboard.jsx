import React from 'react'
import { FaUsers } from 'react-icons/fa'
function AdminDashboard() {
    return (
        <div className="pt-4">
            <div className="webapp-card px-3">
            <div className="row my-auto align-items-center">
                    <div className="col-3 col-md-1">
                        <span className="svg-container"><FaUsers className="svg bg-blue white" size={45} /></span>
                    </div>  
                    <div className="col"><h2 className="webapp-card-title h-100">Nuevos Usuarios</h2></div>
                </div>
                <hr/>
            </div>
        </div>
    )
}

export default AdminDashboard
