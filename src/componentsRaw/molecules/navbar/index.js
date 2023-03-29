import React from 'react'

import PropTypes from 'prop-types'

import './navbarmolecule.css'

const Navbarmolecule = (props) => {
  return (
    <div className={`navbarmolecule-menu ${props.rootClassName} `}>
      <div className="navbarmolecule-container">
        <span className="nav-item">MENU</span>
        <span className="nav-item">CONTACTO</span>
        <span className="nav-item">NOSOTROS</span>
      </div>
      <img
        alt="logo de patrono"
        src="/playground_assets/recurso5150x11100-ras3-200h.png"
        className="navbarmolecule-navbar-logo"
      />
      <div className="navbarmolecule-wrapper">
        <span className="nav-item">EXPLORAR</span>
        <span className="nav-item">INGRESAR</span>
      </div>
    </div>
  )
}

Navbarmolecule.defaultProps = {
  rootClassName: '',
  navabar: '',
}

Navbarmolecule.propTypes = {
  rootClassName: PropTypes.string,
  navabar: PropTypes.string,
}

export default Navbarmolecule
