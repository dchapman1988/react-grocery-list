import React, { useState } from 'react';

// Just a simple grocery list app
function App() {
  // Use the useState hook to store the list of grocery items
  const [groceryList, setGroceryList] = useState([]);

  // Function to add a new item to the list
  const addItem = (item) => {
    setGroceryList([...groceryList, item]);
  }

  // Function to remove an item from the list
  const removeItem = (item) => {
    setGroceryList(groceryList.filter(i => i !== item));
  }

	return(
		<div>
		<h1>Grocery List</h1>
		<ul>
		{groceryList.map(item => (
			<li key={item}>
			{item}
			<button onClick={() => removeItem(item)}>Remove</button>
			</li>
		))}
		</ul>
		<input
		type="text"
		placeholder="Add an item"
		onKeyDown={(e) => {
			if (e.key === 'Enter') {
				addItem(e.target.value);
				e.target.value = '';
			}
		}}
		/>
		</div>
  );
}

export default App;
