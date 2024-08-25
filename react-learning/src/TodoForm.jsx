import React, { useState } from 'react';
export function TodoForm({onSubmit}) {
    // props.onSubmit
const [newItem,setNewItem] = useState("");

function seeSubmit(e) {
    e.preventDefault();
    // console.log(newItem);
    /* setTodos(currentTodo => {
      return [...currentTodo, 
        {id:crypto.randomUUID(),
        title:newItem, 
        completed:false},];
    }) */
    if (newItem === "") return; 

    onSubmit(newItem)
    setNewItem("");
  }


    return <form className='new-item-form' 
    onSubmit={seeSubmit}>
      <div className="form-new">
        <label htmlFor='item'>New Item<br/><br />
          <input value={newItem} 
          onChange={e => setNewItem(e.target.value)}  
          type="text" 
          id="item"/>
        </label>
      </div>
      <button className='btn'>Add</button>
    </form>
}