import React, { useState } from "react";

const jsonData = [
  {
    title: "Product1",
    image: "https://picsum.photos/200",
    price: 380,
    description: "first product",
  },
  {
    title: "Product2",
    image: "https://picsum.photos/200",
    price: 457,
    description: "second product",
  },
  {
    title: "Product3",
    image: "https://picsum.photos/200",
    price: 213,
    description: "Third product",
  },
];
const UserStory: React.FC = () => {
  const [selected, setSelected] = useState(false);
  const [value, setValue] = useState("");
  const optionHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(e.target.value);
    const val = e.target.value;
    setSelected(true);
    setValue(val);
  };
  return (
    <div>
      <select onChange={optionHandler} name="data" id="data">
        {jsonData.map((el, i) => {
          return (
            <option key={i} value={el.title}>
              {el.title}
            </option>
          );
        })}
      </select>
      {selected ? (
        <div>
          {jsonData.map((el, i) => {
            if (el.title === value) {
              return (
                <div key={i}>
                  <div>{el.title}</div>
                  <img src={el.image} alt="img" />
                  <div>description: {el.description}</div>
                  <div>Price: {el.price}</div>
                </div>
              );
            } else return <div key={i}></div>;
          })}
        </div>
      ) : null}
    </div>
  );
};

export default UserStory;
