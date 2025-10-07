import React, { useEffect, useState } from 'react'
import PaginationComponents from './PaginationComponents';

interface PostProps{
    id:number;
    title:string;
    includes:Function;
}
function Posts() {
    const [data, setData] = useState<PostProps[]>([]);
    const [error, setError] = useState<string>('');
    const [loading,setLoading] = useState<boolean>(false);
    const [debouncedValue,setDebouncedValue] = useState<string>('');
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 10;

    const totalPages = Math.ceil(data.length/postsPerPage);
    const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);

   const filterData = data.filter((item)=> item.title.toLocaleLowerCase().includes(debouncedValue.toLocaleLowerCase()));
    useEffect(()=>{
    const fetchData = async() =>{
        try{
        setLoading(true);
        const res = await fetch('https://dummyjson.com/posts');
        const res1 = await res.json();
        setData(res1.posts);
        console.log(data)
        }catch{
            console.log(error);
            setError(error)
        }finally{
            setLoading(false)
        }
    }

    const timer = setTimeout(()=>{
            fetchData();
    },1000)
    return ()=>{
        clearTimeout(timer)
    }
    },[debouncedValue])
  return (
   <> 
   <input type='text' value={debouncedValue} onChange={(e)=>setDebouncedValue(e.target.value)} placeholder='Enter Value'/>
   {filterData.length ===0 && loading &&  <p>....Loading</p>}
    <ul>
        {currentPosts.map((item,id)=>(
            <li key={id}>{item.title}</li>
        ))}
    </ul>
    {error && <p>{error}</p>}
     <PaginationComponents currentPage={currentPage} setCurrentPage={setCurrentPage} totalPages={totalPages}/>
   </>
  )
}

export default Posts