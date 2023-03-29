import React from 'react'

import PropTypes from 'prop-types'

import './legendatom.css'

const Legendatom = (props) => {
  return (
    <div className={`legendatom-container ${props.rootClassName} `}>
      <span className="legendatom-text">&#123;&#123;text&#125;&#125;</span>
    </div>
  )
}

Legendatom.defaultProps = {
  rootClassName: '',
}

Legendatom.propTypes = {
  rootClassName: PropTypes.string,
}

export default Legendatom
