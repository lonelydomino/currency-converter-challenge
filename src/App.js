// `https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD`

import { useState, useEffect } from "react";

export default function App() {
  const [select1, setSelect1] = useState("USD");
  const [select2, setSelect2] = useState("EUR");
  const [numInput, setNumInput] = useState("");
  const [conversion, setConversion] = useState(0);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        `https://api.frankfurter.app/latest?amount=${numInput}&from=${select1}&to=${select2}`
      );
      const data = await res.json();
      const rate = data.rates[select2];
      setConversion(rate);
    };
    if (numInput !== 0 && numInput !== "" && select1 !== select2) fetchData();
  }, [numInput, select1, select2]);

  return (
    <div>
      <TextInput numInput={numInput} setNumInput={setNumInput} />
      <Select setSelect={setSelect1} select={select1} />
      <Select setSelect={setSelect2} select={select2} />
      <Output conversion={conversion} select2={select2} />
    </div>
  );
}

const Select = ({ setSelect, select }) => {
  return (
    <select onChange={(e) => setSelect(e.target.value)} value={select}>
      <option value="USD">USD</option>
      <option value="EUR">EUR</option>
      <option value="CAD">CAD</option>
      <option value="INR">INR</option>
    </select>
  );
};

const TextInput = ({ numInput, setNumInput }) => {
  return (
    <input
      type="text"
      value={numInput}
      onChange={(e) => setNumInput(Number(e.target.value))}
    />
  );
};

const Output = ({ conversion, select2 }) => {
  return <p>{conversion} {select2} </p>;
};
