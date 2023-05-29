import React from 'react'

export const Table = ({
    thead,
    children
}) => {
  return (
    <table className=' text-left '>
        <thead className=' [&>tr>th]:px-4 [&>tr>th]:py-2 [&>tr>th:first-child]:pl-0 [&>tr>th:last-child]:pr-0 border-b border-b-zinc-400'>
            { thead } 
        </thead>
        <tbody className='[&_tr>td]:px-4 [&_tr>td]:py-2 [&_tr>td:first-child]:pl-0 [&_tr>td:first-child]:font-semibold [&_tr>td:last-child]:pr-0 [&_tr:not(:last-child)]:border-b [&_tr:not(:last-child)]:border-b-zinc-400'>
           { children }
        </tbody>
      </table>
  )
}
