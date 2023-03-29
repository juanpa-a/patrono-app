import React from 'react'

import PropTypes from 'prop-types'

import './buttongoogleatom.css'

const Buttongoogleatom = (props) => {
  return (
    <div
      className={`buttongoogleatom-container button ${props.rootClassName} `}
    >
      <span className="buttongoogleatom-text">
        <span className="">{props.text}</span>
      </span>
    </div>
  )
}

Buttongoogleatom.defaultProps = {
  rootClassName: '',
  text: '{{text}}',
}

Buttongoogleatom.propTypes = {
  rootClassName: PropTypes.string,
  text: PropTypes.string,
}

export default Buttongoogleatom
