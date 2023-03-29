import React from 'react'

import PropTypes from 'prop-types'

import './questionmolecule.css'

const Questionmolecule = (props) => {
  return (
    <div className="questionmolecule-container">
      <div className="questionmolecule-container1">
        <div className="questionmolecule-container2">
          <span className="questionmolecule-text">{props.number}</span>
          <span className="questionmolecule-text1">{props.question}</span>
        </div>
        <span className="questionmolecule-text2">{props.description}</span>
      </div>
    </div>
  )
}

Questionmolecule.defaultProps = {
  number: 'I.',
  description: '{{description}}',
  question: '{{question}}',
}

Questionmolecule.propTypes = {
  number: PropTypes.string,
  description: PropTypes.string,
  question: PropTypes.string,
}

export default Questionmolecule
