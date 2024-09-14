import { useEffect } from "react";
import { useState } from "react";

const useLocalStorage = (key, defaultValue) => {
  console.log(key);

  const [data, setData] = useState(
    () => JSON.parse(localStorage.getItem(key)) ?? defaultValue
  );
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(data));
    console.log("hook hello");
  }, [data, key]);
  return [data, setData];
};

export default useLocalStorage;
