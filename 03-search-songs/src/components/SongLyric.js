import React from "react";

const SongLyric = ({ lyric }) => {
  console.log(lyric);
  return (
    <div>
      <h2>Letra de la Canción</h2>
      {<p>${lyric.lyrics}</p>}
    </div>
  );
};

export default SongLyric;
