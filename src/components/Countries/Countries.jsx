import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);
  const handleVisitedCountry = (countries) => {
    console.log("Add visitd countries.");
    console.log(countries);
  };
  return (
    <div>
      <h2 className="text-xl ">Loading: {countries.length}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {countries.map((country) => {
          return (
            <Country
              country={country}
              key={country.cca2}
              handleVisitedCountry={handleVisitedCountry}
            ></Country>
          );
        })}
      </div>
    </div>
  );
};

export default Countries;
