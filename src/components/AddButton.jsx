import { useState,useContext } from "react";
import { ItemListContext } from "../Context/ItemListContext";

const AddButton = () => {
    const [itemList, setItemList] = useContext(ItemListContext);
    const [input, setInput] = useState('')

    const handleChange = (e) => {
        setInput(e.target.value)
    }
    
    const handleAdd = () => {
        setItemList([...itemList, input])
        setInput('')
    }
    return (
            <div className="mt-10 w-[623px] ml-20 mb-[100px]">
              <input    required
                        type="text" 
                        value={input} 
                        placeholder="To do or not to do" 
                        onChange={handleChange} 
                        className="border-2 rounded w-[500px] h-8 mr-1 pl-2 float-left"/>
              <button   onClick={handleAdd} 
                        className="border-2 rounded h-8 float-right px-2">Add Item</button>
            </div> )
}

export default AddButton;