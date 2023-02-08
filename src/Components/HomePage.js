import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import './homepage.css'
import { fetchData, addCountry } from "../Redux/Country/countrySlice";
import { CiSettings } from 'react-icons/ci'
import { BiMicrophone } from'react-icons/bi'
import { Link } from "react-router-dom";

const HomePage = () => {
  const dispatch = useDispatch();
  const list = useSelector(state => state.countries.list)

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch])

  useEffect(() => {
    dispatch(addCountry(list));
  }, [dispatch, list])


  return (
  <div className="section">
     <div className="header" ><BiMicrophone style={{ width: '26px', height: '26px', padding: '10px' }}/> <CiSettings style={{ width: '26px', height: '26px', padding: '10px' }}/></div>
    <div className="main-container">
      {list && list.length > 0 ?
        list.map((country) => (
          <div key={country.name.common} className="country-container">
            <ul>
              <li className="country-name">
              <Link to={`/country/${country.name.common}`}>{country.name.common} <img src={country.flags.png} alt={`Flag of ${country.name.common}`} className="flag" /></Link>
                 {/* <Link>{country.name.common} </Link> */}
                </li>
            </ul>
          </div>
        ))
        : <div className="loading">Loading...</div>
      }
    </div>
    </div>
  );
};

export default HomePage
