import React from 'react'

import PropTypes from 'prop-types'

import './directorymolecule.css'

const Directorymolecule = (props) => {
  return (
    <div className={`directorymolecule-container ${props.rootClassName} `}>
      <div className="directorymolecule-container1">
        <span className="directorymolecule-text">{props.header}</span>
        <span className="directorymolecule-text1">{props.names}</span>
      </div>
    </div>
  )
}

Directorymolecule.defaultProps = {
  rootClassName: '',
  header: 'DIRECTORIO',
  names: '- Alberto Rojas',
}

Directorymolecule.propTypes = {
  rootClassName: PropTypes.string,
  header: PropTypes.string,
  names: PropTypes.string,
}

export default Directorymolecule
