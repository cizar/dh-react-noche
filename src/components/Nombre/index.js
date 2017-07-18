import React from 'react'
import PropTypes from 'prop-types'
import style from './style.css'

const Nombre = ({ texto, remove }) => (
    <li className={style.item}>
      {texto}
      {remove && <button className={style.button} onClick={remove}>-</button>}
    </li>
)

Nombre.propTypes = {
	texto: PropTypes.string.isRequired
}

export default Nombre
