import React, { useState } from "react";
import AddItem from "./AddItem"
function ListItem(){
   const [item,setItem]=useState([]);

   const handleItems=(inputList)=>{
     const newItem={
       title:inputList,
       status:false,
       id:new Date().toDateString() + inputList,
     }
     setItem([...item, newItem]);
   }
   const handleDelete=(id)=>{
      const deleteItem= item.filter((el)=>el.id !== id)
   setItem(deleteItem);
    }

  return(
  <>
  <AddItem handleItem={handleItems} />
   <div className="list-container" data-testid="list-container">
     {item.map((el)=>(
        <div className="ab">
         <p data-testid="list-item">
         <b data-testid="list-item-title">{el.title}</b>
         <span data-testid="list-item-status">{el.staus? "Completed" : "Not Completed"}</span>
         </p>
         <button onClick={()=>handleDelete(el.id)} data-testid="delete-btn">Delete</button>
         </div>
     ))}
    
     </div>  
  </>
)
}
export default ListItem