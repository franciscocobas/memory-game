import React from 'react'

import gifCat from '../images/nyan-cat-animated.gif'

import './Card.css'

class Card extends React.Component {

  flipCard = () => {

    this.props.handleClick(this.props.carta);
  }

  render() {
    return (
      <div className='col-5 col-md-2 carta-container' onClick={this.flipCard}>
        {
          this.props.carta.estado === 'oculta' ?
          <div className='row align-items-center'>
            <div className='col'>
              <img className='cat-gif' src={gifCat} alt='Gatito gif' />
            </div>
          </div> :
          <div className='row align-items-center'>
            <div className='col'>
              {this.props.carta.texto ?
                this.props.carta.texto :
                <img className='card-img' src={this.props.carta.imagenUrl} alt='Imagen Carta' /> }
            </div>
          </div>
        }
      </div>
    )
  }
}

export default Card