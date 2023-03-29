import React from 'react'

import { Helmet } from 'react-helmet'

import Navbarmolecule from '../components/navbarmolecule'
import Inputatom from '../components/inputatom'
import Buttongoogleatom from '../components/buttongoogleatom'
import Buttonappleatom from '../components/buttonappleatom'
import Buttonfacebookatom from '../components/buttonfacebookatom'
import Footermolecule from '../components/footermolecule'
import './sign-up.css'

const SignUp = (props) => {
  return (
    <div className="sign-up-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <Navbarmolecule rootClassName="navbarmolecule-root-class-name"></Navbarmolecule>
      <div className="sign-up-container1">
        <div className="sign-up-illustration">
          <img
            alt="Recurso8150x11877"
            src="/playground_assets/recurso8150x11877-dphs-200h.png"
            className="sign-up-header-logo"
          />
          <img
            alt="image"
            src="https://play.teleporthq.io/static/svg/default-img.svg"
            className="sign-up-image"
          />
        </div>
        <div className="sign-up-form-wrapper">
          <div className="sign-up-name-fields">
            <Inputatom
              label="Nombre:"
              value="Requerido"
              rootClassName="inputatom-root-class-name"
            ></Inputatom>
            <Inputatom
              label="Segundo nombre:"
              value="Opcional"
              rootClassName="inputatom-root-class-name"
            ></Inputatom>
          </div>
          <div className="sign-up-last-name-fields">
            <Inputatom
              label="Apellido:"
              value="Requerido"
              rootClassName="inputatom-root-class-name"
            ></Inputatom>
            <Inputatom
              label="Segundo apellido:"
              value="Requerido"
              rootClassName="inputatom-root-class-name"
            ></Inputatom>
          </div>
          <div className="sign-up-email-field">
            <Inputatom
              label="Correo electronico:"
              value="Requerido"
              rootClassName="inputatom-root-class-name"
            ></Inputatom>
          </div>
          <div className="sign-up-password-wrapper">
            <Inputatom
              label="Contraseña:"
              value="Requerido"
              rootClassName="inputatom-root-class-name"
            ></Inputatom>
            <Inputatom
              label="Confirmar contraseña:"
              value="Requerido"
              rootClassName="inputatom-root-class-name"
            ></Inputatom>
          </div>
          <span className="sign-up-text">Cree su cuenta con:</span>
          <div className="sign-up-container2">
            <Buttongoogleatom
              text="GOOGLE"
              rootClassName="buttongoogleatom-root-class-name"
            ></Buttongoogleatom>
            <Buttonappleatom
              text="APPLE"
              rootClassName="buttonappleatom-root-class-name"
            ></Buttonappleatom>
            <Buttonfacebookatom
              text="FACEBOOK"
              rootClassName="buttonfacebookatom-root-class-name"
            ></Buttonfacebookatom>
          </div>
          <span className="sign-up-text1">
            <span>
              Todos los datos proporcionados se encuentran sujetos a nuestra
              política de privacidad, puede acceder a ella
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="sign-up-text3">aquí.</span>
          </span>
        </div>
      </div>
      <Footermolecule rootClassName="footermolecule-root-class-name7"></Footermolecule>
    </div>
  )
}

export default SignUp
