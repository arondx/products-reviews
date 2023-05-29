import React from 'react'
import { IconEdit } from './IconEdit'
import { IconDelete } from './IconDelete'

export const Popover = ({
    children,
    setShowPopover
}) => 
{   
    return (
    <>
        {children}
        {/* <div 
            className=' absolute inset-0'
            onClick={
                () => setShowPopover(
                    {
                        ...setShowPopover,
                        show: false
                    }
                )
            }>
            overlay
        </div> */}
    </>
    
    )
    
}
