import React, { useState } from "react";

const AddItem = ({ handleItem }) => {
  const [inputList, setInputList] = useState("");
  const [visible, setVisible] = useState(0);
  const items = (e) => {
    setInputList(e.target.value);
  };

  const addNew = () => {
    handleItem(inputList);
    setInputList("");
    setVisible(visible + 1);
  };
  return (
    <>
      <div className="center_div">
        <input
          placeholder="Add Something"
          value={inputList}
          data-textid="input"
          onChange={items}
        />
        <button disabled={visible === 5} data-testid="add-btn" onClick={addNew}>
          +
        </button>
      </div>
    </>
  );
};
export default AddItem;
