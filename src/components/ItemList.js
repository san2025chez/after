import React from 'react'
import {Item} from './Item'
export const ItemList = ({ items})=>{
console.log("en items",items);
    return <>
          {items.map( elemento => <Item key={elemento.id} {...elemento} /> )}
    </>
}