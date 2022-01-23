import React from "react";

const SongLyric = ({ lyrics, title }) => {
  return (
    <div className="lyric">
      <h3 className="lyric-title">{title}</h3>
      <blockquote style={{whiteSpace: "pre-wrap"}}>{lyrics}</blockquote>
    </div>
  );
};

export default SongLyric;
