import React from "react";

const CrudTableRow = ({ element, deleteData, setDataToEdit }) => {
    let {name, color, id} = element

  return (
    <tr>
      <td>{name}</td>
      <td>{color}</td>
      <td>
        <button onClick={() => setDataToEdit(element)}>Editar</button>
        <button onClick={() => deleteData(id, name)} className="btn-delete">Eliminar</button>
      </td>
    </tr>
  );
};

export default CrudTableRow;
