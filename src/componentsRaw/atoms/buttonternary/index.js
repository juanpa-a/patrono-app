import React from 'react'

import PropTypes from 'prop-types'

import './buttonternaryatom.css'

const Buttonternaryatom = (props) => {
  return (
    <div
      className={`buttonternaryatom-container button ${props.rootClassName} `}
    >
      <span className="buttonternaryatom-text">
        <span className="">{props.text}</span>
      </span>
    </div>
  )
}

Buttonternaryatom.defaultProps = {
  text: '{{text}}',
  rootClassName: '',
}

Buttonternaryatom.propTypes = {
  text: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Buttonternaryatom
