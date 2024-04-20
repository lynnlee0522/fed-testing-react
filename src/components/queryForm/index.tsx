import axios from "axios";
import React, { useEffect, useState } from "react";

export const QueryForm = () => {
  const [fullName, setFullName] = useState("");
  const url = "https://randomuser.me/api/?inc=name";

  useEffect(() => {
    axios.get(url).then(({ data }) => {
      const { first, last } = data.results[0].name;
      setFullName(`${first} ${last}`);
    });
  }, []);

  return (
    <div>
      <input
        placeholder="type your name"
        type="text"
        value={fullName}
        onChange={(e) => {
          setFullName(e.target.value);
        }}
      />
      <p>
        my name is <span>{fullName}</span>
      </p>
    </div>
  );
};
