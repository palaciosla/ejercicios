import React from "react";
import CrudTableRow from "./CrudTableRow";

const CrudTable = ({ data, deleteData, setDataToEdit }) => {
  return (
    <div>
      <h3>Tabla de Datos</h3>
      <table>
        <thead>
          {data.length === 0 ? (
            <tr></tr>
          ) : (
            <tr>
              <th>Nombre</th>
              <th>Color</th>
              <th>Acciones</th>
            </tr>
          )}
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((element) => (
              <CrudTableRow
                key={element.id}
                element={element}
                deleteData={deleteData}
                setDataToEdit={setDataToEdit}
              />
            ))
          ) : (
            <tr>
              <td colSpan="3">Sin datos</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default CrudTable;
