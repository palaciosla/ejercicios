import React from "react";

const Message = ({ msg, bgColor }) => {
  let styles = {
    padding: "1rem",
    marginBottom: "1rem",
    textAlign: "center",
    backgroundColor: bgColor,
    color: "#fff",
    fontWeight: "bold",
  };

  return (
    <h2 style={styles}>
      {msg}
    </h2>
  );
};

export default Message;
