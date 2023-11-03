import "./styles.css";
import { useState } from "react";

// list with checkbox and delete item
const arr = ["read books", "play cricket", "listen to music", "singing"];
// [ ] read books [delete]
// [ ] play cricket [delete]
// [ ] listen to music [delete]
// [ ] singing [delete]

export default function App() {
  const [newArr, setNewArr] = useState(
    arr.map((i) => ({ item: i, showDeleteBtn: false }))
  );
  // const [showDeleteBtn, setShowDeleteBtn] = useState(false);

  const handleDelete = (index) => {
    const updatedItems = [...newArr];
    updatedItems.splice(index, 1);
    setNewArr(updatedItems);
  };

  // additional way of delete an item from an array
  // const handleDelete = (index) => {
  //   const updatedItems = newArr.filter((itm, idx) => idx !== index);
  //   console.log(updatedItems);

  //   setNewArr(updatedItems);
  // };

  const handleChecked = (index) => {
    const updatedItems = [...newArr];
    updatedItems[index].showDeleteBtn = !updatedItems[index].showDeleteBtn;
    setNewArr(updatedItems);
    // console.log(showDeleteBtn);
  };

  return (
    <div className="App">
      <div>
        {newArr.map((item, id) => {
          console.log(item);

          return (
            <li style={{ listStyle: "none" }} key={id}>
              <input
                type="checkbox"
                onClick={() => handleChecked(id)}
                checked={item.showDeleteBtn}
              />
              &nbsp;
              {item.item}&nbsp;
              {item.showDeleteBtn && (
                <button onClick={() => handleDelete(id)}>delete</button>
              )}
            </li>
          );
        })}
      </div>
    </div>
  );
}
