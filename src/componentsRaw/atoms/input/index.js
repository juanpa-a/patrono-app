import React from 'react'

import PropTypes from 'prop-types'

import './inputatom.css'

const Inputatom = (props) => {
  return (
    <div className={`inputatom-container ${props.rootClassName} `}>
      <div className="inputatom-container1">
        <span className="inputatom-text">{props.label}</span>
        <input
          type="text"
          placeholder={props.value}
          className="inputatom-textinput input"
        />
      </div>
    </div>
  )
}

Inputatom.defaultProps = {
  value: '{{value}}',
  label: '{{label}}',
  rootClassName: '',
}

Inputatom.propTypes = {
  value: PropTypes.string,
  label: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Inputatom
