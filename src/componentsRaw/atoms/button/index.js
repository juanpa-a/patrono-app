import React from 'react'

import PropTypes from 'prop-types'

import './buttonatom.css'

const Buttonatom = (props) => {
  return (
    <div className={`buttonatom-container button ${props.rootClassName} `}>
      <span className="buttonatom-text">
        <span className="">{props.text}</span>
      </span>
    </div>
  )
}

Buttonatom.defaultProps = {
  rootClassName: '',
  text: '{{text}}',
}

Buttonatom.propTypes = {
  rootClassName: PropTypes.string,
  text: PropTypes.string,
}

export default Buttonatom
