import React, { useState } from "react";

const initialForm = {
  artist: "",
  song: "",
};

const SongForm = ({ handleSearch }) => {
  const [form, setForm] = useState(initialForm);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.artist || !form.song) {
      alert("Debes llenar el formulario!");
      return;
    }

    handleSearch(form);
    setForm(initialForm)
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="song-form">
        <input
          type="text"
          name="artist"
          placeholder="Nombre del Interprete"
          onChange={handleChange}
          value={form.artist}
        />
        <input
          type="text"
          name="song"
          placeholder="Nombre de la canción"
          onChange={handleChange}
          value={form.song}
        />
        <input type="submit" value="Buscar" className="btn" />
      </form>
    </div>
  );
};

export default SongForm;
