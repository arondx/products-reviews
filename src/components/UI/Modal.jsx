import React, { useState } from 'react'
import { Button } from './Button'

export const Modal = ({
    modal,
    setShowModal,
    showModal
}) => {
  const defaultModal = 'flex justify-center items-center absolute inset-0'
  const hideModal = 'hidden';

  return (
    <div className={[
        defaultModal,
        showModal ? '' : hideModal
    ].join(' ')}>
        <div className=' absolute z-30 inset-0 bg-slate-500 opacity-50'></div>
        <div className=' z-40 bg-slate-50'>
            {
                modal 
            }
            <Button label={'Close'} onClick={() => setShowModal(false)}/>
        </div>
    </div>
  )
}
