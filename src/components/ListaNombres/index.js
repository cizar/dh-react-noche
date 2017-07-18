import React from 'react'
import PropTypes from 'prop-types'
import Nombre from '../Nombre'

const ListaNombres = ({ lista, remove }) => (
    <ul>
      {lista.map((item, index) => (
      	<Nombre key={index} texto={item} remove={() => remove(index)}/>
      ))}
    </ul>
)


ListaNombres.propTypes = {
	lista: PropTypes.array.isRequired,
	remove: PropTypes.func.isRequired
}

export default ListaNombres