import React from 'react'

import { Helmet } from 'react-helmet'

import Navbarmolecule from '../components/navbarmolecule'
import Sidebarmolecule from '../components/sidebarmolecule'
import Infomolecule from '../components/infomolecule'
import Footermolecule from '../components/footermolecule'
import './desk.css'

const Desk = (props) => {
  return (
    <div className="desk-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="desk-container1">
        <Navbarmolecule rootClassName="navbarmolecule-root-class-name6"></Navbarmolecule>
        <div className="desk-container2">
          <Sidebarmolecule rootClassName="sidebarmolecule-root-class-name1"></Sidebarmolecule>
          <div className="desk-wrapper">
            <div className="desk-container3">
              <img
                alt="image"
                src="https://play.teleporthq.io/static/svg/default-img.svg"
                className="desk-image"
              />
            </div>
            <div className="desk-container4">
              <Infomolecule rootClassName="infomolecule-root-class-name"></Infomolecule>
            </div>
          </div>
        </div>
        <Footermolecule rootClassName="footermolecule-root-class-name3"></Footermolecule>
      </div>
    </div>
  )
}

export default Desk
