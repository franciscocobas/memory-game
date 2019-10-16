import React from 'react';

import { getCards } from './api/api'

import './App.css';

import Card from './components/Card'
import Modal from './components/Modal'

class App extends React.Component {

  state = {
    cartas: [],
    carta1: null,
    carta2: null,
    encontrada: false
  }

  componentDidMount() {

    getCards().then((response) => {

      this.setState(() => ({ cartas: response }))
    })
  }

  handleCardClick = (cartaElegida) => {

    let carta1 = this.state.carta1;
    let carta2 = this.state.carta2;

    if (cartaElegida.estado === 'oculta') {

      cartaElegida.estado = 'jugando'

      if (carta1 === null) {

        this.setState(() => ({ carta1: cartaElegida }))

      } else if (carta2 === null) {

        this.setState(() => ({ carta2: cartaElegida }))

        if ( carta1.idPar === cartaElegida.idPar ) {

          this.setState(prevState => ({
            carta2: { ...prevState.carta2,  estado: 'encontrada', },
            cartas: prevState.cartas.map(
              el => el.id === carta1.id ? { ...el, estado: 'encontrada' }: el
            ),
            encontrada: true
          }))

          setTimeout(() => {
            this.setState(prevState => ({
              encontrada: false
            }))

          }, 1000);

        } else {

          this.setState(prevState => ({
            carta2: { ...prevState.carta2, estado: 'no-encontrada' },
            carta1: { ...prevState.carta1, estado: 'no-encontrada' },
            cartas: prevState.cartas.map(
              el => el.id === carta1.id ? { ...el, estado: 'no-encontrada' }: el
            )
          }))
        }

      } else {

        if (carta1.estado === 'no-encontrada' && carta2.estado === 'no-encontrada') {

          this.setState(prevState => ({
            cartas: prevState.cartas.map(
              el => el.id === carta1.id || el.id === carta2.id ? { ...el, estado: 'oculta' }: el
            )
          }))

        }

        this.setState(() => ({
          carta1: cartaElegida,
          carta2: null
        }))
      }
    }
  }

  render() {
    return (
      <div className="container">
        { this.state.encontrada ? <Modal></Modal> : '' }
        <div className='row justify-content-center'>
          {
            this.state.cartas.length > 0 ?
              this.state.cartas.map(carta => (
                <Card
                  key={carta.id}
                  carta={carta}
                  handleClick={this.handleCardClick}
                  ></Card>
              )) : 'No hay cartas en el tablero'
          }
        </div>
      </div>
    )
  }
}

export default App;
