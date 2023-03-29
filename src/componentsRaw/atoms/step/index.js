import React from 'react'

import PropTypes from 'prop-types'

import './stepatom.css'

const Stepatom = (props) => {
  return (
    <div className="stepatom-container">
      <span className="stepatom-text">{props.step}</span>
    </div>
  )
}

Stepatom.defaultProps = {
  step: '01',
}

Stepatom.propTypes = {
  step: PropTypes.string,
}

export default Stepatom
