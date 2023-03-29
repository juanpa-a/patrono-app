import React from 'react'

import PropTypes from 'prop-types'

import Buttonatom from './buttonatom'
import './due-dateorganism.css'

const DueDateorganism = (props) => {
  return (
    <div className={`due-dateorganism-container ${props.rootClassName} `}>
      <div className="due-dateorganism-container1">
        <div className="due-dateorganism-container2">
          <span className="due-dateorganism-text">{props.day}</span>
          <span className="due-dateorganism-text1">{props.month}</span>
        </div>
        <div className="due-dateorganism-container3">
          <span className="due-dateorganism-text2">
            Su siguiente obligación de pago / cobro está programada para el día:
          </span>
          <Buttonatom
            rootClassName="buttonatom-root-class-name1"
            className=""
          ></Buttonatom>
        </div>
      </div>
    </div>
  )
}

DueDateorganism.defaultProps = {
  rootClassName: '',
  month: 'FEB',
  day: '20',
}

DueDateorganism.propTypes = {
  rootClassName: PropTypes.string,
  month: PropTypes.string,
  day: PropTypes.string,
}

export default DueDateorganism
