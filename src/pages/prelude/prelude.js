import React from 'react'

import { Helmet } from 'react-helmet'

import Navbarmolecule from '../components/navbarmolecule'
import Stepatom from '../components/stepatom'
import Titleatom from '../components/titleatom'
import Buttonsecondaryatom from '../components/buttonsecondaryatom'
import Buttonternaryatom from '../components/buttonternaryatom'
import Paginationsecondarymolecule from '../components/paginationsecondarymolecule'
import Footermolecule from '../components/footermolecule'
import './prelude.css'

const Prelude = (props) => {
  return (
    <div className="prelude-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="prelude-container1">
        <Navbarmolecule rootClassName="navbarmolecule-root-class-name4"></Navbarmolecule>
        <div className="prelude-background">
          <Stepatom></Stepatom>
          <div className="prelude-container2">
            <Titleatom rootClassName="titleatom-root-class-name"></Titleatom>
            <div className="prelude-container3">
              <Buttonsecondaryatom rootClassName="buttonsecondaryatom-root-class-name2"></Buttonsecondaryatom>
              <Buttonternaryatom rootClassName="buttonternaryatom-root-class-name1"></Buttonternaryatom>
            </div>
          </div>
          <Paginationsecondarymolecule rootClassName="paginationsecondarymolecule-root-class-name"></Paginationsecondarymolecule>
        </div>
        <Footermolecule rootClassName="footermolecule-root-class-name8"></Footermolecule>
      </div>
    </div>
  )
}

export default Prelude
