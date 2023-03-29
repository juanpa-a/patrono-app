import React from 'react'

import PropTypes from 'prop-types'

import './buttonfacebookatom.css'

const Buttonfacebookatom = (props) => {
  return (
    <div
      className={`buttonfacebookatom-container button ${props.rootClassName} `}
    >
      <span className="buttonfacebookatom-text">
        <span className="">{props.text}</span>
      </span>
    </div>
  )
}

Buttonfacebookatom.defaultProps = {
  text: '{{text}}',
  rootClassName: '',
}

Buttonfacebookatom.propTypes = {
  text: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Buttonfacebookatom
