import { Fragment } from "react";
import Item from "./Item";
import { Link, useNavigate } from "react-router-dom";

export type countryListProps = {
  name: countryName;
  population: number;
  region: string;
  capital: string;
  cca2: string;
  flags: {
    png: string | null;
    svg: string | null;
  };
};
type countryName = {
  common: string;
  official: string;
};

interface ParentComponentProps {
  countryList: countryListProps[];
}

const CountryList = ({ countryList }: ParentComponentProps) => {

  const  navigate = useNavigate();

  return (
    <div className="card-container">
      {countryList.map((country, index) => (
        <Fragment key={index}>
          <div onClick={()=>navigate(`/country/${country.cca2}`)}>
          <Item
            name={country.name.official}
            population={country.population}
            region={country.region}
            capital={country.capital}
            image={country.flags.png}
          />
          </div>
        </Fragment>
      ))}
    </div>
  );
};

export default CountryList;
