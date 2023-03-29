import React from 'react'

import PropTypes from 'prop-types'

import './buttonsecondaryatom.css'

const Buttonsecondaryatom = (props) => {
  return (
    <div
      className={`buttonsecondaryatom-container button ${props.rootClassName} `}
    >
      <span className="buttonsecondaryatom-text">
        <span className="">{props.text}</span>
      </span>
    </div>
  )
}

Buttonsecondaryatom.defaultProps = {
  text: '{{text}}',
  rootClassName: '',
}

Buttonsecondaryatom.propTypes = {
  text: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Buttonsecondaryatom
