import MenuItem from "./menu-item";
import { useState } from "react";

export default function MenuList({ list = [] }) {
  console.log(list);
  const [count, setCount] = useState([]);
  function countCheck(index) {
    console.log(count);
    const curr = count.indexOf(index);
    if (curr !== -1) setCount((prev) => prev.filter((item) => item !== index));
    else setCount([...count, index]);
  }

  return (
    <ul className="menu-list-container">
      {list && list.length
        ? list.map((listItem, index) => {
            return (
              <div>
                <button onClick={() => countCheck(index)}></button>
                <MenuItem
                  item={listItem}
                  count={count.indexOf(index) !== -1 ? 1 : 0}
                ></MenuItem>
              </div>
            );
          })
        : null}
    </ul>
  );
}
