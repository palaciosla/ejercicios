import React from "react";

const SongArtist = ({ bio }) => {
  let [artist] = bio;
  
  return (
    <div className="artist">
      <h3 className="artist-title">{artist.strArtist}</h3>
      <img src={artist.strArtistThumb} alt={artist.strArtist} />
      <div className="info-artist">
        <h4>Nacimiento: <span>"{artist.intBornYear || "Sin datos"}"</span></h4>
        <h4>Pais: <span>"{artist.strCountry}"</span></h4>
        <h4>Genero: <span>"{artist.strGenre}"</span></h4>
        <a href={artist.strWebsite} target="_blank" rel="noreferrer" >Sitio Oficial</a>
      </div>
      <p>{artist.strBiographyES}</p>
    </div>
  );
};

export default SongArtist;
