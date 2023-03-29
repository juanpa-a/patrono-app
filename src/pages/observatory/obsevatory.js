import React from 'react'

import { Helmet } from 'react-helmet'

import Navbarmolecule from '../components/navbarmolecule'
import Sidebarmolecule from '../components/sidebarmolecule'
import DueDateorganism from '../components/due-dateorganism'
import Directorymolecule from '../components/directorymolecule'
import PaymentsGraphmolecule from '../components/payments-graphmolecule'
import ContractCardorganism from '../components/contract-cardorganism'
import Footermolecule from '../components/footermolecule'
import './obsevatory.css'

const Obsevatory = (props) => {
  return (
    <div className="obsevatory-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="obsevatory-container1">
        <Navbarmolecule rootClassName="navbarmolecule-root-class-name9"></Navbarmolecule>
        <div className="obsevatory-observatory-wrapper">
          <Sidebarmolecule rootClassName="sidebarmolecule-root-class-name2"></Sidebarmolecule>
          <div className="obsevatory-main-wrapper">
            <div className="obsevatory-info-wrapper">
              <DueDateorganism rootClassName="due-dateorganism-root-class-name"></DueDateorganism>
              <Directorymolecule rootClassName="directorymolecule-root-class-name"></Directorymolecule>
            </div>
            <div className="obsevatory-analytics-wrapper">
              <PaymentsGraphmolecule rootClassName="payments-graphmolecule-root-class-name"></PaymentsGraphmolecule>
              <div className="obsevatory-recent-contracts">
                <ContractCardorganism rootClassName="contract-cardorganism-root-class-name13"></ContractCardorganism>
                <ContractCardorganism rootClassName="contract-cardorganism-root-class-name13"></ContractCardorganism>
                <ContractCardorganism rootClassName="contract-cardorganism-root-class-name13"></ContractCardorganism>
              </div>
            </div>
          </div>
        </div>
        <Footermolecule rootClassName="footermolecule-root-class-name5"></Footermolecule>
      </div>
    </div>
  )
}

export default Obsevatory
