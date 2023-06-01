import React, { useEffect, useState } from "react";

interface obj {
  title: string;
  price: number;
}
const DisplayApi: React.FC = () => {
  const [data, setData] = useState<obj[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const fet = await fetch("http://localhost:3000/info");
      const val = await fet.json();
      setData(val);
    };
    fetchData();
  }, []);

  const removeHandler = (title: string) => {
    setData(data.filter((el) => el.title !== title));
  };
  console.log(data);
  return (
    <div>
      <div>Selected List</div>
      {data.map((el, i) => {
        return (
          <div key={i}>
            <span>
              {el.title}: {el.price}
            </span>
            <button onClick={removeHandler.bind(null, el.title)}>Remove</button>
          </div>
        );
      })}
    </div>
  );
};

export default DisplayApi;
