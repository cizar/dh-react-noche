import React from 'react'
import IngresoTexto from '../IngresoTexto'
import ListaNombres from '../ListaNombres'

class Main extends React.Component {
  state = {
    lista: [
      'juan',
      'javier',
      'kevin'
    ]
  }
  handleRemove = (pos) => {
    this.setState({
      lista: this.state.lista.filter((item, index) => pos !== index)
    })
  }
  handleCuandoIngrese = (texto) => {
    this.setState({
      lista:[...this.state.lista, texto]
    })
  }
  render () {
    const { name } = this.props
    return (
      <div>
        <h1>Lista!!!</h1>
        <IngresoTexto cuandoIngrese={this.handleCuandoIngrese} />
        <ListaNombres lista={this.state.lista} remove={this.handleRemove}/>
      </div>
    )
  }
}


export default Main
