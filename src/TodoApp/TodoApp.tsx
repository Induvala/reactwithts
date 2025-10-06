import React, { useState } from 'react'
import { text } from 'stream/consumers';
// ts-ignore
function TodoApp() {
    const [input, setInput] = useState<string>('');
    const [data,setData] = useState<string[]>([]);
    const [isEdit,setIsEdit] = useState<number | null>(null);
    const [isUpdate,setIsUpdate] = useState<boolean>(false);

    function handleDelete(id:number){
     const filterData = data.filter((item,index)=>index!== id);
     setData(filterData)
    }
    function handleEdit(id:number){
     const filterData = data.find((item,idx)=>idx ===id);
     if(filterData){
      setIsEdit(id);
      setInput(filterData);
      setIsUpdate(true)

     }

    }
    function handleAddUpdate(){
        if (input.trim() === "") return;
    if(isEdit !==null){
        const updatedData = data.map((item,id)=>
        id === isEdit ? input: item);
        setData(updatedData);
        setIsEdit(null);
        setIsUpdate(true)
    }else{
        setData((prev):any=>[...prev,input]);
    }
         setInput('')
    }
  return (
    <div>
        <input type='text' value={input} onChange={(e)=>setInput(e.target.value)} placeholder='Enter Value'/>
         <button onClick={handleAddUpdate}>{isUpdate ? 'Update' : 'Add'}</button>
        <ul>
            {data.map((item,id)=>(
                <li key={id}>{item} <button onClick={()=>handleEdit(id)}>Edit</button><button onClick={()=>handleDelete(id)}>Delete</button></li>
            ))}
        </ul>
    </div>
  )
}

export default TodoApp

