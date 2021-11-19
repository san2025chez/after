import React, { useEffect,useState } from 'react'
import { ItemCount } from './ItemCount'
import { ItemList } from './ItemList'
import {useParams} from 'react-router'

/* const datos = [ 
    { id:1,  title:'Remeras', description:'Remeras Rojas',        price:25,  pictureUrl:'' },
    { id:23, title:'Pantalon', description:'Pantalon de jean',    price:35,  pictureUrl:'' },
    { id:78, title:'Medias', description:'Medias con dibujitos',  price:500, pictureUrl:'' }
] */

export const ItemListContainer = ({greeting:saludo, a ,   b:otrab }) => {
    const [resultadoDeItems, setResultadoDeItems] = useState(null)
const {Id} = useParams()
console.log(Id);
console.log(typeof(Id))

    useEffect(()=>{
    


        fetch('http://localhost:3000/products')
        .then(response => response.json())
        .then(data => {  if(!Id ) {setResultadoDeItems(data)}
        else 
        {setResultadoDeItems(data.filter(prod => prod.categoryId === Id))}} );
 

    },[Id])

    console.log("filtro",resultadoDeItems);

    const seAgrego = (num)=>{console.log('se agrego un item',num)};
    
    return (
        <div>
            <h4>{JSON.stringify(Id)}</h4>

            { resultadoDeItems  
            ? <ItemList items={resultadoDeItems}  /> 
            : null}

            <div>
                <ItemCount initial={11} stock={10} onAdd={seAgrego}/>
            </div>
        </div>
    )
}
