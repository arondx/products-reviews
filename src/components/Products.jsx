import React, { useState } from 'react'
import { Table } from './UI/Table'
import { THead } from './UI/THead'
import { TRow } from './UI/TRow'
import { Modal } from './UI/Modal'
import { Button } from './UI/Button'

export const Products = ({
    products
}) => {
  const [  showModal, setShowModal ] = useState(false);
  const [  showPopover, setShowPopover ] = useState({
    show: false,
    activeIndex: null
  });
  
  const theadValues = ['Id', 'Product', 'Price', 'Description'];
  const modal = <div className=' w-64 h-64'>Modal</div>;
  return (

      <div className=''>
        <Button label={'Add Product'} onClick={() => setShowModal(
          true
        )}/>
        <Table thead={<THead theadValues={theadValues}/>}>
          {
            products.map((product, index) => (
              <TRow
                key={product.id}
                index={index}
                tdata={product}
                showPopover={(showPopover.activeIndex === index && showPopover.show)}
                setShowPopover={setShowPopover}
              />
            ))
          }
        </Table>
        <Modal modal={modal} 
        setShowModal={setShowModal}
        showModal={showModal}
        />
      </div>
  )
}
