
import TodoList from "./components/TaskList.jsx";
import { ItemContext } from "./Context/ItemContext.jsx";
import { ItemListContext } from "./Context/ItemListContext";

import { useState } from "react";

console.log('ba' + + 'a')

export default function App() {
  const [inputs, setInput] = useState("");
  const [itemList, setItemList] = useState([]);
  return (
    <div className="flex flex-col justify-center items-center">
    <h1 className="text-4xl mt-5">To Do List</h1>
      <ItemContext.Provider value={[inputs, setInput]}>
        <ItemListContext.Provider value={[itemList, setItemList]}>
          <TodoList />
        </ItemListContext.Provider>
      </ItemContext.Provider>
    </div>
  );
}