import { useEffect, useState } from "react";
import useLocalStorage from "./hooks/useLocalStorage";
import { useInput } from "./hooks/useInput";
import { useFetch } from "./hooks/useFetch";

function App() {
  const [data] = useLocalStorage("query", "");
  const data2 = useInput(data);
  const { data3, loading, error } = useFetch(query);
  console.log(data2.value);
  return (
    <>
      <input type="text" name="prompt" {...data2} />
    </>
  );
}

export default App;
