import { useState } from "react";

const Country = ({ country, handleVisitedCountry }) => {
  const { name, flags, population, area, cca3 } = country;
  const [visited, setVisited] = useState(false);
  const handleVisited = () => {
    setVisited(!visited);
  };
  console.log(handleVisitedCountry);
//   console.log(name);
  return (
    <div
      className={`border-2 border-green-600 rounded-xl m-4 p-4 items-center ${
        visited && "bg-gray-700"
      }`}
    >
      <h2 className="text-2xl text-white">Name: {name.common}</h2>
      <img src={flags.png} alt="" className="my-4 w-24 mx-auto" />
      <h3 className="text-xl font-medium">Population: {population}</h3>
      <p>Area: {area} </p>
      <small>Country Code: {cca3} </small> <br />
      <button className="block my-2 btn btn-accent" onClick={handleVisitedCountry}>Mark Visited</button>
      <button className="btn btn-success my-4" onClick={handleVisited}>
        {visited ? "Visited" : "Going"}
      </button>
      {visited ? "I have visited the country." : "I want to visit."}
    </div>
  );
};

export default Country;
