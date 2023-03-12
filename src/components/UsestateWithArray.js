import React, { useState } from "react";

function UsestateWithArray() {
  const [items, setItems] = useState([]);

   const addItem = () => {
    setItems([ ...items, {
        id: items.length,
        value: Math.floor(Math.random() * 10) + 1
    }])
   }
  return (
    <>
      <div class="d-grid gap-2 col-6 mx-auto">
      <button onClick={addItem} type="button" class="btn btn-primary">Add a Number</button>
      </div>
      <div class="border border-primary" style={{display: 'flex', justifyContent: 'center'}}>
        <ul class="list-group list-group-horizontal">
          {items.map((item) => (
            <li class="list-group-item" key={item.id}>{item.value}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default UsestateWithArray;
