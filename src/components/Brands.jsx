import React from 'react'
import {getContrastYIQ} from '../helpers'
function Brands({brand}) {
  return (
    <div className='brand'>
       <h5>{brand.title}</h5> 
        <div className="brand-colors">
            {brand.colors.map(color=>(
                <span style={{'--bgColor': `#${color}`,'--textColor':`${getContrastYIQ(color)}`}}>{color}</span>
            ))}
        </div>
    </div>
  )
}

export default Brands