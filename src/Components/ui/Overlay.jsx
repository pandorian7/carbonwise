import React from "react";

function Overlay({ children }) {
  return (
    <div
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.20)",
        position: "fixed",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw"
      }}
    >
      {children}
    </div>
  );
}

export default Overlay;
