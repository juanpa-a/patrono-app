import React from 'react'

import style from "./style.module.css";

const Sidebarmolecule = (props) => {
  return (
    <div className={`sidebarmolecule-container ${props.rootClassName} `}>
      <div className="sidebarmolecule-container1">
        <div className="sidebarmolecule-container2">
          <img
            alt={props.IMAGE1150x_alt1}
            src={props.IMAGE1150x_src1}
            className="sidebarmolecule-i-m-a-g-e1150x"
          />
          <span className="sidebarmolecule-text">ESCRITORIO</span>
        </div>
        <div className="sidebarmolecule-container3">
          <img
            alt={props.IMAGE2150x_alt}
            src={props.IMAGE2150x_src}
            className="sidebarmolecule-i-m-a-g-e2150x"
          />
          <span className="sidebarmolecule-text1">ARCHIVO</span>
        </div>
        <div className="sidebarmolecule-container4">
          <img
            alt={props.IMAGE3150x_alt1}
            src={props.IMAGE3150x_src1}
            className="sidebarmolecule-i-m-a-g-e3150x"
          />
          <span className="sidebarmolecule-text2">OBSERVATORIO</span>
        </div>
      </div>
    </div>
  )
}

export default Sidebarmolecule
