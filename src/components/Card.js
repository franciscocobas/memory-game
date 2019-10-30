import React from 'react'

import gifCat from '../images/nyan-cat-animated.gif'

import './Card.css'

class Card extends React.Component {

  onClickCard = () => {

    this.props.onClickCard(this.props.carta);
  }

  render() {

    let carta = this.props.carta;

    return (
      <div 
        className='col-5 col-md-2 carta-container' 
        onClick={this.onClickCard}>
        { 
          carta.estado === 'oculta' ? 
        <div>Oculta</div> :  carta.texto 
      }
      </div>
    )
  }
}

export default Card