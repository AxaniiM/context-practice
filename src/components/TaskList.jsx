import React, { useContext, useState } from "react";
import { ItemListContext } from "../Context/ItemListContext";
import AddButton from "./AddButton";

const TodoList = () => {
  const [editingInput, setEditingInput] = useState('')
  const [itemList, setItemList] = useContext(ItemListContext)
  const [editingIndex, setEditingIndex] = useState()


  const handleEdit = (i) => {
    setEditingIndex(i);
    setEditingInput(itemList[i]);
  };

  const handleSave = () => {
    if (editingIndex !== null) {
      let newList = [...itemList];
      newList[editingIndex] = editingInput;
      setItemList(newList);
      setEditingIndex(null);
      setEditingInput("");
    }
  };

  const handleCancel = () => {
    setEditingIndex(null);
    setEditingInput("");
  };

  const handleDelete = (i) => {
    setItemList(itemList.filter((_, index) => index !== i));
  };

  return (
    <div className=" border-2 w-[800px] pb-[50px]">
      <AddButton/>
      {itemList.map((item, index) => {
        return (
          <div key={index} className=" border-b-2 pb-2 mt-2 inline-flex justify-center ml-20">
            {editingIndex === index ? (
              <>
                <input
                className="w-[490px] h-8 mr-1 pl-2 pt-2"
                  type="text"
                  value={editingInput}
                  onChange={(e) => setEditingInput(e.target.value)}/>
                <button onClick={handleSave} className="border-2 rounded h-8 px-2 mr-1">Save</button>
                <button onClick={handleCancel} className="border-2 rounded h-8 px-2">Cancel</button>
                  </>
            ) : (
              <div className="inline-flex">
                <p className="rounded w-[500px] h-8 mr-1 flex-start pl-2 pt-2">{item}</p>
                <button onClick={() => handleEdit(index)} className="border-2 rounded h-8 px-2 mr-1" >Edit</button>
                <button onClick={() => handleDelete(index)} className="border-2 rounded h-8 px-2">Delete</button>
                </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default TodoList;
