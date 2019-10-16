import React from 'react'

import './Modal.css'

class Modal extends React.Component {
  render() {
    return (
      <div className='modal-container container'>
        <div className='row justify-content-center align-items-center'>
          <div className='modal-box col-4 text-center'>
            <h1 className='my-5'>¡Encontrada!</h1>
          </div>
        </div>
        
      </div>
    )
  }
}

export default Modal