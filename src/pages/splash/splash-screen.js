import React from 'react'

import { Helmet } from 'react-helmet'

import './splash-screen.css'

const SplashScreen = (props) => {
  return (
    <div className="splash-screen-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="splash-screen-container1">
        <img
          alt="Recurso2150x1127"
          src="/playground_assets/recurso2150x1127-2qr8-500w.png"
          className="splash-screen-illustration-splash-left"
        />
        <div className="splash-screen-frame3">
          <span className="splash-screen-text"> </span>
          <img
            alt="Recurso3150x1129"
            src="/playground_assets/recurso3150x1129-osto-200h.png"
            className="splash-screen-splash-logo"
          />
          <span className="splash-screen-text1">
            <span>© 2022 PATRONO. Todos los derechos reservados.</span>
          </span>
        </div>
        <img
          alt="Recurso1150x1128"
          src="/playground_assets/recurso1150x1128-3n8e-500w.png"
          className="splash-screen-illustration-splash-right"
        />
      </div>
    </div>
  )
}

export default SplashScreen
