import React from 'react'

import PropTypes from 'prop-types'

import './sidebarmolecule.css'

const Sidebarmolecule = (props) => {
  return (
    <div className={`sidebarmolecule-container ${props.rootClassName} `}>
      <div className="sidebarmolecule-container1">
        <div className="sidebarmolecule-container2">
          <img
            alt={props.IMAGE1150x_alt1}
            src={props.IMAGE1150x_src1}
            className="sidebarmolecule-i-m-a-g-e1150x"
          />
          <span className="sidebarmolecule-text">ESCRITORIO</span>
        </div>
        <div className="sidebarmolecule-container3">
          <img
            alt={props.IMAGE2150x_alt}
            src={props.IMAGE2150x_src}
            className="sidebarmolecule-i-m-a-g-e2150x"
          />
          <span className="sidebarmolecule-text1">ARCHIVO</span>
        </div>
        <div className="sidebarmolecule-container4">
          <img
            alt={props.IMAGE3150x_alt1}
            src={props.IMAGE3150x_src1}
            className="sidebarmolecule-i-m-a-g-e3150x"
          />
          <span className="sidebarmolecule-text2">OBSERVATORIO</span>
        </div>
      </div>
    </div>
  )
}

Sidebarmolecule.defaultProps = {
  IMAGE2150x_src: '/playground_assets/image2150x1757-5ig4-200h.png',
  IMAGE1150x_alt1: 'IMAGE1150x1742',
  IMAGE3150x_alt1: 'IMAGE3150x1802',
  IMAGE1150x_src1: '/playground_assets/image1150x1742-u1br-200h.png',
  IMAGE2150x_alt: 'IMAGE2150x1757',
  rootClassName: '',
  IMAGE3150x_src1: '/playground_assets/image3150x1802-quhw-200h.png',
}

Sidebarmolecule.propTypes = {
  IMAGE2150x_src: PropTypes.string,
  IMAGE1150x_alt1: PropTypes.string,
  IMAGE3150x_alt1: PropTypes.string,
  IMAGE1150x_src1: PropTypes.string,
  IMAGE2150x_alt: PropTypes.string,
  rootClassName: PropTypes.string,
  IMAGE3150x_src1: PropTypes.string,
}

export default Sidebarmolecule
