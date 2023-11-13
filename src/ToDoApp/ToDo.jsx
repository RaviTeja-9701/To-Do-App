import React, { Fragment, useState } from 'react'
import logo from './To-Do.png'

const ToDo = () => {
    let [inputValue,setInputValue] = useState("")

    let [listItems,setListItems]=useState([])

    let [editindex,setEditIndex]=useState(null)


    let handleSubmit =  (e)=>{
        e.preventDefault();
        console.log(inputValue);
    }

    let handleChange = (e)=>{
        setInputValue(e.target.value)
    }

    let handleAdd = ()=>{
        if (inputValue!=="")
        {
            if (editindex!==null)
            {
                listItems[editindex]=inputValue;
                setEditIndex(null) 
            }
            else{
                setListItems([...listItems,inputValue])
            }
            setInputValue("")
        }
    }

    let handleDelete = (id)=>{
        let newList = listItems.filter((val,index)=>{
            return index!=id
        })
        setListItems(newList)
    }

    let handleEdit = (id)=>{
        setInputValue(listItems[id])
        setEditIndex(id);
    }

  return (
    <>
      <nav>
            <img src={logo} alt="hello"/>
            <h1>To-Do App</h1>
      </nav>
      <div id='sidebar'>
            <form onSubmit={handleSubmit}>
                <input type="text" name='inputValue' id='inputs' value={inputValue} onChange={handleChange} placeholder='Enter The Task to be Done' />
                <br />
                <br />
                <button onClick={handleAdd} id='adds'> {editindex!=null?"Update Items":"Add Items"} </button>
            </form>
            <button onClick={()=>setListItems([])} id='clears'>Clear All</button>
      </div>
        
        <div id='header'>
            {listItems.map((val,index)=>{
                return(        
                    <Fragment key={index}>
                        <div id='entries'>
                            <h3>{val}</h3> &nbsp; &nbsp; 
                            <button onClick={()=>handleEdit(index)} id='edits'>Edit</button> &nbsp; &nbsp;
                            <button onClick={()=>handleDelete(index)} id='deletes'>Delete</button>
                        </div>
                    </Fragment>
                )     
            })}
        </div>
    </>
  )
}

export default ToDo