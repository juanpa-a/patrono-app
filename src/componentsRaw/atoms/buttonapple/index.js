import React from 'react'

import PropTypes from 'prop-types'

import './buttonappleatom.css'

const Buttonappleatom = (props) => {
  return (
    <div className={`buttonappleatom-container button ${props.rootClassName} `}>
      <span className="buttonappleatom-text">
        <span className="">{props.text}</span>
      </span>
    </div>
  )
}

Buttonappleatom.defaultProps = {
  text: '{{text}}',
  rootClassName: '',
}

Buttonappleatom.propTypes = {
  text: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Buttonappleatom
