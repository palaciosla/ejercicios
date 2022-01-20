import React, { useState } from "react";
import CrudForm from "./CrudForm";
import CrudTable from "./CrudTable";



const CrudApi = () => {
  const [db, setDb] = useState([]);
  const [dataToEdit, setDataToEdit] = useState(null);

  const createData = (data) => {
    data.id = Date.now();
    setDb([...db, data]);
  };

  const updateData = (data) => {
    let newData = db.map((el) => (el.id === data.id ? data : el));
    // console.log(newData)
    setDb(newData);
  };

  const deleteData = (id, name) => {
    let isDelete = window.confirm(`¿Estás seguro de eliminar "${name}"?`);

    if (isDelete) setDb(db.filter((item) => item.id !== id));
  };

  return (
    <div>
      <h2>CRUD API-FAKE</h2>
      <article className="grid-1-2">
        <CrudForm
          createData={createData}
          updateData={updateData}
          dataToEdit={dataToEdit}
          setDataToEdit={setDataToEdit}
        />
        <CrudTable
          data={db}
          setDataToEdit={setDataToEdit}
          deleteData={deleteData}
        />
      </article>
    </div>
  );
};

export default CrudApi;

