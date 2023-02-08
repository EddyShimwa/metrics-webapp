import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { BsChevronLeft } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import { fetchCountry } from "../Redux/details";
import './detailsPage.css'

const Details = () => {
  const { country: countryName } = useParams();
  const dispatch = useDispatch();
  const country = useSelector((state) => state.country.country);

  useEffect(() => {
    if (countryName) {
      dispatch(fetchCountry(countryName));
    }
  }, [dispatch, countryName]);
  console.log(country);
  return (
    <div>
      <header>
        <li>
          <Link to="/">
            <BsChevronLeft />{" "}
            <div className="header" ><BiMicrophone style={{ width: '26px', height: '26px', padding: '10px' }}/> <CiSettings style={{ width: '26px', height: '26px', padding: '10px' }}/></div>
          </Link>
        </li>
      </header>
      {country.name ? (
        <div>

           <div className="country-title"><h1>{country.name.common}</h1><img src={country.flags.svg} alt={`Flag of ${country.name.common}`} className="flag" /></div>
           <ul>
            <li>Population: {country.population}</li>
            <li>Capital City: {country.capital}</li>
            <li><h3><a href="{country.maps.googleMaps}">View on map</a></h3></li>

           </ul>
        </div>
      ) : (
        <div>Loading...</div>
      )}
      <h1> Hello </h1>
    </div>
  );
};

export default Details;
