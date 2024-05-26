import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./countryDetail.css";
import Layout from "../layout/Layout";

const CountryDetails = () => {
  const { code } = useParams();
  const [countryData, setCountryData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`https://restcountries.com/v3.1/alpha/${code}`).then((res) => {
      console.log("==>country by code", res.data);
      if (res.data) {
        setCountryData(res.data[0]);
      }
    });
  }, []);

  return (
    <Layout>
      <div className="back_btn" onClick={()=>navigate(-1)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-arrow-left"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"
          />
        </svg>
        Back
      </div>
      <div className="country_container">
        <div className="country_image_container">
          <img
            className="country_image"
            src={countryData ? countryData.flags.png : ""}
            alt=""
          />
        </div>
        <div className="country_details">
          <div className="country_name_detail">
            {countryData?.name?.official}
          </div>
          <div className="detail_container">
            <div className="detail_left">
              <div>
                <strong>Native Name: </strong>
                {countryData?.name?.nativeName?.ron?.official}
              </div>
              <div>
                <strong>Population: </strong>
                {countryData?.population}
              </div>
              <div>
                <strong>Region: </strong>
                {countryData?.region}
              </div>
              <div>
                <strong>Sub Region: </strong> {countryData?.subregion}
              </div>
              <div>
                <strong>Capital: </strong> {countryData?.capital[0]}
              </div>
            </div>
            <div className="detail_right">
              <div>
                <strong>Top level Domain:</strong> {countryData?.tld[0]}
              </div>
              <div>
                <strong>Currencies: </strong>
                {/* {countryData?.currencies?.MDL?.name} */}
                {JSON.stringify(countryData?.currencies)}
              </div>
              <div>
                <strong>Languages: </strong>
                {JSON.stringify(countryData?.languages)}
              </div>
            </div>
          </div>
          <div className="border_countries">Border Countries:  
          {countryData?.borders?.map((data)=>(
            <button className="btn btn-light disabled mx-2"> {data}</button>
          ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CountryDetails;
