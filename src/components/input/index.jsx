import React from "react";

const Input = ({ onChange, value }) => {
  return (
    <div>
      <input
        value={value}
        onChange={e => onChange(e.target.value)}
        type="text"
      />
    </div>

  )
}

export default Input