import React from 'react'

import PropTypes from 'prop-types'

import './page-numsecondaryatom.css'

const PageNumsecondaryatom = (props) => {
  return (
    <div className={`page-numsecondaryatom-container ${props.rootClassName} `}>
      <span className="page-numsecondaryatom-text">
        <span className="">I.</span>
      </span>
    </div>
  )
}

PageNumsecondaryatom.defaultProps = {
  rootClassName: '',
}

PageNumsecondaryatom.propTypes = {
  rootClassName: PropTypes.string,
}

export default PageNumsecondaryatom
