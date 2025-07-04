import React from "react";
import { cloneElement } from "react";
import { useImperativeHandle } from "react";
import { forwardRef } from "react";
import { useState } from "react";

const Overlay = forwardRef(({ children }, ref) => {
  const [visible, setVisible] = useState(0);
  const [content, setContent] = useState(children);

  useImperativeHandle(ref, () => ({
    show: () => setVisible(1),
    showContent: (content) => {
      setContent(content);
      setVisible(1);
    },
    showModel: (Model) => {
      // console.log(Model.props);
      setContent(
        cloneElement(Model, {
          ...Model.props,
          onClose: () => setVisible(0),
        })
      );
      setVisible(1);
    },
  }));

  return (
    <div
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.20)",
        position: "fixed",
        top:0,
        left: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
        opacity: visible,
        transitionDuration: "0.2s",
        pointerEvents: visible ? "auto" : "none",
        zIndex: 1
      }}
    >
      {content}
    </div>
  );
});

export default Overlay;
