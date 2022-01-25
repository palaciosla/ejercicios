import React, { useState } from "react";
import SelectList from "./SelectList";

const SelectsAnidados = () => {
  const [state, setState] = useState("");
  const [town, setTown] = useState("");
  const [suburb, setSuburb] = useState("");

  const TOKEN = "364f5808-111f-4add-a785-7b9fa138f311";

  return (
    <div>
      <h2>Selects Anidados</h2>
      <h3>México</h3>
      <div class="selects">
        <SelectList
          title="estado"
          url={`https://api.copomex.com/query/get_estados?token=${TOKEN}`}
          handleChange={(e) => {
            setState(e.target.value);
          }}
        />
        {state && (
          <SelectList
            title="municipios"
            url={`https://api.copomex.com/query/get_municipio_por_estado/${state}?token=${TOKEN}`}
            handleChange={(e) => {
              setTown(e.target.value);
            }}
          />
        )}
        {town && (
          <SelectList
            title="colonia"
            url={`https://api.copomex.com/query/get_colonia_por_municipio/${town}?token=${TOKEN}`}
            handleChange={(e) => {
              setSuburb(e.target.value);
            }}
          />
        )}
      </div>

      <pre>
        <code>
          Estado: {state}
          <br />
          Municipio: {town}
          <br/> 
          Colonia: {suburb}
        </code>
      </pre>
    </div>
  );
};

export default SelectsAnidados;
