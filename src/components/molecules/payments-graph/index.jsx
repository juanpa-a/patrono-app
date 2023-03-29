import React from 'react'

import PropTypes from 'prop-types'

import './payments-graphmolecule.css'

const PaymentsGraphmolecule = (props) => {
  return (
    <div className={`payments-graphmolecule-container ${props.rootClassName} `}>
      <div className="payments-graphmolecule-container01">
        <span className="">{props.text}</span>
        <div className="payments-graphmolecule-container02">
          <div className="payments-graphmolecule-container03"></div>
          <div className="payments-graphmolecule-container04"></div>
          <div className="payments-graphmolecule-container05"></div>
          <div className="payments-graphmolecule-container06"></div>
          <div className="payments-graphmolecule-container07"></div>
          <div className="payments-graphmolecule-container08"></div>
          <div className="payments-graphmolecule-container09"></div>
          <div className="payments-graphmolecule-container10"></div>
          <div className="payments-graphmolecule-container11"></div>
          <div className="payments-graphmolecule-container12"></div>
          <div className="payments-graphmolecule-container13"></div>
          <div className="payments-graphmolecule-container14"></div>
        </div>
      </div>
    </div>
  )
}

PaymentsGraphmolecule.defaultProps = {
  rootClassName: '',
  text: 'Proyección estimada de cobros',
}

PaymentsGraphmolecule.propTypes = {
  rootClassName: PropTypes.string,
  text: PropTypes.string,
}

export default PaymentsGraphmolecule
