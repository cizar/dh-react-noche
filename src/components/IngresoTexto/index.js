import React from 'react'
import PropTypes from 'prop-types'

class IngresoTexto extends React.Component {
	handleSubmit = (event) => {
		event.preventDefault()
		this.props.cuandoIngrese(this.campo.value)
		this.campo.value = ''
	}
	render () {
		return (
			<form onSubmit={this.handleSubmit}>
	          <input ref={el => this.campo = el} type="text" />
	        </form>
		)
	}
}

IngresoTexto.propTypes = {
	cuandoIngrese: PropTypes.func.isRequired
}

export default IngresoTexto