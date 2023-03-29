import React from 'react'

import PropTypes from 'prop-types'

import Buttonatom from './buttonatom'
import './infomolecule.css'

const Infomolecule = (props) => {
  return (
    <div className={`infomolecule-container ${props.rootClassName} `}>
      <span className="infomolecule-header">{props.header}</span>
      <span className="infomolecule-description">{props.description}</span>
      <Buttonatom
        rootClassName="buttonatom-root-class-name"
        className=""
      ></Buttonatom>
    </div>
  )
}

Infomolecule.defaultProps = {
  rootClassName: '',
  header: '{{header}}',
  description: '{{description}}',
}

Infomolecule.propTypes = {
  rootClassName: PropTypes.string,
  header: PropTypes.string,
  description: PropTypes.string,
}

export default Infomolecule
