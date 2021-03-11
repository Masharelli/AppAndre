import React from 'react';
import MaterialTable from "material-table"

const MatTable = () => {
    
        const data = [
            { name: "John", email: "john@gmail.com"},
            { name: "Bren", email: "bren@gmail.com" },
            { name: "Marry", email: "marry@gmail.com"},
            { name: "Shohail", email: "shohail@gmail.com" },
            { name: "Aseka", email: "aseka@gmail.com" },
            { name: "Meuko", email: "meuko@gmail.com" },
        ];
      const columns = [
        {
          title: "Fecha",
          field: "date",
        },
        {
          title: "Tiempo Total",
          field: "time",
        },
      ];
    return (
        <MaterialTable title="Reporte" data={data} columns={columns} 
         localization={{
            toolbar: {
                searchPlaceholder: 'your string',
                exportCSVName: 'Exportar a CSV',
                exportPDFName: 'Exportar como PDF',
                exportTitle: 'Exportar'
            }
        }}
        options={{ 
            search: false, 
            paging: false, 
            filtering: false,
            exportButton: true 
        }}   
        />
    );
}

export default MatTable;
