import React from 'react'

import PropTypes from 'prop-types'

import './contract-cardorganism.css'

const ContractCardorganism = (props) => {
  return (
    <div className={`contract-cardorganism-container ${props.rootClassName} `}>
      <div className="contract-cardorganism-card">
        <img
          alt={props.Vector5_alt}
          src={props.Vector5_src}
          className="contract-cardorganism-bookmark"
        />
        <img
          alt={props.Recurso3150x1_alt}
          src={props.Recurso3150x1_src}
          className="contract-cardorganism-logo"
        />
        <div className="contract-cardorganism-metadata">
          <span className="contract-cardorganism-date">
            <span className="">A 26 DE NOVIEMBRE 2021</span>
          </span>
          <span className="contract-cardorganism-type">
            <span className="">CONTRATO DE ARRENDAMIENTO VEHICULAR</span>
          </span>
          <span className="contract-cardorganism-end-date">
            <span className="">FINALIZACIÓN DEL CONTRATO: DICIEMBRE 2022</span>
          </span>
        </div>
      </div>
      <div className="contract-cardorganism-container1">
        <img
          alt={props.Ellipse3_alt}
          src={props.Ellipse3_src}
          className="contract-cardorganism-status"
        />
        <span className="contract-cardorganism-name">
          <span className="">Arrendamiento 26 nov...</span>
        </span>
      </div>
    </div>
  )
}

ContractCardorganism.defaultProps = {
  rootClassName: '',
  Ellipse3_src: '/playground_assets/ellipse31782-ejbe-200h.png',
  Vector5_src: '/playground_assets/vector51769-m5k.svg',
  Recurso3150x1_src: '/playground_assets/recurso3150x11781-c4kc-200h.png',
  Vector5_alt: 'Vector51769',
  Ellipse3_alt: 'Ellipse31782',
  Recurso3150x1_alt: 'Recurso3150x11781',
}

ContractCardorganism.propTypes = {
  rootClassName: PropTypes.string,
  Ellipse3_src: PropTypes.string,
  Vector5_src: PropTypes.string,
  Recurso3150x1_src: PropTypes.string,
  Vector5_alt: PropTypes.string,
  Ellipse3_alt: PropTypes.string,
  Recurso3150x1_alt: PropTypes.string,
}

export default ContractCardorganism
