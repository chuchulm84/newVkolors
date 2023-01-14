import React from "react";
import imgInicio from "../../../image/logo02.png";

export const Inicio = () => {
  return (
    <div className='containerInicio'>
      <div style={{ width: "400px", height: "40px" }}>
        <h1>Catálogo de Productos</h1>
      </div>
      <img src={imgInicio} alt='' className='imagenInicio' />
    </div>
  );
};
