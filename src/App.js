import React from 'react';

import { getCards } from './api/api'

import './App.css';

import Card from './components/Card'

class App extends React.Component {

  state = {
    cartas: [],
    carta1: null,
    carta2: null,
    coincide: null,
    cartaAnterior: null
  }

  componentDidMount() {

    getCards().then((response) => {

      this.setState(() => ({ cartas: response }))
    })
  }

  handleCardClick = (cartaElegida) => {

    console.log(this.state)

    if (cartaElegida.estado === 'oculta') {

      cartaElegida.estado = 'jugando'

      if (this.state.carta1 !== null && this.state.carta2 !== null) {

        if (this.state.carta1.estado === 'no-encontrada' && this.state.carta2.estado === 'no-encontrada') {

          this.setState(prevState => ({
            cartas: prevState.cartas.map(
              el => el.id === this.state.carta1.id || el.id === this.state.carta2.id ? { ...el, estado: 'oculta' }: el
            ),
            carta1: cartaElegida,
            carta2: null
          }))
        } else {
          this.setState(prevState => ({
            carta1: cartaElegida,
            carta2: null
          }))
        }

      } else if (this.state.carta1 === null) {

        this.setState(() => ({ carta1: cartaElegida }))

      } else {

        this.setState(() => ({ carta2: cartaElegida }))


        if ( this.state.carta1.idPar === cartaElegida.idPar ) {

          cartaElegida.estado = 'encontrada';

          this.setState(prevState => ({
            carta2: { ...prevState.carta2,  estado: 'encontrada', },
            cartas: prevState.cartas.map(
              el => el.id === this.state.carta1.id ? { ...el, estado: 'encontrada' }: el
            )
          }))

        } else {

          cartaElegida.estado = 'no-encontrada';

          this.setState(prevState => ({
            carta2: { ...prevState.carta2, estado: 'no-encontrada' },
            carta1: { ...prevState.carta1, estado: 'no-encontrada' },
            cartas: prevState.cartas.map(
              el => el.id === this.state.carta1.id ? { ...el, estado: 'no-encontrada' }: el
            )
          }))

        }

      }

    } else {

      cartaElegida.estado = 'oculta'

    }
  }

  render() {
    return (
      <div className="container">
        <div className='row justify-content-center'>
          {
            this.state.cartas.length > 0 ?
              this.state.cartas.map(carta => (
                <Card
                  key={carta.id}
                  carta={carta}
                  handleClick={this.handleCardClick}
                  flippedCard={carta.flippedCard}></Card>
              )) : 'No hay cartas en el tablero'
          }
        </div>
      </div>
    )
  }
}

export default App;
