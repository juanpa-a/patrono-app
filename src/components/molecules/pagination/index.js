import React from 'react'

import PropTypes from 'prop-types'

import PageNumatom from './page-numatom'
import './paginationmolecule.css'

const Paginationmolecule = (props) => {
  return (
    <div className={`paginationmolecule-container ${props.rootClassName} `}>
      <div className="paginationmolecule-container1">
        <div className="paginationmolecule-wrapper">
          <div className="paginationmolecule-stamp">
            <span className="paginationmolecule-text">{props.date}</span>
            <span className="paginationmolecule-text1">
              PATRONO // LEGAL TECH
            </span>
          </div>
          <div className="paginationmolecule-divider"></div>
        </div>
        <div className="paginationmolecule-page-num-wrapper">
          <PageNumatom
            rootClassName="page-numatom-root-class-name1"
            className=""
          ></PageNumatom>
        </div>
      </div>
    </div>
  )
}

Paginationmolecule.defaultProps = {
  date: '{{date}}',
  rootClassName: '',
}

Paginationmolecule.propTypes = {
  date: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Paginationmolecule
