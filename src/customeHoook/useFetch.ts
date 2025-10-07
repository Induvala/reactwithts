import { useEffect, useState } from "react";

interface productProps{
    id:number;
    title:string;
    description: string;
    price: number;
}

export  const useFetch =()=>{
    const [product,setProduct] = useState<productProps[]>([]);
    const [loading,setLoading] = useState<boolean>(false);
    const [error,setError] = useState<string>('');
    const [order,setOrder] = useState<'asc' | 'desc'>('asc');

    useEffect(()=>{
        const fetchData = async() =>{
        try{
        setLoading(true);
        const res = await fetch('https://fakestoreapi.com/products?sort=asc');
        const result = await res.json();
        const sortedData = result.sort((a:any,b:any)=> order ==='asc' ? a.price - b.price : b.price - a.price);
        setProduct(sortedData)
        }catch{
         setError(error)
        }finally{
            setLoading(false)
        }
    }
        fetchData();
    },[order])
    return {product,loading,error,order,setOrder};
}