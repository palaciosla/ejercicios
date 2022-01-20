import React, { useState } from "react";
import CrudForm from "./CrudForm";
import CrudTable from "./CrudTable";

const initialDB = [
  {
    id: 1,
    name: "Chichi",
    color: "Marrón",
  },
  {
    id: 2,
    name: "León",
    color: "Negro",
  },
  {
    id: 3,
    name: "Jenni",
    color: "Marrón",
  },
  {
    id: 4,
    name: "Tutuca",
    color: "Marrón",
  },
  {
    id: 5,
    name: "Negrito",
    color: "Negro",
  },
];

const CrudApp = () => {
  const [db, setDb] = useState(initialDB);
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
      <h2>CRUD APP</h2>
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

export default CrudApp;
