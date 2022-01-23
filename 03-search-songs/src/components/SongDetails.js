import React from "react";
import SongArtist from "./SongArtist";
import SongLyric from "./SongLyric";
import Message from "./Message";

const SongDetails = ({ search, lyric, bio }) => {
  if (!lyric || !bio) return null;

  return (
    <div className="song-details">
      {lyric.error || lyric.err || lyric.name === "AbortError" ? (
        <Message
          msg={`Error: no existe la canción "${search.song}"`}
          bgColor="#dc3545"
        />
      ) : (
        <SongLyric title={search.song} lyrics={lyric.lyrics} />
      )}

      {bio.artists ? (
        <SongArtist bio={bio.artists} />
      ) : (
        <Message
          msg={`Error: no existe el artista o grupo "${search.artist}"`}
          bgColor="#dc3545"
        />
      )}
    </div>
  );
};

export default SongDetails;
