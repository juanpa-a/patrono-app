import React from 'react'

import PropTypes from 'prop-types'

import './timestampatom.css'

const Timestampatom = (props) => {
  return (
    <div className={`timestampatom-container ${props.rootClassName} `}>
      <span className="timestampatom-text">
        PATRONO // &#123;&#123;date&#125;&#125;
      </span>
    </div>
  )
}

Timestampatom.defaultProps = {
  rootClassName: '',
}

Timestampatom.propTypes = {
  rootClassName: PropTypes.string,
}

export default Timestampatom
