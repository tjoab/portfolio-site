import React from "react";
import "./styles/Canvas.css";

function Canvas() {
  return (
    <div className="canvas">
      <div className="anim1"></div>
      <div className="anim2"></div>
      <div className="anim3"></div>
      <div className="anim4"></div>
      <div className="anim5"></div>
      <div className="canvas-holder">
        <canvas id="canvas" width={32} height={32}></canvas>
        <div className="mask"></div>
      </div>
    </div>
  );
}

export default Canvas;
