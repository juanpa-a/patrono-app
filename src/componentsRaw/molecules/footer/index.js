import React from 'react'

import PropTypes from 'prop-types'

import './footermolecule.css'

const Footermolecule = (props) => {
  return (
    <div className={`footermolecule-footer ${props.rootClassName} `}>
      <span className="footermolecule-body">
        <span className="">
          aude, hospes, contemnere opes et te quoque dignum | finge deo,
          rebusque veni non asper egenis. (Aen. 8. 364-5)
        </span>
      </span>
      <div className="footermolecule-container">
        <div className="footermolecule-container1"></div>
      </div>
      <div className="footermolecule-container2">
        <img
          alt={props.Recurso12150x1_alt1}
          src={props.Recurso12150x1_src1}
          className="footermolecule-recurso12150x1"
        />
        <span className="footermolecule-text1">
          <span className="">Condiciones de uso</span>
        </span>
        <span className="footermolecule-text3">
          <span className="">Política de privacidad</span>
        </span>
        <span className="footermolecule-text5">
          <span className="">
            © 2022 PATRONO. Todos los derechos reservados.
          </span>
        </span>
      </div>
    </div>
  )
}

Footermolecule.defaultProps = {
  rootClassName: '',
  Recurso12150x1_alt1: 'Recurso12150x1I191',
  Recurso12150x1_src1: '/playground_assets/recurso12150x1i191-tsjv-200h.png',
}

Footermolecule.propTypes = {
  rootClassName: PropTypes.string,
  Recurso12150x1_alt1: PropTypes.string,
  Recurso12150x1_src1: PropTypes.string,
}

export default Footermolecule
