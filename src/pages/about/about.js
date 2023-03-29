import React from 'react'

import { Helmet } from 'react-helmet'

import Navbarmolecule from '../components/navbarmolecule'
import Titleatom from '../components/titleatom'
import Paragraphatom from '../components/paragraphatom'
import Buttonsecondaryatom from '../components/buttonsecondaryatom'
import Legendatom from '../components/legendatom'
import Priceatom from '../components/priceatom'
import Footermolecule from '../components/footermolecule'
import './about.css'

const About = (props) => {
  return (
    <div className="about-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="about-container1">
        <Navbarmolecule rootClassName="navbarmolecule-root-class-name2"></Navbarmolecule>
        <div className="about-background">
          <div className="about-main-container">
            <div className="about-main-wrapper">
              <Titleatom></Titleatom>
              <div className="about-divider"></div>
              <Paragraphatom></Paragraphatom>
              <Buttonsecondaryatom
                text="CONFIGURAR"
                rootClassName="buttonsecondaryatom-root-class-name1"
              ></Buttonsecondaryatom>
              <Legendatom></Legendatom>
            </div>
            <div className="about-price-wrapper">
              <Priceatom></Priceatom>
              <Legendatom rootClassName="legendatom-root-class-name"></Legendatom>
            </div>
          </div>
        </div>
        <Footermolecule rootClassName="footermolecule-root-class-name1"></Footermolecule>
      </div>
    </div>
  )
}

export default About
