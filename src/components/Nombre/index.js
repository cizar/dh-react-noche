import React from 'react'
import PropTypes from 'prop-types'

const Nombre = ({ texto, remove}) => (
    <li>
      {texto}
      {remove && <button onClick={remove}>-</button>}
    </li>
)

Nombre.propTypes = {
	texto: PropTypes.string.isRequired
}

export default Nombre