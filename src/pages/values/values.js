import React from 'react'

import { Helmet } from 'react-helmet'

import Navbarmolecule from '../components/navbarmolecule'
import Titleatom from '../components/titleatom'
import Valuemolecule from '../components/valuemolecule'
import Paginationmolecule from '../components/paginationmolecule'
import './values.css'

const Values = (props) => {
  return (
    <div className="values-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="values-container1">
        <Navbarmolecule rootClassName="navbarmolecule-root-class-name8"></Navbarmolecule>
        <div className="values-wrapper">
          <div className="values-main-wrapper">
            <div className="values-illustration">
              <Titleatom rootClassName="titleatom-root-class-name1"></Titleatom>
              <img
                alt="image"
                src="https://play.teleporthq.io/static/svg/default-img.svg"
                className="values-image"
              />
            </div>
            <div className="values-description">
              <Valuemolecule rootClassName="valuemolecule-root-class-name"></Valuemolecule>
            </div>
          </div>
          <Paginationmolecule rootClassName="paginationmolecule-root-class-name1"></Paginationmolecule>
        </div>
      </div>
    </div>
  )
}

export default Values
