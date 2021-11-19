import React, {useEffect, useState}from 'react'
import {ItemDetail} from './itemDetail'
import {useParams} from 'react-router'

export function ItemDetailContainer() {
    const [datosDelItem, setDatosDelItem] = useState({});
    const {id} = useParams();

    useEffect(()=>{

        fetch('http://localhost:3000/products')
        .then(response => response.json())
        .then(data => {  
        setDatosDelItem(data.find(prod => prod.id === parseInt(id)))} );
    },[id])

 return <ItemDetail {...datosDelItem} />
}
