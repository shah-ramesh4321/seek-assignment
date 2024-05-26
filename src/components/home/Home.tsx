import Layout from "../layout/Layout";
import Filter from "../filters/Filter";
import CountryList, { countryListProps } from "./CountryList";
import "./home.css";
import { ChangeEvent, useEffect, useState } from "react";
import axios from "axios";

interface Country {
  name: string;
  region: string;
  // Add other properties as needed
}

const Home = () => {
  const [countryList, setCountryList] = useState<countryListProps[]>([]);
  const [regionList, setRegionList] = useState<string[]>([]);
  const [selectedRegion, setSelectedRegion] = useState<string>("");
  const [originalList, setOriginalList] = useState<countryListProps[]>([]);

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((res) => {
      console.log("==>", res.data);
      if (res.data) {
        setCountryList(res.data);
        setOriginalList(res.data);

        //Get all the unique region
        let arr: string[] = [];
        res.data.forEach((item: { region: string }) => {
          if (arr.indexOf(item.region) == -1) {
            arr.push(item.region);
          }
        });
        setRegionList(arr);
      }
    });
  }, []);

  //Region Change Filter handler
  const handleRegionChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = e.target.value;
    setSelectedRegion(selectedValue);

    if (selectedValue !== "") {
      const filteredCountries = originalList.filter(
        (country) => country.region === selectedValue
      );
      setCountryList(filteredCountries);
    } else {
      // If no region is selected, reset the country list to the original list
      setCountryList(originalList);
    }
  };

  //Country Seach handler
  const handleCountrySearch = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    const searchInput = e.target.value;
    const result = originalList.filter((country) =>
      country.name.common.toLowerCase().includes(searchInput.toLowerCase())
    );
    setCountryList(result);
  };

  return (
    <div>
      <Layout>
        <div className="home_filter">
          <Filter
            regionList={regionList}
            handleRegionChange={handleRegionChange}
            handleCountrySearch={handleCountrySearch}
          />
        </div>
        <CountryList countryList={countryList} />
      </Layout>
    </div>
  );
};

export default Home;
