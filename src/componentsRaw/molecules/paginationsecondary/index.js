import React from 'react'

import PropTypes from 'prop-types'

import PageNumsecondaryatom from './page-numsecondaryatom'
import './paginationsecondarymolecule.css'

const Paginationsecondarymolecule = (props) => {
  return (
    <div
      className={`paginationsecondarymolecule-container ${props.rootClassName} `}
    >
      <div className="paginationsecondarymolecule-container1">
        <div className="paginationsecondarymolecule-wrapper">
          <div className="paginationsecondarymolecule-stamp">
            <span className="paginationsecondarymolecule-text">
              {props.date}
            </span>
            <span className="paginationsecondarymolecule-text1">
              PATRONO // LEGAL TECH
            </span>
          </div>
          <div className="paginationsecondarymolecule-divider"></div>
        </div>
        <div className="paginationsecondarymolecule-page-num-wrapper">
          <PageNumsecondaryatom
            rootClassName="page-numsecondaryatom-root-class-name"
            className=""
          ></PageNumsecondaryatom>
        </div>
      </div>
    </div>
  )
}

Paginationsecondarymolecule.defaultProps = {
  date: '{{date}}',
  rootClassName: '',
}

Paginationsecondarymolecule.propTypes = {
  date: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Paginationsecondarymolecule
