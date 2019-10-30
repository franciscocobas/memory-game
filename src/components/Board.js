import React from 'react'

import { getCards } from '../api/api'

import Card from './Card'
import Modal from './Modal'

class Board extends React.Component {

  state = {
    cartas: [],
    carta1: null,
    carta2: null
  }

  componentDidMount() {

    getCards().then((response) => {

      this.setState(() => ({ cartas: response }))
    })
  }

  handleClickCard = (cartaElegida) => {

  }

  render() {
    return (
      <div>
        <div className='row justify-content-center'>
          {
            this.state.cartas.length > 0 ?
              this.state.cartas.map(carta => (
                <Card
                  key={carta.id}
                  carta={carta}
                  onClickCard={this.handleClickCard}
                  ></Card>
              )) : 'No hay cartas en el tablero'
          }
        </div>
      </div>
    )
  }
}

export default Board