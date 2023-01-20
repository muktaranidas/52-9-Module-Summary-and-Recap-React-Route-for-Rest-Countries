import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const Countries = () => {
  const Countries = useLoaderData();
  console.log(Countries);
  return (
    <div>
      <h2>All Countries: {Countries.length}</h2>
      {Countries.map((country) => (
        <li key={country.cca3}>
          <Link to={`/country/${country.name.common}`}>
            {country.name.common}
          </Link>
        </li>
      ))}
    </div>
  );
};

export default Countries;
