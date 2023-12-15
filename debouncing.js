import { Select } from "antd";
import React from "react";

const Debouncing = () => {
  function debounce(call, delay) {
    let timer;
    return function (...args) {
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        call(...args);
      }, delay);
    };
  }

  const fetchData = (e) => {
    console.log(e);
  };

  const handleChange = debounce(fetchData, 500);

  const option = [
    { label: "a", value: "a" },
    { label: "b", value: "b" },
    { label: "c", value: "c" },
    { label: "d", value: "d" },
    { label: "e", value: "e" },
    { label: "f", value: "f" },
  ];

  return (
    <div>
      {/* <input placeholder="enter name" onChange={handleChange} /> */}

      <Select options={option} onChange={handleChange} mode="multiple" />
    </div>
  );
};

export default Debouncing;
