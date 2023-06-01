import React, { useRef, useState } from "react";

interface str {
  addTodo(value: string): void;
}
const NewPost: React.FC<str> = (props) => {
  //   const inputData = useRef<HTMLInputElement>(null);
  // Access data
  const [inputData, setData] = useState<string>("");

  const formSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    let value = inputData;
    if (value) props.addTodo(value);
    setData("");
  };
  return (
    <div className="post">
      <form onSubmit={formSubmitHandler} action="">
        <input
          value={inputData}
          onChange={(val) => setData(val.target.value)}
          type="text"
        />
        <button type="submit">ToDo</button>
      </form>
    </div>
  );
};

export default NewPost;
