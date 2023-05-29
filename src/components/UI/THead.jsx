import React from 'react'

export const THead = ({
    theadValues
}) => {
  return (
    <tr>
      {
        theadValues.map((theadValue, index) => (
          <th key={index}>{theadValue}</th>
        ))
      }      	
    </tr>
  )
}
