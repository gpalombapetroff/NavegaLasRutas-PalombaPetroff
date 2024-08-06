import React from 'react'
import { ItemCount } from './Itemcount/ItemCount'

export const Item = ({producto}) => {
  return (
    <div className='card'>
        <h3>{producto.nombre}</h3>
        <p>{producto.precio}</p>
        <p>{producto.categoria}</p>
        <ItemCount/>
    </div>
  )
}


