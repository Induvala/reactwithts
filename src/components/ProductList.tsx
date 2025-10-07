import React from 'react'
import { useFetch } from '../customeHoook/useFetch'

function ProductList() {
    const {product,loading,error,order,setOrder} = useFetch();

  return (
    <div>
        <select onChange={(e)=>setOrder(e.target.value as 'asc' | 'desc')} value={order}>
            <option value={'asc'}>ASC</option>
            <option value={'desc'}>DESC</option>
        </select>
        {loading && <p>Data is underLoading</p>}
        <ul>
            {product.map((item,id)=>(
                <li key={id}>
                    <h1>{item.title}</h1>
                    <p>{item.price}</p>
                    <p>{item.description}</p>
                    </li>
            ))}
        </ul>
        {error && <p>Data not found</p>}
    </div>
  )
}

export default ProductList