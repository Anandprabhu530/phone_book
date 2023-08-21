/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react";

const App = () => {
  const [name, setname] = useState([]);
  useEffect(() => {
    const lq = localStorage.getItem("lastQuery");
    search(lq);
  }, []);

  const search = async (q) => {
    const ans = await fetch(
      "http://localhost:8080/?" + new URLSearchParams({ q })
    );
    const org = await ans.json();
    setname(org);
    console.log(org);
  };
  return (
    <div>
      <h1>Phone Book</h1>
      <input
        type="text"
        placeholder="name"
        onChange={(e) => search(e.target.value)}
      />
      {name.map((solo_name) => (
        <Phone_Book_Mapping solo_name={solo_name} key={solo_name.id} />
      ))}
    </div>
  );
};

const Phone_Book_Mapping = ({ solo_name }) => {
  return (
    <li>
      {solo_name.name} <strong>-</strong> +{solo_name.phone_no}
    </li>
  );
};
export default App;
