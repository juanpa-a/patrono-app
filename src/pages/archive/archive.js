import React from 'react'

import { Helmet } from 'react-helmet'

import Navbarmolecule from '../components/navbarmolecule'
import Sidebarmolecule from '../components/sidebarmolecule'
import ContractCardorganism from '../components/contract-cardorganism'
import Footermolecule from '../components/footermolecule'
import './archive.css'

const Archive = (props) => {
  return (
    <div className="archive-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <Navbarmolecule rootClassName="navbarmolecule-root-class-name3"></Navbarmolecule>
      <div className="archive-container1">
        <div className="archive-sidebar-wrapper">
          <Sidebarmolecule rootClassName="sidebarmolecule-root-class-name"></Sidebarmolecule>
        </div>
        <div className="archive-container2">
          <div className="archive-pinned-contracts">
            <div className="archive-pinned">
              <ContractCardorganism rootClassName="contract-cardorganism-root-class-name"></ContractCardorganism>
              <ContractCardorganism rootClassName="contract-cardorganism-root-class-name"></ContractCardorganism>
            </div>
            <div className="archive-note">
              <img
                alt="image"
                src="https://play.teleporthq.io/static/svg/default-img.svg"
                className="archive-image"
              />
              <span className="archive-text">
                <span>
                  La
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="archive-text2">Eneida</span>
                <span> se convirtió en un texto</span>
                <br></br>
                <span> estándar en los planes de estudio</span>
                <br></br>
                <span> de los romanos letrados.</span>
              </span>
            </div>
          </div>
          <div className="archive-recent-contracts">
            <div className="archive-recent">
              <ContractCardorganism rootClassName="contract-cardorganism-root-class-name"></ContractCardorganism>
              <ContractCardorganism rootClassName="contract-cardorganism-root-class-name"></ContractCardorganism>
              <ContractCardorganism rootClassName="contract-cardorganism-root-class-name"></ContractCardorganism>
              <ContractCardorganism rootClassName="contract-cardorganism-root-class-name"></ContractCardorganism>
            </div>
          </div>
        </div>
      </div>
      <Footermolecule rootClassName="footermolecule-root-class-name2"></Footermolecule>
    </div>
  )
}

export default Archive
