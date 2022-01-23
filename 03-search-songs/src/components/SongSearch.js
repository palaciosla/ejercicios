import React, { useState, useEffect } from "react";
import SongDetails from "./SongDetails";
import SongForm from "./SongForm";
import Loader from "./Loader";
import { helpHTTP } from "../helpers/helpHTTP";

const SongSearch = () => {
  const [search, setSearch] = useState(null);
  const [lyric, setLyric] = useState(null);
  const [bio, setBio] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (search === null) return;

    const fetchData = async () => {
      const { artist, song } = search;

      let artistURL = `https://www.theaudiodb.com/api/v1/json/2/search.php?s=${artist}`;
      let songURL = `https://api.lyrics.ovh/v1/${artist}/${song}`;

      setLoading(true);

      const [artistRes, songRes] = await Promise.all([
        helpHTTP().get(artistURL),
        helpHTTP().get(songURL),
      ]);

      setBio(artistRes);
      setLyric(songRes);
      setLoading(false);
    };

    fetchData();
  }, [search]);

  const handleSearch = (data) => {
    setSearch(data);
  };

  return (
    <div>
      <h1 className="titulo-principal">Buscador de Canciones y Artistas</h1>
      <div class="contenedor">
        <SongForm handleSearch={handleSearch} />
        {loading && <Loader />}
        {search && !loading && (
          <SongDetails search={search} lyric={lyric} bio={bio} />
        )}
      </div>
    </div>
  );
};

export default SongSearch;
