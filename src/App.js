// `https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD`

import { useState, useEffect } from "react";

export default function App() {
  const [select1, setSelect1] = useState("USD");
  const [select2, setSelect2] = useState("USD");
  const [numInput, setNumInput] = useState('')
  useEffect(() => {

  }, [])

  return (
    <div>
      <TextInput numInput={numInput} setNumInput={setNumInput}/>
      <Select setSelect={setSelect1} select={select1}/>
      <Select setSelect={setSelect2} select={select2}/>
      <Output />
    </div>
  );
}

const Select = ({setSelect, select}) => {
  return (
    <select onChange={(e) => setSelect(e.target.value)} value={select}>
      <option value="USD">USD</option>
      <option value="EUR">EUR</option>
      <option value="CAD">CAD</option>
      <option value="INR">INR</option>
    </select>
  );
};

const TextInput = ({numInput, setNumInput}) => {
  return <input type="text" value={numInput} onChange={(e) => setNumInput(Number(e.target.value))}/>
}

const Output = () => {
  return <p>OUTPUT</p>
}