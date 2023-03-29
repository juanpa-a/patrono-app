import React from 'react'

import PropTypes from 'prop-types'

import './page-numatom.css'

const PageNumatom = (props) => {
  return (
    <div className={`page-numatom-container ${props.rootClassName} `}>
      <span className="page-numatom-text">
        <span className="">I.</span>
      </span>
    </div>
  )
}

PageNumatom.defaultProps = {
  rootClassName: '',
}

PageNumatom.propTypes = {
  rootClassName: PropTypes.string,
}

export default PageNumatom
