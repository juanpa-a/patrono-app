import React from 'react'

import PropTypes from 'prop-types'

import './titleatom.css'

const Titleatom = (props) => {
  return (
    <div className={`titleatom-container ${props.rootClassName} `}>
      <div className="titleatom-container1">
        <span className="titleatom-text">&#123;&#123;value&#125;&#125;</span>
      </div>
    </div>
  )
}

Titleatom.defaultProps = {
  rootClassName: '',
}

Titleatom.propTypes = {
  rootClassName: PropTypes.string,
}

export default Titleatom
