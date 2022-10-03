import axios from "axios";
import React, { useEffect, useState } from "react";

function CategorySlide() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.escuelajs.co/api/v1/categories")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  });
  return (
    <main className="p-2 m-2 border border-danger d-flex ">
      {data.map((item) => (
        <div className="border border-dark  m-2  p-2 flex-wrap d-flex">
          <img className="w-100 h-50" src={item.image} alt="image not found" />
          <div className="w-100  text text-center">
            <h3>{item.name}</h3>
          </div>
        </div>
      ))}
    </main>
  );
}
export default CategorySlide;
