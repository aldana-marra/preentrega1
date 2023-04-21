import { useEffect, useState } from "react"



const ItemListContainer = ({greeting}) => {
        const[products, setProducts]=useState([])
    useEffect (() => {
        getProducts()
        .then(response => {
            setProducts(response)
        
        })
    }, []

    )

return (
    <div>
        <h1>{greeting}</h1>
    </div>
)
}

export default ItemListContainer