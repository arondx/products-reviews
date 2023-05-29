import React, { useState } from 'react'
import { IconEdit } from './IconEdit'
import { IconDelete } from './IconDelete'
import { IconEllipsis } from './IconEllipsis'
import { Popover } from './Popover'

export const TRow = ({
    tdata,
    index,
    showPopover,
    setShowPopover
}) => {

  
  return (
   
      <tr>
          {
              Object.values(tdata).map((value, index) => (
                  <td key={index}>{value}</td>
              ))
          }
          
          <td className='relative'>
            <button
              className='relative z-30'         
              onClick={() => {
                setShowPopover({
                  show: !showPopover,
                  activeIndex: index
                });
                setShowOverlay(!showOverlay);
              }}
            >
              <IconEllipsis />
            </button>
            
          { showPopover && 
          
            <Popover setShowPopover={setShowPopover}>
              {<div className=' absolute z-40 right-0 bg-slate-300 shadow-lg text-sm'>
                <div className=' flex justify-between gap-3 items-center hover:bg-slate-400 px-2 py-1'>
                    <span>
                        Edit
                    </span>
                    <IconEdit />
                </div>
                <div className=' flex justify-between gap-3 items-center hover:bg-slate-400 px-2 py-1'>
                    <span>
                        Delete
                    </span>
                    <IconDelete />
                </div>
              </div>}
            </Popover>
            
          }
            
          </td>
      </tr>
  )
}
