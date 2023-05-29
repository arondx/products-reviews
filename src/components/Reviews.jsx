import React from 'react'
import { Table } from './UI/Table'
import { THead } from './UI/THead'
import { TRow } from './UI/TRow'

export const Reviews = ({
    reviews
}) => {
  const theadValues = ['Id', 'ProductId', 'Description'];

  return (
    <Table thead={<THead theadValues={theadValues}/>}>
      {
        reviews.map(review => (
          <TRow
            key={review.id}
            tdata={review}
          />
        ))
      }
    </Table>
  )
}
