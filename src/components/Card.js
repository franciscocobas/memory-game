import React from 'react'

import gifCat from '../images/nyan-cat-animated.gif'

import './Card.css'

class Card extends React.Component {

  flipCard = () => {

    this.props.handleClick(this.props.carta);
  }

  render() {

    let carta = this.props.carta;

    return (
      <div className='col-5 col-md-2 carta-container' onClick={this.flipCard}>
        {
          carta.estado === 'oculta' ?
          <div className='row align-items-center'>
            <div className='col'>
              <img className='cat-gif' src={gifCat} alt='Gatito gif' />
            </div>
          </div> :
          <div className='row align-items-center'>
            <div className='col'>
              {carta.texto ?
                carta.texto :
                <img className='card-img' src={carta.imagenUrl} alt='Imagen Carta' /> }
            </div>
          </div>
        }
      </div>
    )
  }
}

export default Card