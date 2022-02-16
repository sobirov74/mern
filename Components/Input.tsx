import React, { useRef, useState } from "react";

interface ActionHendler {
  onAdd(title: string): void;
}

const Input: React.FC<ActionHendler> = (props) => {
  const ref = useRef<HTMLInputElement>(null);

  const [value, setInput] = useState("");

  const keyPressHandler = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      if (ref.current?.value !== "") {
        props.onAdd(ref.current!.value);
        setInput("");
      }
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setInput(event.target.value);
    // console.log(value);
  };

  return (
    <div className="container">
      <div className="input-field col s6">
        <input
          onChange={handleChange}
          onKeyPress={keyPressHandler}
          id="text"
          type="text"
          value={value}
          className="validate"
          ref={ref}
        />
      </div>
    </div>
  );
};

export default Input;
