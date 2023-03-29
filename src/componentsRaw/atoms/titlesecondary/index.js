import React from 'react'

import PropTypes from 'prop-types'

import './titlesecondaryatom.css'

const Titlesecondaryatom = (props) => {
  return (
    <div className={`titlesecondaryatom-container ${props.rootClassName} `}>
      <div className="titlesecondaryatom-container1">
        <span className="titlesecondaryatom-text">
          &#123;&#123;value&#125;&#125;
        </span>
      </div>
    </div>
  )
}

Titlesecondaryatom.defaultProps = {
  rootClassName: '',
}

Titlesecondaryatom.propTypes = {
  rootClassName: PropTypes.string,
}

export default Titlesecondaryatom
