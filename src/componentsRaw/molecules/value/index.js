import React from 'react'

import PropTypes from 'prop-types'

import './valuemolecule.css'

const Valuemolecule = (props) => {
  return (
    <div className={`valuemolecule-container ${props.rootClassName} `}>
      <span className="valuemolecule-text">{props.header}</span>
      <span className="valuemolecule-text1">{props.description}</span>
    </div>
  )
}

Valuemolecule.defaultProps = {
  description: '{{description}}',
  rootClassName: '',
  header: '{{header}}',
}

Valuemolecule.propTypes = {
  description: PropTypes.string,
  rootClassName: PropTypes.string,
  header: PropTypes.string,
}

export default Valuemolecule
