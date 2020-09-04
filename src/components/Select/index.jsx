import React from "react";

function Select(props) {
  let { counter, onChange } = props;
  let list = [];

  for (let i = 0; i < counter / 10; i++) {
    list.push(
      <option key={i} value={i + 1}>
        Page {i + 1}
      </option>
    );
  }

  return <select onChange={onChange}>{list}</select>;
}
export default Select;
