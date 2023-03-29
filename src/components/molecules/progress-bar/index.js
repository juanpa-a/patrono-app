import React from 'react'

import PropTypes from 'prop-types'

import './progress-barmolucule.css'

const ProgressBarmolucule = (props) => {
  return (
    <div className={`progress-barmolucule-container ${props.rootClassName} `}>
      <div className="progress-barmolucule-container1">
        <div className="progress-barmolucule-container2">
          <span className="progress-barmolucule-step">1</span>
          <img
            alt={props.Rectangle53_alt}
            src={props.Rectangle53_src}
            className="progress-barmolucule-progress-bar"
          />
          <img
            alt={props.Rectangle52_alt}
            src={props.Rectangle52_src}
            className="progress-barmolucule-progress"
          />
        </div>
        <span className="progress-barmolucule-percentage">
          <span className="">20 % COMPLETADO</span>
        </span>
      </div>
    </div>
  )
}

ProgressBarmolucule.defaultProps = {
  Rectangle52_src: '/playground_assets/rectangle521185-lf41-1200w.png',
  rootClassName: '',
  Rectangle53_src: '/playground_assets/rectangle531186-7ac8-200h.png',
  Rectangle52_alt: 'Rectangle521185',
  Rectangle53_alt: 'Rectangle531186',
}

ProgressBarmolucule.propTypes = {
  Rectangle52_src: PropTypes.string,
  rootClassName: PropTypes.string,
  Rectangle53_src: PropTypes.string,
  Rectangle52_alt: PropTypes.string,
  Rectangle53_alt: PropTypes.string,
}

export default ProgressBarmolucule
