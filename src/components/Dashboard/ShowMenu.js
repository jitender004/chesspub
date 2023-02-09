import React, { useEffect, useState } from "react";
import URI from "../../common/config";

export const ShowMenu = () => {
  const [data, setData] = useState([]);
  const [name, setName] = useState([]);
  const [value, getValue] = useState("hikaru");
  function selectName(e) {
    getValue(e.target.value);
  }
  console.log(value);
  const getName = async () => {
    const response = await fetch(`https://api.chess.com/pub/titled/GM`);
    const json = await response.json();
    setName(json.players);
  };
  const getData = async () => {
    const response = await fetch(`https://api.chess.com/pub/player/${value}`);
    const json = await response.json();
    setData(json);
  };
  useEffect(() => {
    getName();
  }, []);
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <select
        style={{ margin: "2rem 0 0 6rem" }}
        value={value}
        onChange={(e) => selectName(e)}
      >
        <option>Select Username</option>
        {name?.map((val, index) => {
          return (
            <option key={index} value={val}>
              {val}
            </option>
          );
        })}
      </select>
      <div className="container">
        <div className="card">
          <img src={data.avatar} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{data.title}</h5>
            <h5 className="card-title">{data.name}</h5>
            <h5 className="card-title">Username: {data.username}</h5>
            <h5 className="card-title">followers: {data.followers}</h5>
          </div>
        </div>
      </div>
    </>
  );
};
