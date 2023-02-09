import React, { useEffect, useState } from "react";
import URI from "../../common/config";

export const ShowMenu = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const response = await fetch(URI);
    const json = await response.json();
    setData(json);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
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
  );
};
